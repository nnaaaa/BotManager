import { Permission } from 'entities/role.entity'
import { CreateCommandDto } from './createCommand.dto'

export interface CreateBotDto {
    name: string
    description: string
    requiredPermission?: Permission[]
    avatarUrl?: string
    // commands: CreateCommandDto[]
}
