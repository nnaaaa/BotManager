import { ClassDescription } from './type'

export const OptionEntity: ClassDescription = {
    name: 'OptionEntity',
    description: 'option actually store in the database',
    type: 'interface',
    properties: [
        {
            name: 'optionId',
            type: { name: 'string', url: '' },
            description: '',
        },
        {
            name: 'value',
            type: { name: 'string', url: '' },
            description: 'value used to compared each option',
        },
        {
            name: 'description',
            type: { name: 'string', url: '' },
            description: 'description of option',
        },
        {
            name: 'select',
            type: { name: 'SelectEntity', url: 'SelectEntity' },
            description: 'select of current option',
        },
    ],
    methods: [],
}
