import { Avatar, ListItemAvatar, Stack, Typography } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { BotEntity } from 'entities/bot.entity'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'states/hooks'
import { botActions } from 'states/slices'

export function SelectBot() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { profile, yourBots, isLoading } = useAppSelector((state) => state.bot)

    const [isOpen, setOpen] = useState(false)

    const handleChange = async (event: any) => {
        const botId = event.target.value
        if (!botId) return
        dispatch(
            botActions.setBot(yourBots.find((bot) => bot.botId === botId) as BotEntity)
        )
        navigate('general')
    }

    return (
        <Select
            sx={{ width: '100%' }}
            displayEmpty
            value={profile?.botId || ''}
            open={isOpen && !isLoading && yourBots.length > 0}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            renderValue={(value) => {
                return profile ? (
                    <Stack
                        sx={{ maxWidth: 180 }}
                        direction="row"
                        alignItems="center"
                        spacing={1}
                        onClick={() => setOpen(false)}
                    >
                        <Avatar src={profile.avatarUrl} />
                        <Typography noWrap>{profile.name}</Typography>
                    </Stack>
                ) : (
                    `Select your Bot`
                )
            }}
            MenuProps={{ PaperProps: { style: { maxHeight: 400, maxWidth: 180 } } }}
            onChange={handleChange}
        >
            {yourBots.map((bot) => (
                <MenuItem
                    key={bot.botId}
                    value={bot.botId}
                    onClick={() => setOpen(false)}
                >
                    <ListItemAvatar>
                        <Avatar src={bot.avatarUrl} />
                    </ListItemAvatar>
                    <Typography noWrap>{bot.name}</Typography>
                </MenuItem>
            ))}
        </Select>
    )
}
