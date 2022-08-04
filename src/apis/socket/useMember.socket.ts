import { BotEntity } from 'entities/bot.entity'
import { GuildEntity } from 'entities/guild.entity'
import { MemberEntity } from 'entities/member.entity'
import { useContext } from 'react'
import { SocketContext } from 'states/contexts/socket'
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

    const getJoined = async () => {
        if (!memberSocket) return
        return await new Promise<MemberEntity[]>((resolve) => {
            memberSocket.emit('getJoined', (data: MemberEntity[]) => resolve(data))
        })
    }

    return { joinGuild, getJoined }
}
