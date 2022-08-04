import { useMemberSocket } from 'apis/socket'
import { useContext, useEffect } from 'react'
import { SocketContext } from 'states/contexts/socket'
import { useAppDispatch, useAppSelector } from 'states/hooks'
import { memberActions } from 'states/slices'

export const useLoadMembers = () => {
    const { memberSocket } = useContext(SocketContext)
    const { profile } = useAppSelector((state) => state.auth)
    const { getJoined } = useMemberSocket()
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(memberActions.startLoading())
        getJoined()
            .then((members) => {
                if (members) {
                    dispatch(memberActions.set(members))
                } else {
                    dispatch(memberActions.clear())
                }
            })
            .catch(() => {
                dispatch(memberActions.endLoading())
            })
            .finally(() => {
                dispatch(memberActions.endLoading())
            })
    }, [memberSocket, profile])
}
