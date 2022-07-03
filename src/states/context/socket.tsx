import { Env } from 'configs'
import { createContext, ReactNode, useMemo } from 'react'
import { io, Socket,connect } from 'socket.io-client'

interface ISocketContext {
    socket: Socket | null
}

export const SocketContext = createContext<ISocketContext>({
    socket: null,
})

export const SocketProvider = ({ children }: { children: ReactNode }) => {
    const socket = useMemo(() => connect(Env.SERVER_HOST), [])
    return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>
}
