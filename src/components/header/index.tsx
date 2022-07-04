import { AppBar, Box, Button, Stack, Toolbar } from '@mui/material'
import { Logo } from 'components'
import { Link } from 'react-router-dom'
import { BotButton } from './botButton'
import { ModeSwitch } from './modeSwitch'
import { ProfileButton } from './profileButton'
import { useStyle } from './styles'

export function Header() {
    const style = useStyle()

    return (
        <Box className={style.appBar}>
            <AppBar color="primary" position="fixed" className={style.toolBar}>
                <Toolbar>
                    <Stack direction="row" justifyContent="space-between" flex={1}>
                        <Stack direction="row" flex={1} alignItems="center" spacing={2}>
                            <Logo />

                            <Button
                                className={style.button}
                                component={Link}
                                to="/"
                                variant="text"
                                color="inherit"
                                sx={{ textTransform: 'capitalize' }}
                            >
                                Quick Start
                            </Button>

                            <BotButton/>

                            <Button
                                className={style.button}
                                component={Link}
                                to="doc"
                                variant="text"
                                color="inherit"
                                sx={{ textTransform: 'capitalize' }}
                            >
                                Doc
                            </Button>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <ModeSwitch />
                            <ProfileButton />
                        </Stack>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
