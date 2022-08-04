import { ReactEntity } from 'entities'
import { BotEntity } from 'entities/bot.entity'
import { ButtonEntity } from 'entities/button.entity'
import { MessageEntity } from 'entities/message.entity'
import { OptionEntity } from 'entities/option.entity'
import { useContext, useEffect } from 'react'
import { SocketContext } from 'states/contexts/socket'
import { SocketErrorDto } from './error.dto'

export const useMessageSocket = (
    bot: BotEntity | undefined | null,
    onCreate: (newMessage: MessageEntity) => void,
    onUpdate: (newMessage: MessageEntity) => void
) => {
    const { messageSocket, buttonSocket, reactSocket, selectSocket } =
        useContext(SocketContext)

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
    const clickReact = async (react: ReactEntity) => {
        if (!reactSocket || !bot) return
        reactSocket.emit('create', react)
    }

    const clickSelect = async (option: OptionEntity) => {
        if (!selectSocket || !bot) return
        selectSocket.emit('select', option)
    }

    useEffect(() => {
        if (!messageSocket || !reactSocket || !bot) return
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

    return { getAllFromBot, clickButton, clickReact, clickSelect, reactSocket }
}
