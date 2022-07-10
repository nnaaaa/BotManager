import { PeopleAltOutlined } from '@mui/icons-material'
import {
    Avatar,
    Box,
    IconButton,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Stack,
} from '@mui/material'
import { ExpandButton } from 'components'
import { useState } from 'react'
import { useAppSelector } from 'states/hooks'

export function ListGuild() {
    const [isOpen, setOpen] = useState(true)

    const { members, isLoading } = useAppSelector((state) => state.member)

    return (
        <Box sx={{ width: '100%' }}>
            <ExpandButton
                isLoading={isLoading}
                isOpen={isOpen}
                startIcon={<PeopleAltOutlined />}
                textPrimary="Guilds"
                textSecondary="Click to see the list of guilds"
                onClick={() => setOpen((pre) => !pre)}
            />
            {isOpen &&
                members.map(({ guild, memberId, nickname, avatarUrl }) => (
                    <ListItemButton key={memberId}>
                        <ListItemAvatar>
                            <Avatar src={guild.avatarUrl} />
                        </ListItemAvatar>
                        <Stack flex={1}>
                            <ListItemText
                                primary={guild.name}
                                primaryTypographyProps={{
                                    fontSize: 18,
                                }}
                            />
                            <ListItem sx={{ p: 0 }}>
                                <ListItemAvatar sx={{ p: 0, minWidth: 'auto', mr: 1 }}>
                                    <Avatar
                                        src={avatarUrl}
                                        sx={{ width: 24, height: 24 }}
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={nickname}
                                    primaryTypographyProps={{
                                        fontSize: 14,
                                        color: 'text.secondary',
                                    }}
                                />
                            </ListItem>
                        </Stack>
                        <IconButton disabled={true}>
                            <PeopleAltOutlined />
                        </IconButton>
                    </ListItemButton>
                ))}
        </Box>
    )
}
