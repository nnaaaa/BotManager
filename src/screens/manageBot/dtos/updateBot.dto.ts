import { Permission } from 'entities/role.entity'

export interface UpdateBotDto {
    botId: string
    name?: string
    description?: string
    requiredPermissions?: Permission[]
    avatarUrl?: string
    // commands: CreateCommandDto[]
}
