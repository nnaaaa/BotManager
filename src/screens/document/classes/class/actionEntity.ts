import { ClassDescription } from './type'

export const ActionEntity: ClassDescription = {
    name: 'ActionEntity',
    description: 'action of the message stored in database',
    type: 'interface',
    properties: [
        {
            name: 'actionId',
            type: { name: 'string', url: '' },
            description: '',
        },
        {
            name: 'reacts',
            type: { name: 'ReactEntity[]', url: 'ReactEntity' },
            description: 'reacts of the action',
        },
        {
            name: 'buttons',
            type: { name: 'ButtonEntity[]', url: 'ButtonEntity' },
            description: 'buttons of the action',
        },
        {
            name: 'selects',
            type: { name: 'SelectEntity[]', url: 'SelectEntity' },
            description: 'selects of the action',
        },
        {
            name: 'message',
            type: { name: 'MessageEntity', url: 'MessageEntity' },
            description: 'message which action belong to',
        },
    ],
    methods: [],
}
