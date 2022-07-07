import Cookies from 'js-cookie'
import { useEffect } from 'react'

export function Home() {
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

    return <></>
}
