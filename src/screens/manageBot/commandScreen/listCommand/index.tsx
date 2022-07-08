import { Error, KeyboardArrowDown } from '@mui/icons-material'
import {
    Avatar,
    Box,
    Button,
    CircularProgress,
    Grid,
    List,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Stack,
    Typography,
} from '@mui/material'
import { CommandEntity } from 'entities/command.entity'
import { useEffect, useState } from 'react'
import { useAppSelector } from 'states/hooks'
import { EditCommandForm } from '../editForm'

export function ListCommand() {
    const { profile, isLoading } = useAppSelector((state) => state.bot)
    const [isOpen, setOpen] = useState(true)
    const [activeCommand, setActiveCommand] = useState<CommandEntity>()

    useEffect(() => {
        if (!profile) return
        if (profile.commands.length > 0 && !activeCommand) {
            setActiveCommand(profile.commands[0])
        }
    }, [profile])

    useEffect(() => {
        if (!profile) return
        setActiveCommand(profile.commands[0] || null)
    }, [profile?.commands])

    if (!profile || !profile.commands) return <></>

    if (profile.commands.length === 0 || !activeCommand)
        return (
            <Stack direction="row" alignItems="center" spacing={2}>
                <Typography color="text.secondary" fontSize="22px">
                    This bot has no commands!
                </Typography>
                <Error color="disabled" />
            </Stack>
        )

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={5}>
                <List>
                    <ListItemButton
                        alignItems="flex-start"
                        onClick={() => setOpen((pre) => !pre)}
                        sx={{
                            pt: 1,
                        }}
                    >
                        <ListItemText
                            primary="Listed Commands"
                            primaryTypographyProps={{
                                fontSize: 22,
                                fontWeight: 'medium',
                                lineHeight: '20px',
                            }}
                        />
                        {isLoading ? (
                            <CircularProgress variant="indeterminate" size="24px" />
                        ) : (
                            <KeyboardArrowDown
                                sx={{
                                    mr: -1,
                                    transform: isOpen ? 'rotate(-180deg)' : 'rotate(0)',
                                    transition: '0.2s',
                                }}
                            />
                        )}
                    </ListItemButton>
                    {isOpen &&
                        profile.commands.map((command) => (
                            <ListItemButton onClick={() => setActiveCommand(command)}>
                                <Typography
                                    noWrap
                                    color="primary"
                                    sx={{ maxWidth: '30%' }}
                                >
                                    {profile.name}
                                </Typography>
                                <Typography fontWeight="bold">&nbsp;.&nbsp;</Typography>
                                <Typography
                                    noWrap
                                    color="text.disabled"
                                    sx={{ maxWidth: '70%' }}
                                >
                                    {command.name}
                                </Typography>
                            </ListItemButton>
                        ))}
                </List>
            </Grid>

            <Grid item xs={12} md={7}>
                <EditCommandForm command={activeCommand} />
            </Grid>
        </Grid>
    )
}
