import {
    Avatar,
    Box, Divider,
    Grid,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Stack,
    Typography
} from '@mui/material'
import { JsonView, Markdown } from 'components'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useAppSelector } from 'states/hooks'
import { Title } from 'styles'
import { MessageButtons } from './button'
import { MessageReacts } from './react'
import { Reply } from './replyTo'
import { MessageSelect } from './select'
import { ScrollStyled } from './styles'
import { useLoadMessage } from './useLoadMessage'

dayjs.extend(relativeTime)

export function MessageScreen() {
    const { profile } = useAppSelector((state) => state.bot)

    const { activeMessage, messages, setActiveMessage, clickButton, clickReact,clickSelect } =
        useLoadMessage()
    

    if (!profile) return <></>

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
                    <Title>{`Sent total ${messages.length} messages`}</Title>
                    <ScrollStyled>
                        {messages.map((m) => (
                            <Stack>
                                <ListItemButton
                                    selected={m.messageId === activeMessage?.messageId}
                                >
                                    <ListItemAvatar>
                                        <Avatar src={m.author.avatarUrl} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={m.author.nickname}
                                        primaryTypographyProps={{
                                            color: 'primary',
                                        }}
                                        secondary={`${dayjs(m.createdAt).fromNow()}`}
                                    />
                                </ListItemButton>
                                <ListItem
                                    sx={{
                                        flexDirection: 'column',
                                        alignItems: 'stretch',
                                    }}
                                    key={m.messageId}
                                    onClick={() => setActiveMessage(m)}
                                >
                                    <Box width="100%">
                                        <Markdown text={m.content} />
                                    </Box>

                                    <Grid container sx={{ mb: 1 }} spacing={1}>
                                        <MessageSelect
                                            selects={m.action.selects}
                                            clickSelect={clickSelect}
                                        />
                                    </Grid>

                                    <Grid container sx={{ mb: 1 }} spacing={1}>
                                        <MessageReacts
                                            reacts={m.action.reacts}
                                            clickReact={clickReact}
                                        />
                                    </Grid>

                                    <Grid container sx={{ mb: 1 }} spacing={1}>
                                        <MessageButtons
                                            buttons={m.action.buttons}
                                            clickButton={clickButton}
                                        />
                                    </Grid>
                                    <Reply replyTo={m.replyTo} />
                                    <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                                        <Typography>to</Typography>
                                        <Typography color="primary">
                                            {m.channel.name}
                                        </Typography>
                                        <Typography>channel</Typography>
                                    </Stack>
                                    <Divider flexItem />
                                </ListItem>
                            </Stack>
                        ))}
                    </ScrollStyled>
                </Grid>
                <Grid item xs={12} md={7} sx={{ overflow: 'hidden' }}>
                    <Title>Details</Title>

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
