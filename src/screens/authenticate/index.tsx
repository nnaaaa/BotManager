import { Box } from '@mui/material'
import Logo from 'components/logo'
import { useState } from 'react'
// import { useAppSelector } from 'states/hooks'
import Login from './login'
import Register from './register'
import { Wrapper } from './styles'

export default function Authentication() {
    const [isLogin, setIsLogin] = useState(true)
    const switchForm = () => setIsLogin(!isLogin)
    // const status = useAppSelector((state) => state.auth.state)

    // if (status === 'logged') return <Redirect to="/" />

    return (
        <Wrapper>
            {isLogin && <Login switchForm={switchForm} />}
            {!isLogin && <Register switchForm={switchForm} />}
        </Wrapper>
    )
}
