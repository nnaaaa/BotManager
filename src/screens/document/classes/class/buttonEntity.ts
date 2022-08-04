import { ClassDescription } from './type'

export const ButtonEntity: ClassDescription = {
    name: 'ButtonEntity',
    description: 'button of the action',
    type: 'interface',
    properties: [
        {
            name: 'buttonId',
            type: { name: 'string', url: '' },
            description: '',
        },
        {
            name: 'customId',
            type: { name: 'string', url: '' },
            description: '',
        },
        {
            name: 'name',
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
            type: { name: 'ButtonStyle', url: 'ButtonStyle' },
            description: '',
        },
        {
            name: 'action',
            type: { name: 'ActionEntity', url: 'ActionEntity' },
            description: '',
        },
    ],
    methods: [],
}
