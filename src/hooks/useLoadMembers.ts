import { MemberEntity } from 'entities/member.entity'
import { useContext, useEffect } from 'react'
import { SocketContext } from 'states/context/socket'
import { useAppDispatch, useAppSelector } from 'states/hooks'
import { memberActions } from 'states/slices'

export const useLoadMembers = () => {
    const { memberSocket } = useContext(SocketContext)
    const { profile } = useAppSelector((state) => state.auth)

    const dispatch = useAppDispatch()

    useEffect(() => {
        const fetchMember = async () => {
            if (!memberSocket || !profile) return
            dispatch(memberActions.startLoading())
            return await new Promise<MemberEntity[]>((resolve) => {
                memberSocket.emit('getJoined', (data: MemberEntity[]) => resolve(data))
            })
        }
        fetchMember()
            .then((members) => {
                if (members) {
                    dispatch(memberActions.set(members))
                }
                else {
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
