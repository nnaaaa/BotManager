import { ExpandMore } from '@mui/icons-material'
import {
    Avatar,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Collapse,
    Stack,
} from '@mui/material'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Popup } from 'components'
import { BotEntity } from 'entities/bot.entity'
import { useState } from 'react'
import { SelectGuild } from './selectGuild'
import { ExpandMoreButton } from './styles'

interface Props {
    bot: BotEntity
}

export function AddBotButton({ bot }: Props) {
    const [isOpen, setOpen] = useState(false)
    const [isExpanded, setExpanded] = useState(false)

    return (
        <>
            <Button
                size="small"
                color="primary"
                variant="contained"
                onClick={() => setOpen((pre) => !pre)}
            >
                Add
            </Button>
            <Popup open={isOpen} onClose={() => setOpen(false)}>
                <Card sx={{ width: 340 }}>
                    <CardContent>
                        {/* <Stack direction="row" alignItems="center" spacing={1}>
                                <Avatar src={bot.avatarUrl} />
                                <Typography gutterBottom variant="h5" component="div">
                                    {bot.name}
                                </Typography>
                            </Stack> */}
                        <Typography color="text.secondary">Select guild</Typography>
                    </CardContent>
                    {/* <CardActions>
                        <Stack sx={{ flex: 1 }} direction="row" justifyContent="flex-end">
                            <ExpandMoreButton
                                expand={isExpanded}
                                onClick={() => setExpanded((pre) => !pre)}
                                aria-expanded={isExpanded}
                                aria-label="show more"
                            >
                                <ExpandMore />
                            </ExpandMoreButton>
                        </Stack>
                    </CardActions>
                    <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography>Method:</Typography>
                        </CardContent>
                    </Collapse> */}
                    <SelectGuild bot={bot} closeModal={() => setOpen(false)} />
                </Card>
            </Popup>
        </>
    )
}
