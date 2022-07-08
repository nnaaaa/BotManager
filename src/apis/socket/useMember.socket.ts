import { BotEntity } from 'entities/bot.entity'
import { GuildEntity } from 'entities/guild.entity'
import { MemberEntity } from 'entities/member.entity'
import { useContext } from 'react'
import { SocketContext } from 'states/context/socket'
import { SocketErrorDto } from './error.dto'

export const useMemberSocket = () => {
    const { memberSocket } = useContext(SocketContext)

    const joinGuild = async (bot: BotEntity, guild: GuildEntity) => {
        if (!memberSocket) return
        const data = await new Promise<MemberEntity | SocketErrorDto>((resolve) => {
            memberSocket.emit('botJoin', { guild, bot }, (data: MemberEntity) => {
                resolve(data)
            })
        })

        if ((data as SocketErrorDto).status) {
            console.error(data)
            return null
        }

        return data
    }

    return { joinGuild }
}
