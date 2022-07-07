import { Box, CircularProgress, Grid, Typography } from '@mui/material'
import { unwrapResult } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'states/hooks'
import { botActions } from 'states/slices'
import { BotCard } from './guildCard'
import { ListBot } from './listBots'
import { ListGuild } from './listGuild'
import { Left, Right, Wrapper } from './styles'

export function ExploreBot() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        const fetchGlobalBots = async () => {
            unwrapResult(await dispatch(botActions.getAll()))
        }
        fetchGlobalBots().then(() => {})
    }, [])

    return (
        <Grid container component={Wrapper}>
            <Grid
                item
                container
                xs={12}
                md={3}
                alignItems="flex-start"
                component={Left}
                direction="column"
            >
                <ListGuild />
            </Grid>
            <Grid
                item
                container
                xs={12}
                md={9}
                alignItems="flex-start"
                direction="column"
                component={Right}
            >
                <Box width="100%" mb={8}>
                    <Typography variant="h4" gutterBottom>
                        Trending Bots
                    </Typography>
                    <Typography variant="h6" color="text.disabled">
                        Have a nice exploration!
                    </Typography>
                </Box>
                {/* <Outlet /> */}
                <ListBot />
            </Grid>
        </Grid>
    )
}
