import {
    Avatar,
    Box,
    Divider,
    Grid,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Stack,
    Typography,
} from '@mui/material'
import { useMessageSocket } from 'apis/socket/useMessage.socket'
import { JsonView, Markdown } from 'components'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { MessageEntity } from 'entities/message.entity'
import { useEffect, useState } from 'react'
import { useAppSelector } from 'states/hooks'
import { ScrollStyled } from './styles'
import { useLoadMessage } from './useLoadMessage'

dayjs.extend(relativeTime)

export function MessageScreen() {
    const { activeMessage, messages, setActiveMessage } = useLoadMessage()

    return (
        <Box width="100%">
            <Typography variant="h4" gutterBottom>
                Take a look at the messages which your bot sent
            </Typography>
            <Typography variant="h6" color="text.disabled">
                Is it working?
            </Typography>

            <Grid container spacing={2} sx={{ mt: 4 }}>
                <Grid item xs={12} md={5}>
                    <ScrollStyled>
                        {messages.map((m) => (
                            <ListItemButton
                                key={m.messageId}
                                sx={{ alignItems: 'flex-start' }}
                                onClick={() => setActiveMessage(m)}
                                selected={m.messageId === activeMessage?.messageId}
                            >
                                <ListItemAvatar>
                                    <Avatar src={m.author.avatarUrl} />
                                </ListItemAvatar>
                                <Stack spacing={2} flex={1}>
                                    <ListItemText
                                        primary={m.author.nickname}
                                        primaryTypographyProps={{
                                            color: 'primary',
                                        }}
                                        secondary={`${dayjs(m.createdAt).fromNow()}`}
                                    />
                                    <Markdown text={m.content} />
                                    <Divider flexItem />
                                </Stack>
                            </ListItemButton>
                        ))}
                    </ScrollStyled>
                </Grid>
                <Grid item xs={12} md={7} sx={{ overflow: 'hidden' }}>
                    <ScrollStyled>
                        {activeMessage && <JsonView json={activeMessage} />}
                    </ScrollStyled>
                </Grid>
            </Grid>

            <Stack
                direction="row"
                sx={{ mt: 6, flex: 1 }}
                justifyContent="flex-end"
            ></Stack>
        </Box>
    )
}
