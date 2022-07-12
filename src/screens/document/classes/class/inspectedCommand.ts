import { ClassDescription } from './type'

export const InspectedCommand: ClassDescription = {
    name: 'InspectedCommand',
    description: 'command analyzed from message',
    type: 'interface',
    properties: [
        {
            name: 'botName',
            type: { name: 'string', url: '' },
            description: '',
        },
        {
            name: 'name',
            type: { name: 'string', url: '' },
            description: '',
        },
        {
            name: 'args',
            type: { name: 'string[]', url: '' },
            description: 'arguments passed to the command',
        },
    ],
    methods: [],
}
