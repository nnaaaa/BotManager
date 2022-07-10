import {
    Avatar,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Collapse,
    Stack,
    Typography,
} from '@mui/material'
import { BotEntity } from 'entities/bot.entity'
import { useState } from 'react'
import { AddBotButton } from '../addBotButton'

interface Props {
    bot: BotEntity
}

export function BotCard({ bot }: Props) {
    const [isExpanded, setExpanded] = useState(false)

    return (
        <Card>
            <CardActionArea>
                <CardContent>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <Avatar src={bot.avatarUrl} />
                        <Typography gutterBottom variant="h5" component="div">
                            {bot.name}
                        </Typography>
                    </Stack>
                    <Typography variant="body2" color="text.secondary" noWrap>
                        {bot.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Stack sx={{ flex: 1 }} direction="row" justifyContent="flex-end">
                    <AddBotButton bot={bot} />
                </Stack>
                {/* <ExpandMoreButton
                    expand={isExpanded}
                    onClick={() => setExpanded((pre) => !pre)}
                    aria-expanded={isExpanded}
                    aria-label="show more"
                >
                    <ExpandMore />
                </ExpandMoreButton> */}
            </CardActions>
            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography>Method:</Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}
