import { BotEntity } from 'entities/bot.entity'
import { Permission } from 'entities/role.entity'
import { useEffect, useMemo, useState } from 'react'
import { permissions as defaultPermissions } from 'utils/permissions'

type PermissionState = {
    [Property in keyof Permission]: boolean
}

export const usePicker = (profile: BotEntity | undefined | null) => {
    const initPermissionState = useMemo<PermissionState>(() => {
        if (!profile || !profile.requiredPermissions) return {}
        const arrayPermissions = defaultPermissions.map((p) => ({
            [p]: profile.requiredPermissions.includes(p),
        }))

        return Object.assign({}, ...arrayPermissions)
    }, [profile, profile?.requiredPermissions])
    const [permissions, setPermissions] = useState<PermissionState>(initPermissionState)

    const isAllChecked = Object.values(permissions).every((isChecked) => isChecked)

    const onOneCheck = (permission: Permission) => {
        setPermissions((pre: any) => ({ ...pre, [permission]: !pre[permission] }))
    }
    const onManyCheck = (list: Permission[]) => {
        if (isAllChecked)
            setPermissions((pre: any) => ({
                ...pre,
                ...Object.assign({}, ...list.map((p) => ({ [p]: false }))),
            }))
        else
            setPermissions((pre: any) => ({
                ...pre,
                ...Object.assign({}, ...list.map((p) => ({ [p]: true }))),
            }))
    }

    useEffect(() => {
        if (!profile || !profile.requiredPermissions) return
        setPermissions(initPermissionState)
    }, [profile])

    return { permissions, isAllChecked, onOneCheck, onManyCheck, defaultPermissions }
}
