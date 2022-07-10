import { Env } from 'configs'
import Cookies from 'js-cookie'
import { createContext, ReactNode, useMemo } from 'react'
import { Manager, Socket } from 'socket.io-client'

interface ISocketContext {
    memberSocket: Socket | null
    roleSocket: Socket | null
    messageSocket: Socket | null
}

export const SocketContext = createContext<ISocketContext>({
    memberSocket: null,
    roleSocket: null,
    messageSocket: null,
})

export const SocketProvider = ({ children }: { children: ReactNode }) => {
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
        []
    )

    const memberSocket = useMemo(() => socket.socket('/member'), [socket])
    const roleSocket = useMemo(() => socket.socket('/role'), [socket])
    const messageSocket = useMemo(() => socket.socket('/message'), [socket])

    return (
        <SocketContext.Provider value={{ memberSocket, roleSocket, messageSocket }}>
            {children}
        </SocketContext.Provider>
    )
}
