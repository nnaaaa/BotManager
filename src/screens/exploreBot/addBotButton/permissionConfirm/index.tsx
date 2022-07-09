import { LoadingButton } from '@mui/lab'
import {
    Alert,
    Avatar,
    Checkbox,
    DialogActions,
    DialogContent,
    FormControlLabel,
    FormGroup,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Stack,
} from '@mui/material'
import Typography from '@mui/material/Typography'
import { useMemberSocket, useRoleSocket } from 'apis/socket'
import { BotEntity } from 'entities/bot.entity'
import { MemberEntity } from 'entities/member.entity'
import { Permission, RoleEntity } from 'entities/role.entity'
import { useState } from 'react'
interface Props {
    bot: BotEntity
    closePermissionConfirm: () => void
    activeMember: MemberEntity | undefined
}

export function PermissionConfirm({ bot, activeMember, closePermissionConfirm }: Props) {
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState<string>('')
    const [isAccept, setAccept] = useState(false)
    const { joinGuild } = useMemberSocket()

    const { createBotRole, addRoleToBot } = useRoleSocket()

    const onAdd = async () => {
        try {
            if (!activeMember) return
            setLoading(true)
            const member = (await joinGuild(bot, activeMember.guild)) as MemberEntity
            if (!member) throw new Error()

            const role = (await createBotRole(
                { name: bot.name, permissions: bot.requiredPermissions },
                activeMember.guild,
                activeMember
            )) as RoleEntity

            if (!role) throw new Error()

            await addRoleToBot(activeMember, member, role)

            setLoading(false)
            closePermissionConfirm()
        } catch (e) {
            console.log(e)
            setError('Bot is added')
        } finally {
            setLoading(false)
        }
    }
    return (
        <>
            <ListItem>
                <ListItemAvatar>
                    <Avatar src={bot.avatarUrl} />
                </ListItemAvatar>
                <ListItemText
                    primaryTypographyProps={{ fontWeight: 'bold', fontSize: 18 }}
                >
                    {bot.name + ' required permissions'}
                </ListItemText>
            </ListItem>

            <Alert severity="info">
                <Stack direction="row" alignItems="center" sx={{ mb: 1 }}>
                    <ListItemAvatar>
                        <Avatar src={activeMember?.guild.avatarUrl} />
                    </ListItemAvatar>
                    <ListItemText
                        primaryTypographyProps={{ fontWeight: 'bold', fontSize: 18 }}
                    >
                        {activeMember?.guild.name}
                    </ListItemText>
                </Stack>
                <Typography component="span">{`Role named `}</Typography>
                <Typography
                    component="span"
                    color="secondary"
                >{`[${bot.name}]`}</Typography>
                <Typography component="span">
                    {` with the following permissions will be `}
                </Typography>
                <Typography component="span" color="success.main">
                    [create]
                </Typography>
                <Typography component="span">&nbsp;and&nbsp;</Typography>
                <Typography component="span" color="success.main">
                    [add]
                </Typography>
                <Typography component="span">&nbsp;to bot automatically</Typography>
            </Alert>

            <DialogContent dividers>
                {bot.requiredPermissions.length > 0 ? (
                    <FormGroup>
                        {bot.requiredPermissions.map((permission: Permission) => {
                            const formatPermission = permission
                                .split('_')
                                .join(' ')
                                .toLowerCase()
                            return (
                                <FormControlLabel
                                    key={permission}
                                    control={
                                        <Checkbox
                                            checked={true}
                                            disabled={true}
                                            color="default"
                                        />
                                    }
                                    label={
                                        formatPermission[0].toUpperCase() +
                                        formatPermission.substring(1)
                                    }
                                />
                            )
                        })}
                    </FormGroup>
                ) : (
                    <Typography>No required permissions</Typography>
                )}
            </DialogContent>

            {Boolean(error) && (
                <Alert onClose={() => setError('')} severity="error">
                    {error}
                </Alert>
            )}
            <DialogActions>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={isAccept}
                            onChange={() => setAccept((pre) => !pre)}
                        />
                    }
                    label="Accept"
                />
                <LoadingButton
                    loading={isLoading}
                    size="small"
                    disabled={!isAccept}
                    onClick={onAdd}
                    variant="contained"
                >
                    Add
                </LoadingButton>
            </DialogActions>
        </>
    )
}
