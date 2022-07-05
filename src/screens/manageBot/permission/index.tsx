import { LoadingButton } from '@mui/lab'
import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    Stack,
    Typography,
} from '@mui/material'
import { unwrapResult } from '@reduxjs/toolkit'
import { Permission } from 'entities/role.entity'
import { FormEvent, useEffect, useMemo, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'states/hooks'
import { botActions } from 'states/slices'
import { permissions as defaultPermissions } from 'utils/permissions'
import { Title } from './styles'

type PermissionState = {
    [Property in keyof Permission]: boolean
}

export function PermissionScreen() {
    const dispatch = useAppDispatch()
    const { profile, isLoading } = useAppSelector((state) => state.bot)
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

    const onSubmit = async (e: FormEvent) => {
        try {
            e.preventDefault()
            if (!profile) throw new Error('Profile is not defined')
            const checkedPermissions = []
            for (const check in permissions)
                if (permissions[check]) checkedPermissions.push(check)

            unwrapResult(
                await dispatch(
                    botActions.updateBot({
                        botId: profile.botId,
                        requiredPermissions: checkedPermissions as Permission[],
                    })
                )
            )
        } catch (e) {
            console.error(e)
        }
    }

    useEffect(() => {
        if (!profile || !profile.requiredPermissions) return
        setPermissions(initPermissionState)
    }, [profile])

    if (!profile) return <></>

    return (
        <Box width="100%">
            <Typography variant="h4" gutterBottom>
                Which permissions do you want to grant?
            </Typography>
            <Typography variant="h6" color="text.disabled">
                Let we give you some suggestions!
            </Typography>

            <Stack sx={{ mt: 4 }}>
                <Title>Recommend</Title>
                <FormGroup>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={isAllChecked}
                                onChange={() =>
                                    onManyCheck(Object.keys(permissions) as Permission[])
                                }
                            />
                        }
                        label="Admin"
                    />
                    <FormControlLabel
                        control={<Checkbox disabled={true} />}
                        label="Manage channels"
                    />
                    <FormControlLabel
                        control={<Checkbox disabled={true} />}
                        label="Manage messages"
                    />
                </FormGroup>
            </Stack>

            <Stack sx={{ mt: 4 }}>
                <Title>List permissions</Title>
                <FormGroup>
                    <Grid container spacing={2}>
                        {defaultPermissions.map((permission: Permission) => {
                            const formatPermission = permission
                                .split('_')
                                .join(' ')
                                .toLowerCase()
                            return (
                                <Grid item xs={4}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={permissions[permission as any]}
                                                onChange={() => onOneCheck(permission)}
                                            />
                                        }
                                        label={
                                            formatPermission[0].toUpperCase() +
                                            formatPermission.substring(1)
                                        }
                                    />
                                </Grid>
                            )
                        })}
                    </Grid>
                </FormGroup>
            </Stack>
            <Stack direction="row" sx={{ mt: 6, flex: 1 }} justifyContent="flex-end">
                <LoadingButton loading={isLoading} variant="contained" onClick={onSubmit}>
                    Save
                </LoadingButton>
            </Stack>
        </Box>
    )
}
