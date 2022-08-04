import { Env } from 'configs'
import Cookies from 'js-cookie'
import { createContext, ReactNode, useMemo } from 'react'
import { Manager, Socket } from 'socket.io-client'
import { useAppSelector } from 'states/hooks'

interface ISocketContext {
    memberSocket: Socket | null
    roleSocket: Socket | null
    messageSocket: Socket | null
    buttonSocket: Socket | null
    reactSocket: Socket | null
    guildSocket: Socket | null
    selectSocket: Socket | null
}

export const SocketContext = createContext<ISocketContext>({
    memberSocket: null,
    roleSocket: null,
    messageSocket: null,
    buttonSocket: null,
    reactSocket: null,
    guildSocket: null,
    selectSocket: null,
})

export const SocketProvider = ({ children }: { children: ReactNode }) => {
    const { profile } = useAppSelector((state) => state.auth)
    const socket = useMemo(
        () =>
            new Manager(Env.SERVER_HOST, {
                transportOptions: {
                    polling: {
                        extraHeaders: {
                            authorization: `Bearer ${Cookies.get('accesstoken')}`,
                        },
                    },
                },
            }),
        [profile]
    )

    const guildSocket = useMemo(() => socket.socket('/guild'), [socket])
    const roleSocket = useMemo(() => socket.socket('/role'), [socket])

    const memberSocket = useMemo(() => socket.socket('/member'), [socket])
    const messageSocket = useMemo(() => socket.socket('/message'), [socket])
    const buttonSocket = useMemo(() => socket.socket('/button'), [socket])
    const reactSocket = useMemo(() => socket.socket('/react'), [socket])
    const selectSocket = useMemo(() => socket.socket('/select'), [socket])

    return (
        <SocketContext.Provider
            value={{
                memberSocket,
                roleSocket,
                messageSocket,
                buttonSocket,
                selectSocket,
                reactSocket,
                guildSocket,
            }}
        >
            {children}
        </SocketContext.Provider>
    )
}
