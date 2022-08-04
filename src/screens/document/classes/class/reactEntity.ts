import { ClassDescription } from './type'

export const ReactEntity: ClassDescription = {
    name: 'ReactEntity',
    description: 'react of the action',
    type: 'interface',
    properties: [
        {
            name: 'reactId',
            type: { name: 'string', url: '' },
            description: '',
        },
        {
            name: 'author',
            type: { name: 'MemberEntity', url: 'MemberEntity' },
            description: '',
        },
        {
            name: 'message',
            type: { name: 'MessageEntity', url: 'MessageEntity' },
            description: '',
        },
        {
            name: 'emoji',
            type: { name: 'EmojiEntity', url: 'EmojiEntity' },
            description: '',
        },
    ],
    methods: [],
}
