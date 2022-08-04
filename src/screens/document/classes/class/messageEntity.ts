import { ClassDescription } from './type'

export const MessageEntity: ClassDescription = {
    name: 'MessageEntity',
    description: 'message actually store in the database',
    type: 'interface',
    properties: [
        {
            name: 'messageId',
            type: { name: 'string', url: '' },
            description: '',
        },
        {
            name: 'content',
            type: { name: 'string', url: '' },
            description: 'content will be display with markdown format',
        },
        {
            name: 'createAt',
            type: { name: 'Date', url: '' },
            description: '',
        },
        {
            name: 'channel',
            type: { name: 'ChannelEntity', url: 'ChannelEntity' },
            description: 'destination where the message is sent',
        },
        {
            name: 'author',
            type: { name: 'MemberEntity', url: 'MemberEntity' },
            description: 'author of the message',
        },
        {
            name: 'action',
            type: { name: 'ActionEntity', url: 'ActionEntity' },
            description: 'action of the message',
        },
        {
            name: 'replyTo',
            type: { name: 'MessageEntity', url: 'MessageEntity' },
            description: 'message which this message is reply to',
        },
    ],
    methods: [],
}
