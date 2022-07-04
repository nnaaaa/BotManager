import { Avatar, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { BotEntity } from 'entities/bot.entity'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'states/hooks'
import { botActions } from 'states/slices'


export function SelectBot() {
    const dispatch = useAppDispatch()
    const { profile: botProfile } = useAppSelector((state) => state.bot)
    
    const { profile, isLoading } = useAppSelector((state) => state.auth)
    const [isOpen, setOpen] = useState(false)

    if (!profile || isLoading) return <></>

    const handleChange = (event: any) => {
        const botId = event.target.value as string
        dispatch(botActions.setBot(profile.createdBots.find((bot) => bot.botId === botId) as BotEntity))
    }

    return (
        <Select
            sx={{width:'100%'}}
            displayEmpty
            value={botProfile || ''}
            open={isOpen && Boolean(profile.createdBots)}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
            renderValue={(value) => {
                return botProfile ? (
                    <Stack sx={{maxWidth:180}} direction='row' alignItems='center' spacing={1} onClick={() => setOpen(false)}>
                        <Avatar src={botProfile.avatarUrl} />
                        <Typography noWrap>{botProfile.name}</Typography>
                    </Stack>
                ) : (
                    `Select your Bot`
                )
            }}
            MenuProps={{ PaperProps: { style: { maxHeight: 400,maxWidth:180 } } }}
            onChange={handleChange}
        >
            {profile.createdBots &&
                profile.createdBots.map((bot) => (
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
