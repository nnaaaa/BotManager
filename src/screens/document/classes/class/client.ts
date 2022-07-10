import { ClassDescription } from './type'

export const Client: ClassDescription = {
    name: 'Client',
    description: 'The main class of the library',
    type: 'abstract',
    properties: [
        {
            name: 'message',
            type: { name: 'MessageService', url: 'MessageService' },
            description: 'service used to send messages',
        },
        {
            name: 'channel',
            type: { name: 'ChannelService', url: 'ChannelService' },
            description: 'service used to send messages',
        },
        {
            name: 'bot',
            type: { name: 'BotEntity', url: 'BotEntity' },
            description: 'your bot information',
        },
    ],
    methods: [
        {
            name: 'login',
            return: 'void',
            parameter: [
                {
                    name: 'token',
                    type: { url: '', name: 'string' },
                    description: 'your bot token',
                },
            ],
        },
    ],
}
