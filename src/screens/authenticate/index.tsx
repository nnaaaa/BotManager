import { useNavigate } from 'react-router-dom'
import { useAppSelector } from 'states/hooks'
import Login from './login'
import { Wrapper } from './styles'

export function Authentication() {
    const navigate = useNavigate()
    const { profile } = useAppSelector((state) => state.auth)

    if (profile) {
        navigate('bot', { replace: true })
    }

    return (
        <Wrapper>
            <Login />
        </Wrapper>
    )
}
