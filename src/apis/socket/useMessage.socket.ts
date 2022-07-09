import { BotEntity } from 'entities/bot.entity'
import { MessageEntity } from 'entities/message.entity'
import { useContext, useEffect } from 'react'
import { SocketContext } from 'states/context/socket'
import { SocketErrorDto } from './error.dto'

export const useMessageSocket = (
    bot: BotEntity | undefined | null,
    onCreate: (newMessage: MessageEntity) => void
) => {
    const { messageSocket } = useContext(SocketContext)

    const getAllFromBot = async () => {
        if (!messageSocket || !bot) return
        const data = await new Promise<MessageEntity[] | SocketErrorDto>((resolve) => {
            messageSocket.emit('find', bot, (data: MessageEntity[]) => {
                resolve(data)
            })
        })

        if ((data as SocketErrorDto).status) {
            console.error(data)
            return null
        }

        return data
    }

    useEffect(() => {
        if (!messageSocket || !bot) return
        messageSocket.on(
            `botManager/${bot.botId}/message/create`,
            (data: MessageEntity) => {
                onCreate(data)
            }
        )

        return () => {
            if (!messageSocket || !bot) return
            messageSocket.off(`botManager/${bot.botId}/message/create`)
        }
    }, [messageSocket])

    return { getAllFromBot }
}
