import { Permission } from 'entities/role.entity'

export interface CreateRoleDto {
    name: string

    icon?: string

    color?: string

    permissions: Permission[]
}
