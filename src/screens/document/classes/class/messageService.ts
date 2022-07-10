import { ClassDescription } from './type'

export const MessageService: ClassDescription = {
    name: 'MessageService',
    description: 'service used to send messages',
    type: 'class',
    properties: [
        {
            name: 'data',
            type: { name: 'MessageEntity', url: 'MessageEntity' },
            description: 'message received',
        },
        {
            name: 'command',
            type: { name: 'InspectedCommand', url: 'InspectedCommand' },
            description: 'commad analyzed from message',
        },
    ],
    methods: [
        {
            name: 'send',
            return: 'void',
            parameter: [
                {
                    name: 'message',
                    type: { url: 'BotInputMessage', name: 'BotInputMessage' },
                    description: 'message which bot want to send',
                },
            ],
        },
        {
            name: 'reply',
            return: 'void',
            parameter: [
                {
                    name: 'message',
                    type: { url: 'BotInputMessage', name: 'BotInputMessage' },
                    description:
                        'message which bot want to reply to the message received from server',
                },
            ],
        },
    ],
}
