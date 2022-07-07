import { CircularProgress, Grid } from '@mui/material'
import { useAppSelector } from 'states/hooks'
import { BotCard } from '../guildCard'
import { Wrapper } from './styles'

export function ListBot() {
    const { globalBots, isLoading } = useAppSelector((state) => state.bot)
    if (isLoading)
        return (
            <Wrapper>
                <CircularProgress />
            </Wrapper>
        )

    return (
        <Grid item container spacing={2}>
            {globalBots.map((bot) => (
                <Grid item xs={6} md={4} lg={3} key={bot.botId}>
                    <BotCard bot={bot} />
                </Grid>
            ))}
        </Grid>
    )
}
