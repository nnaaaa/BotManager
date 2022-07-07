import { BotEntity } from 'entities/bot.entity'
import { GuildEntity } from 'entities/guild.entity'
import { MemberEntity } from 'entities/member.entity'
import { useContext } from 'react'
import { SocketContext } from 'states/context/socket'

export const useMemberSocket = () => {
    const { memberSocket } = useContext(SocketContext)

    const joinGuild = async (bot: BotEntity, guild: GuildEntity) => {
        if (!memberSocket) return
        const data = await new Promise<MemberEntity>((resolve) => {
            memberSocket.emit('botJoin', { guild, bot }, (data: MemberEntity) =>
                resolve(data)
            )
        })

        return data
    }

    return { joinGuild }
}
