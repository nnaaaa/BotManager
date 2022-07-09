import { Add, SmartToy, Shield, BorderColor, Adb, Message } from '@mui/icons-material'
import {
    Button,
    Grid,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
} from '@mui/material'
import { unwrapResult } from '@reduxjs/toolkit'
import { Loading } from 'components'
import { useEffect } from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'states/hooks'
import { botActions } from 'states/slices'
import { Title } from 'styles'
import { SelectBot } from './selectBot'
import { Left, Right, Wrapper } from './styles'

export function ManageBot() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { yourBots, profile: botProfile } = useAppSelector((state) => state.bot)
    const { profile, isLoading: isAuthLoading } = useAppSelector((state) => state.auth)
    const { pathname } = useLocation()

    useEffect(() => {
        if (yourBots.length > 0 && !botProfile) {
            dispatch(botActions.setBot(yourBots[0]))
            if (pathname === '/bot/manage/create') {
                navigate('/bot/manage/general')
                return
            }
        } else if (botProfile) {
            // navigate('/bot/manage/general')
        } else {
            navigate('/bot/manage/create')
        }
    }, [yourBots, botProfile])

    useEffect(() => {
        const fetchYourBots = async () => {
            unwrapResult(await dispatch(botActions.getFromAuthor()))
        }
        fetchYourBots().then(() => {})
    }, [])

    if (isAuthLoading) {
        return (
            <Wrapper>
                <Loading />
            </Wrapper>
        )
    }

    if (!profile) return <></>

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
                <Stack>
                    <Button
                        component={Link}
                        to="create"
                        startIcon={<Add />}
                        size="large"
                        variant={
                            pathname == '/bot/manage/create' ? 'contained' : 'outlined'
                        }
                        color="primary"
                        sx={{ textTransform: 'capitalize' }}
                    >
                        Create Bot
                    </Button>
                </Stack>

                {yourBots.length > 0 && (
                    <>
                        <Stack sx={{ mt: 4, width: '100%' }}>
                            <Title>Select bot</Title>
                            <SelectBot />
                        </Stack>

                        <Stack direction="column" sx={{ mt: 4, width: '100%' }}>
                            <Title>Bot Setting</Title>
                            <ListItemButton
                                component={Link}
                                to="general"
                                selected={pathname == '/bot/manage/general'}
                            >
                                <ListItemIcon>
                                    <SmartToy fontSize="medium" />
                                </ListItemIcon>
                                <ListItemText>General Information</ListItemText>
                            </ListItemButton>
                            <ListItemButton
                                component={Link}
                                to="addCommand"
                                selected={pathname == '/bot/manage/addCommand'}
                            >
                                <ListItemIcon>
                                    <BorderColor fontSize="medium" />
                                </ListItemIcon>
                                <ListItemText>Command</ListItemText>
                            </ListItemButton>
                            <ListItemButton
                                component={Link}
                                to="permission"
                                selected={pathname == '/bot/manage/permission'}
                            >
                                <ListItemIcon>
                                    <Shield fontSize="medium" />
                                </ListItemIcon>
                                <ListItemText>Permission</ListItemText>
                            </ListItemButton>
                        </Stack>

                        <Stack sx={{ mt: 4, width: '100%' }}>
                            <Title>Testing</Title>
                            <ListItemButton
                                component={Link}
                                to="message"
                                selected={pathname == '/bot/manage/message'}
                            >
                                <ListItemIcon>
                                    <Message fontSize="medium" />
                                </ListItemIcon>
                                <ListItemText>Sent Message</ListItemText>
                            </ListItemButton>
                        </Stack>
                    </>
                )}
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
                <Outlet />
            </Grid>
        </Grid>
    )
}

export * from './commandScreen'
export * from './createBotScreen'
export * from './general'
export * from './permissionPicker'
export * from './messageScreen'
