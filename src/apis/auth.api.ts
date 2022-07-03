import { AxiosClient } from 'apis'
import { LoginDto } from '../screens/authenticate/login/dtos/local.dto'

export class AuthAPI {
    static namespace = 'auth'

    static async login(loginDto: LoginDto) {
        return AxiosClient.post(`${AuthAPI.namespace}/login`, loginDto)
    }
    static async refreshToken(token: string) {
        return AxiosClient.post(`${AuthAPI.namespace}/refreshToken`, {
            refreshToken: token,
        })
    }
    // async postRegister(userInfo: Partial<IUser>) {
    //     return AxiosClient.post(`auth/register`, userInfo)
    // }
}
