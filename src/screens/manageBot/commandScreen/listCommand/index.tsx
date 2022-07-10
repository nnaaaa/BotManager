import { Error } from '@mui/icons-material'
import { Grid, List, Stack, Typography } from '@mui/material'
import { ExpandButton } from 'components'
import { CommandEntity } from 'entities/command.entity'
import { useEffect, useState } from 'react'
import { useAppSelector } from 'states/hooks'
import { EditCommandForm } from '../editForm'
import { Command } from './command'

export function ListCommand() {
    const { profile, isLoading } = useAppSelector((state) => state.bot)
    const [isOpen, setOpen] = useState(true)
    const [activeCommand, setActiveCommand] = useState<CommandEntity>()

    useEffect(() => {
        if (!profile || !profile.commands) return
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
                    <ExpandButton
                        isOpen={isOpen}
                        onClick={() => setOpen((pre) => !pre)}
                        textPrimary={`Listed Commands (${profile.commands.length})`}
                    />
                    {isOpen &&
                        profile.commands.map((command) => (
                            <Command
                                onClick={() => setActiveCommand(command)}
                                selected={activeCommand?.commandId === command.commandId}
                                className={profile.name}
                                funcName={command.name}
                                args={command.args}
                            />
                        ))}
                </List>
            </Grid>

            <Grid item xs={12} md={7}>
                <EditCommandForm command={activeCommand} />
            </Grid>
        </Grid>
    )
}
