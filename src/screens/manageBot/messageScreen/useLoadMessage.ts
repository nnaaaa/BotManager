import { useMessageSocket } from 'apis/socket/useMessage.socket'
import { MessageEntity } from 'entities/message.entity'
import { useEffect, useState } from 'react'
import { useAppSelector } from 'states/hooks'

export const useLoadMessage = () => {
    const { profile } = useAppSelector((state) => state.bot)
    const [messages, setMessages] = useState<MessageEntity[]>([])
    const [activeMessage, setActiveMessage] = useState<MessageEntity>()
    const { getAllFromBot, clickButton } = useMessageSocket(
        profile,
        (newMessage) => {
            console.log(newMessage)
            setMessages((pre) => [newMessage, ...pre])
        },
        (newMessage) => {
            setMessages((pre) =>
                pre.map((message) =>
                    message.messageId === newMessage.messageId
                        ? { ...message, ...newMessage }
                        : message
                )
            )
        }
    )

    useEffect(() => {
        const fetchMessages = async () => {
            if (!profile) return
            const m = await getAllFromBot()
            return m
        }
        fetchMessages().then((m) => {
            setMessages(m as MessageEntity[])
        })
    }, [profile])

    useEffect(() => {
        if (messages && messages.length > 0) {
            setActiveMessage(messages[0])
        }
    }, [messages])

    return { activeMessage, messages, setActiveMessage, clickButton }
}
