import { BotEntity } from 'entities/bot.entity'
import { GuildEntity } from 'entities/guild.entity'
import { MemberEntity } from 'entities/member.entity'
import { RoleEntity } from 'entities/role.entity'
import { useContext } from 'react'
import { SocketContext } from 'states/context/socket'
import { CreateRoleDto } from 'utils/dtos/createRole.dto'
import { SocketErrorDto } from './error.dto'

export const useRoleSocket = () => {
    const { roleSocket } = useContext(SocketContext)

    const createBotRole = async (
        roleDto: CreateRoleDto,
        guild: GuildEntity,
        member: MemberEntity
    ) => {
        if (!roleSocket) return
        const data = await new Promise<RoleEntity | SocketErrorDto>((resolve) => {
            roleSocket.emit(
                'create',
                { guild, role: roleDto, memberId: member.memberId },
                (role: RoleEntity) => resolve(role)
            )
        })

        if ((data as SocketErrorDto).status) {
            console.error(data)
            return null
        }

        return data
    }

    const addRoleToBot = async (
        userMember: MemberEntity,
        botMember: MemberEntity,
        role: RoleEntity
    ) => {
        if (!roleSocket) return
        const data = await new Promise<void | SocketErrorDto>((resolve) => {
            roleSocket.emit(
                'addToMember',
                {
                    memberId: userMember.memberId,
                    role: { memberId: botMember.memberId, roleId: role.roleId },
                },
                () => {
                    resolve()
                }
            )
        })

        if ((data as SocketErrorDto).status) {
            console.error(data)
            return null
        }

        return data
    }

    return { createBotRole, addRoleToBot }
}
