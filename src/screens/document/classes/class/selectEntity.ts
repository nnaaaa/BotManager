import { ClassDescription } from './type'

export const SelectEntity: ClassDescription = {
    name: 'SelectEntity',
    description: 'react of the action',
    type: 'interface',
    properties: [
        {
            name: 'selectId',
            type: { name: 'string', url: '' },
            description: '',
        },
        {
            name: 'customId',
            type: { name: 'string', url: '' },
            description: '',
        },
        {
            name: 'isDisabled',
            type: { name: 'boolean', url: '' },
            description: '',
        },
        {
            name: 'style',
            type: { name: 'SelectStyle', url: 'SelectStyle' },
            description: '',
        },
        {
            name: 'action',
            type: { name: 'ActionEntity', url: 'ActionEntity' },
            description: '',
        },
        {
            name: 'options',
            type: { name: 'OptionEntity[]', url: 'OptionEntity' },
            description: '',
        },
    ],
    methods: [],
}
