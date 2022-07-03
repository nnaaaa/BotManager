import { CommandEntity } from './command.entity'
import { MemberEntity } from './member.entity'
import { Permission } from './role.entity'
import { UserEntity } from './user.entity'

export interface BotEntity {
    botId: string

    avatarUrl: string

    isListening: boolean

    author: UserEntity

    joinedGuilds: MemberEntity[]

    commands: CommandEntity[]

    requiredPermissions: Permission[]
}
