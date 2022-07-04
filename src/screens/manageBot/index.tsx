import { Add, Handyman, Home } from '@mui/icons-material'
import {
    Button,
    CircularProgress,
    Grid,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
} from '@mui/material'
import { Loading } from 'components/loading'
import { BotEntity } from 'entities/bot.entity'
import { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'states/hooks'
import { botActions } from 'states/slices'
import { SelectBot } from './selectBot'
import { Left, Right, Title, Wrapper } from './styles'

type Screen = 'info' | 'permission' | 'create'

export function ManageBot() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { profile, isLoading } = useAppSelector((state) => state.auth)
    const [currentScreen, setCurrentScreen] = useState<Screen>('create')

    useEffect(() => {
        if (profile && profile.createdBots && profile.createdBots.length > 0) {
            dispatch(botActions.setBot(profile.createdBots[0] as BotEntity))
            setCurrentScreen('info')
            navigate('/bot/general')
        }
    }, [profile])

    if (isLoading) {
        return (
            <Wrapper>
                <Loading />
            </Wrapper>
        )
    }

    if (!profile) return <></>

    return (
        <>
            <Grid container component={Wrapper}>
                <Grid
                    item
                    container
                    xs={3}
                    alignItems="flex-start"
                    component={Left}
                    direction="column"
                >
                    <Stack>
                        <Button
                            component={Link}
                            to="create"
                            startIcon={<Add fontSize="medium" />}
                            variant={currentScreen == 'create' ? 'contained' : 'outlined'}
                            color="primary"
                            sx={{ textTransform: 'capitalize', fontSize: 18 }}
                            onClick={() => setCurrentScreen('create')}
                        >
                            Create Bot
                        </Button>
                    </Stack>

                    {profile.createdBots && profile.createdBots.length > 0 && (
                        <>
                            <Stack sx={{ mt: 4,width:'100%' }}>
                                <Title>Select bot</Title>
                                <SelectBot />
                            </Stack>

                            <Stack direction="column" sx={{ mt: 4,width:'100%' }}>
                                <Title>Bot Setting</Title>
                                <ListItemButton
                                    component={Link}
                                    to="general"
                                    selected={currentScreen == 'info'}
                                    onClick={() => setCurrentScreen('info')}
                                >
                                    <ListItemIcon>
                                        <Home fontSize="medium" />
                                    </ListItemIcon>
                                    <ListItemText>General Information</ListItemText>
                                </ListItemButton>
                                <ListItemButton
                                    component={Link}
                                    to="permission"
                                    selected={currentScreen == 'permission'}
                                    onClick={() => setCurrentScreen('permission')}
                                >
                                    <ListItemIcon>
                                        <Handyman fontSize="medium" />
                                    </ListItemIcon>
                                    <ListItemText>Permission</ListItemText>
                                </ListItemButton>
                            </Stack>
                        </>
                    )}
                </Grid>
                <Grid
                    item
                    container
                    xs={9}
                    alignItems="flex-start"
                    direction="column"
                    component={Right}
                >
                    <Outlet />
                </Grid>
            </Grid>
        </>
    )
}
