import { AppBar, Avatar, Box, Button, Grid, Stack, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'
import { useStyle } from './styles'
import Logo from 'components/logo'
import Setting from './setting'

function Header() {
    const style = useStyle()

    return (
        <Box className={style.appBar}>
            <AppBar color="inherit" position="fixed" className={style.toolBar}>
                <Toolbar>
                    <Stack direction="row" justifyContent="space-between" flex={1}>
                        <Stack direction="row" flex={1} alignItems="center" spacing={2}>
                            <Logo />

                            <Button
                                className={style.button}
                                component={Link}
                                to="/"
                                variant="text"
                                sx={{ textTransform: 'capitalize' }}
                            >
                                Quick Start
                            </Button>

                            <Button
                                className={style.button}
                                component={Link}
                                to="/"
                                variant="text"
                                sx={{ textTransform: 'capitalize' }}
                            >
                                Bot
                            </Button>

                            <Button
                                className={style.button}
                                component={Link}
                                to="/"
                                variant="text"
                                sx={{ textTransform: 'capitalize' }}
                            >
                                Doc
                            </Button>
                        </Stack>
                        <Stack direction="row" alignItems="center">
                            <Setting />
                        </Stack>
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header
