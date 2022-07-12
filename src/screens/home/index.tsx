import { Button, Stack, Typography } from '@mui/material'
import Cookies from 'js-cookie'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useStyle, Wrapper } from './styles'

export function Home() {
    const style = useStyle()
    useEffect(() => {
        if (!window.location.search) return

        const params = new URLSearchParams(window.location.search)
        const accessToken = params.get('accessToken')
        const refreshToken = params.get('refreshToken')
        if (!accessToken || !refreshToken) return
        Cookies.set('accesstoken', accessToken)
        Cookies.set('refreshtoken', refreshToken)

        window.location.search = ''
    }, [window.location.search])

    return (
        <Wrapper className={style.wrapper}>
            <Typography variant="h1" sx={{ fontFamily: 'FrederGreat' }} color="white">
                Disney
            </Typography>
            <Stack sx={{ mt: 4 }} direction="row" spacing={2}>
                <Button
                    size="large"
                    variant="contained"
                    component={Link}
                    to="doc/quickstart/implement"
                >
                    Quick Start
                </Button>
                <Button
                    size="large"
                    variant="outlined"
                    component={Link}
                    to="bot/manage/create"
                >
                    Create Bot
                </Button>
            </Stack>
        </Wrapper>
    )
}
