import { Env } from 'configs'
import axios, { AxiosError, AxiosRequestConfig } from 'axios'
import queryString from 'query-string'
import Cookie from 'js-cookie'
import { AuthAPI } from 'apis/auth.api'

export const normalCondition = {
    headers: {
        'content-type': 'application/json',
    },
}
const AxiosClient = axios.create({
    baseURL: Env.SERVER_HOST,
    ...normalCondition,
    paramsSerializer: (params) => queryString.stringify(params),
})
AxiosClient.interceptors.request.use(async (config: AxiosRequestConfig) => {
    if (config && config.headers) {
        const accessToken = Cookie.get('accesstoken')
        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`
        }
    }
    return config
})
AxiosClient.interceptors.response.use(
    (response) => {
        if (!response) return

        if (response.headers) {
            if (response.headers.accesstoken) {
                Cookie.set('accesstoken', response.headers.accesstoken)
            }
            if (response.headers.refreshtoken) {
                Cookie.set('refreshtoken', response.headers.refreshtoken)
            }
        }

        return response
    },
    async (error: AxiosError) => {
        if (error.status === '401') {
            const refreshToken = Cookie.get('refreshtoken')
            console.log({ refreshToken })
            if (!refreshToken) throw error

            try {
                await AuthAPI.refreshToken(refreshToken)
            } catch (e) {
                Cookie.remove('accesstoken')
                Cookie.remove('refreshtoken')
            }
        }
        // Handle errors
        throw error
    }
)

export { AxiosClient }
