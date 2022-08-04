import { ClassDescription } from './type'

export const SelectStyle: ClassDescription = {
    name: 'SelectStyle',
    description: 'style of select',
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
    ],
    methods: [],
}
