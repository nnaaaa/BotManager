import { LoadingButton } from '@mui/lab'
import {
    Alert,
    Avatar,
    Card,
    CardContent,
    CardHeader,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControlLabel,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Snackbar,
    Stack,
} from '@mui/material'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useMemberSocket, useRoleSocket } from 'apis/socket'
import { Popup } from 'components'
import { BotEntity } from 'entities/bot.entity'
import { MemberEntity } from 'entities/member.entity'
import { RoleEntity } from 'entities/role.entity'
import { useState } from 'react'
import { PermissionReview } from './permissionReview'
import { SelectGuild } from './selectGuild'

interface Props {
    bot: BotEntity
}

export function AddBotButton({ bot }: Props) {
    const [isLoading, setLoading] = useState(false)
    const [error, setError] = useState<string>('')

    const [isOpenSelectGuild, setOpenSelectGuild] = useState(false)
    const [isOpenPermissionReview, setOpenPermissionReview] = useState(false)
    const [isAccept, setAccept] = useState(false)
    const [activeMember, setActiveMember] = useState<MemberEntity>()
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
            setOpenPermissionReview(false)
        } catch (e) {
            setError('Bot is added')
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <Button
                size="small"
                color="primary"
                variant="contained"
                onClick={() => setOpenSelectGuild((pre) => !pre)}
            >
                Add
            </Button>
            <Popup open={isOpenSelectGuild} onClose={() => setOpenSelectGuild(false)}>
                <DialogTitle>Select guild</DialogTitle>
                {/* <Stack direction="row" alignItems="center" spacing={1}>
                                <Avatar src={bot.avatarUrl} />
                                <Typography gutterBottom variant="h5" component="div">
                                    {bot.name}
                                </Typography>
                            </Stack> */}
                <SelectGuild
                    closeModal={() => setOpenSelectGuild(false)}
                    openReviewPermission={() => setOpenPermissionReview(true)}
                    setActiveMember={setActiveMember}
                />
                {/* <CardActions>
                        <Stack sx={{ flex: 1 }} direction="row" justifyContent="flex-end">
                            <ExpandMoreButton
                                expand={isExpanded}
                                onClick={() => setExpanded((pre) => !pre)}
                                aria-expanded={isExpanded}
                                aria-label="show more"
                            >
                                <ExpandMore />
                            </ExpandMoreButton>
                        </Stack>
                    </CardActions>
                    <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography>Method:</Typography>
                        </CardContent>
                    </Collapse> */}
            </Popup>

            <Popup
                open={isOpenPermissionReview}
                onClose={() => setOpenPermissionReview(false)}
            >
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

                <DialogContent dividers>
                    <Typography
                        component="span"
                        color="primary"
                    >{`[${bot.name}]`}</Typography>
                    <Typography component="span" color="text.secondary">
                        {` role with the following permissions will be `}
                    </Typography>
                    <Typography component="span" color="primary">
                        [create]
                    </Typography>
                    <Typography component="span" color="text.disabled">
                        &nbsp;and&nbsp;
                    </Typography>
                    <Typography component="span" color="primary">
                        [add]
                    </Typography>
                    <Typography component="span" color="text.disabled">
                        &nbsp;to bot automatically
                    </Typography>
                    <PermissionReview bot={bot} />
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
            </Popup>
        </>
    )
}
