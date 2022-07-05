
import {Env} from 'configs/index'
import { GoogleLoginButton } from 'react-social-login-buttons'
import { useStyle } from '../styles'

export function GoogleButton() {
    const style = useStyle()
  return (
    <GoogleLoginButton style={{fontSize:16}} onClick={() => window.open(`${Env.SERVER_HOST}/auth/google`, '_self')} />
  )
}
