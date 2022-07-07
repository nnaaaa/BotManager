import { KeyboardArrowDown, PeopleAltOutlined } from '@mui/icons-material'
import {
    Avatar,
    Box,
    CircularProgress,
    IconButton,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Stack,
} from '@mui/material'
import { useState } from 'react'
import { useAppSelector } from 'states/hooks'

export function ListGuild() {
    const [isOpen, setOpen] = useState(true)

    const { members, isLoading } = useAppSelector((state) => state.member)

    return (
        <Box sx={{ width: '100%' }}>
            <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpen((pre) => !pre)}
                sx={{
                    px: 3,
                    pt: 2.5,
                }}
            >
                <PeopleAltOutlined sx={{ mr: 1 }} />
                <ListItemText
                    primary="Guild"
                    primaryTypographyProps={{
                        fontSize: 22,
                        fontWeight: 'medium',
                        lineHeight: '20px',
                        mb: '2px',
                    }}
                    secondary="you have joined"
                    secondaryTypographyProps={{
                        noWrap: true,
                        fontSize: 14,
                        lineHeight: '16px',
                        color: isOpen ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                    }}
                    sx={{ my: 0 }}
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
                        <IconButton>
                            <PeopleAltOutlined />
                        </IconButton>
                    </ListItemButton>
                ))}
        </Box>
    )
}
