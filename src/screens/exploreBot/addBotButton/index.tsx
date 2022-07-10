import Button from '@mui/material/Button'
import { Popup } from 'components'
import { BotEntity } from 'entities/bot.entity'
import { MemberEntity } from 'entities/member.entity'
import { useState } from 'react'
import { PermissionConfirm } from './permissionConfirm'
import { SelectGuild } from './selectGuild'

interface Props {
    bot: BotEntity
}

export function AddBotButton({ bot }: Props) {
    const [isOpenSelectGuild, setOpenSelectGuild] = useState(false)
    const [isOpenPermissionConfirm, setOpenPermissionConfirm] = useState(false)
    const [activeMember, setActiveMember] = useState<MemberEntity>()

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
                {/* <Stack direction="row" alignItems="center" spacing={1}>
                                <Avatar src={bot.avatarUrl} />
                                <Typography gutterBottom variant="h5" component="div">
                                    {bot.name}
                                </Typography>
                            </Stack> */}
                <SelectGuild
                    closeModal={() => setOpenSelectGuild(false)}
                    openReviewPermission={() => setOpenPermissionConfirm(true)}
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
                open={isOpenPermissionConfirm}
                onClose={() => setOpenPermissionConfirm(false)}
            >
                <PermissionConfirm
                    activeMember={activeMember}
                    bot={bot}
                    closePermissionConfirm={() => setOpenPermissionConfirm(false)}
                />
            </Popup>
        </>
    )
}
