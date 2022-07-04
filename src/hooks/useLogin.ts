import { useEffect } from 'react'
import { useAppDispatch } from 'states/hooks'
import { authActions } from 'states/slices'

export const useLogin = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(authActions.getProfile())
    }, [])
}
