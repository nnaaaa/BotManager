import { Permission } from 'entities/role.entity'

export interface CreateBotDto {
    name: string
    description: string
    requiredPermission?: Permission[]
    avatarUrl?: string
    // commands: CreateCommandDto[]
}
