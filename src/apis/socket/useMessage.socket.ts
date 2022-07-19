import { BotEntity } from 'entities/bot.entity'
import { ButtonEntity } from 'entities/button.entity'
import { MessageEntity } from 'entities/message.entity'
import { useContext, useEffect } from 'react'
import { SocketContext } from 'states/context/socket'
import { SocketErrorDto } from './error.dto'

export const useMessageSocket = (
    bot: BotEntity | undefined | null,
    onCreate: (newMessage: MessageEntity) => void,
    onUpdate: (newMessage: MessageEntity) => void
) => {
    const { messageSocket, buttonSocket } = useContext(SocketContext)

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
    const clickButton = async (button: ButtonEntity) => {
        if (!buttonSocket || !bot) return
        buttonSocket.emit('click', button)
    }

    useEffect(() => {
        if (!messageSocket || !bot) return
        messageSocket.on(
            `botManager/${bot.botId}/message/create`,
            (data: MessageEntity) => {
                onCreate(data)
            }
        )
        messageSocket.on(
            `botManager/${bot.botId}/message/update`,
            (data: MessageEntity) => {
                onUpdate(data)
            }
        )

        return () => {
            if (!messageSocket || !bot) return
            messageSocket.off(`botManager/${bot.botId}/message/create`)
        }
    }, [messageSocket])

    return { getAllFromBot, clickButton }
}
