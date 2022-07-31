import { ClassDescription } from './type'

export const ChannelService: ClassDescription = {
    name: 'ChannelService',
    description: 'service used to manage channel',
    type: 'class',
    properties: [
        {
            name: 'data',
            type: { name: 'ChannelEntity', url: 'ChannelEntity' },
            description: 'channel which command send to',
        },
    ],
    methods: [
        {
            name: 'send',
            return: {
                name: 'MessageService',
                url: 'MessageService',
            },
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
            return: {
                name: 'MessageService',
                url: 'MessageService',
            },
            parameter: [
                {
                    name: 'message',
                    type: { url: 'BotInputMessage', name: 'BotInputMessage' },
                    description:
                        'message which bot want to reply to the message received from server',
                },
            ],
        },
        {
            name: 'edit',
            return: {
                name: 'MessageService',
                url: 'MessageService',
            },
            parameter: [
                {
                    name: 'message',
                    type: { url: 'BotInputMessage', name: 'BotInputMessage' },
                    description:
                        'edit the current message which sent by the service',
                },
            ],
        },
    ],
}
