import { ClassDescription } from './type'

export const ChannelEntity: ClassDescription = {
    name: 'ChannelEntity',
    description: 'channel actually store in the database',
    type: 'interface',
    properties: [
        {
            name: 'channelId',
            type: { name: 'string', url: '' },
            description: '',
        },
        {
            name: 'name',
            type: { name: 'string', url: '' },
            description: '',
        },
        {
            name: 'isPrivate',
            type: { name: 'boolean', url: '' },
            description:
                'you would have proper role to access this channel if it is private',
        },
        {
            name: 'messages',
            type: { name: 'MessageEntity[]', url: 'MessageEntity' },
            description: 'list of messages in this channel',
        },
        {
            name: 'members',
            type: { name: 'MemberEntity[]', url: 'MemberEntity' },
            description: 'list of members in this channel',
        },
        {
            name: 'category',
            type: { name: 'CategoryEntity', url: 'CategoryEntity' },
            description: 'category which channel belong to',
        },
        {
            name: 'roles',
            type: { name: 'RoleEntity[]', url: 'RoleEntity' },
            description: 'list of roles in this channel',
        },
    ],
    methods: [],
}
