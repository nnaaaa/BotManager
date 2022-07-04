import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from 'states/hooks'
import Login from './login'
import Register from './register'
import { Wrapper } from './styles'

export function Authentication() {
    const [isLogin, setIsLogin] = useState(true)
    const switchForm = () => setIsLogin(!isLogin)
    const navigate = useNavigate()
    const { profile } = useAppSelector((state) => state.auth)

    if (profile) {
        navigate('bot', { replace: true })
    }

    return (
        <Wrapper>
            {isLogin && <Login switchForm={switchForm} />}
            {!isLogin && <Register switchForm={switchForm} />}
        </Wrapper>
    )
}
