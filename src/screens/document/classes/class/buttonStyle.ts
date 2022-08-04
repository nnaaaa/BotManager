import { ClassDescription } from './type'

export const ButtonStyle: ClassDescription = {
    name: 'ButtonStyle',
    description: 'style of button',
    type: 'enum',
    properties: [
        {
            name: 'PRIMARY',
            type: { name: 'string', url: '' },
            description: 'primary style',
        },
        {
            name: 'SECONDARY',
            type: { name: 'string', url: '' },
            description: 'secondary style',
        },
        {
            name: 'SUCCESS',
            type: { name: 'string', url: '' },
            description: 'often have green color',
        },
        {
            name: 'WARNING',
            type: { name: 'string', url: '' },
            description: 'often have yellow color',
        },
        {
            name: 'ERROR',
            type: { name: 'string', url: '' },
            description: 'often have red color',
        },
    ],
    methods: [],
}
