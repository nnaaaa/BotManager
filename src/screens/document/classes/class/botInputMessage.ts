import { ClassDescription } from './type'

export const BotInputMessage: ClassDescription = {
    name: 'BotInputMessage',
    description: 'message which bot want to send',
    type: 'interface',
    properties: [
        {
            name: 'content',
            type: { name: 'string', url: '' },
            description: 'content will be display with markdown format',
        },
        {
            name: 'images',
            type: { name: 'string[]', url: '' },
            description: 'urls of images',
        },
    ],
    methods: [],
}
