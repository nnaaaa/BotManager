import { KeyboardArrowDown, PeopleAltOutlined } from '@mui/icons-material'
import {
    Avatar,
    Box,
    CircularProgress,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Stack,
    Typography,
} from '@mui/material'
import { GuildAPI } from 'apis'
import { GuildEntity } from 'entities/guild.entity'
import { useState } from 'react'
import { useQuery } from 'react-query'
import { LiistItemButtonCustom } from './styles'

export function ListGuild() {
    const [open, setOpen] = useState(false)

    const { data, isLoading } = useQuery('joinedGuild', GuildAPI.getJoined)

    return (
        // <List component={Wrapper}>
        //     <ListItemText>Guilds</ListItemText>
        //     <ListItemButton>
        //         <ListItemAvatar>
        //             <Avatar>G</Avatar>
        //         </ListItemAvatar>
        //         <ListItemText>Guildddd</ListItemText>
        //     </ListItemButton>
        // </List>
        <Box sx={{ width: '100%', p: 2 }}>
            <ListItemButton
                alignItems="flex-start"
                onClick={() => setOpen(!open)}
                sx={{
                    px: 3,
                    pt: 2.5,
                    // pb: open ? 0 : 2.5,
                    // '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
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
                        color: open ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                    }}
                    sx={{ my: 0 }}
                />
                {isLoading ? (
                    <CircularProgress variant="indeterminate" size="24px" />
                ) : (
                    <KeyboardArrowDown
                        sx={{
                            mr: -1,
                            transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                            transition: '0.2s',
                        }}
                    />
                )}
            </ListItemButton>
            {open &&
                data &&
                data.map(({ guild, memberId, nickname, avatarUrl }) => (
                    <ListItemButton
                        key={memberId}
                        sx={{
                            borderColor: 'text.disabled',
                            borderWidth: 1,
                            borderStyle: 'solid',
                        }}
                    >
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
										color:'text.secondary'
                                    }}
                                />
                            </ListItem>
                        </Stack>
                    </ListItemButton>
                ))}
        </Box>
    )
}
