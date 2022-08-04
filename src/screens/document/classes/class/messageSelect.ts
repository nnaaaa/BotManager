import { ClassDescription } from './type'

export const MessageSelect: ClassDescription = {
    name: 'MessageSelect',
    description: 'selects attach to message',
    type: 'class',
    properties: [
        {
            name: 'customId',
            type: { name: 'string', url: '' },
            description: 'id which you define for select',
        },
        {
            name: 'isDisabled',
            type: { name: 'boolean', url: '' },
            description: 'if select is disabled',
        },
        {
            name: 'style',
            type: { name: 'SelectStyle', url: 'SelectStyle' },
            description: 'style of select',
        },
        {
            name: 'options',
            type: { name: 'OptionEntity[]', url: 'OptionEntity' },
            description: 'options of select',
        },
    ],
    methods: [
        {
            name: 'setCustomId',
            return: {
                name: 'MessageSelect',
                url: 'MessageSelect',
            },
            parameter: [
                {
                    name: 'customId',
                    type: { url: '', name: 'string' },
                    description: 'new custom id of select',
                },
            ],
        },
        {
            name: 'setDisabled',
            return: {
                name: 'MessageSelect',
                url: 'MessageSelect',
            },
            parameter: [
                {
                    name: 'disabled',
                    type: { url: '', name: 'string' },
                    description: 'new status of select',
                },
            ],
        },
        {
            name: 'setStyle',
            return: {
                name: 'MessageSelect',
                url: 'MessageSelect',
            },
            parameter: [
                {
                    name: 'style',
                    type: { url: 'SelectStyle', name: 'SelectStyle' },
                    description: 'new style of select',
                },
            ],
        },
        {
            name: 'clearOption',
            return: {
                name: 'MessageSelect',
                url: 'MessageSelect',
            },
            parameter: [],
        },
        {
            name: 'addOption',
            return: {
                name: 'MessageSelect',
                url: 'MessageSelect',
            },
            parameter: [
                {
                    name: 'option',
                    type: { url: 'MessageSelectOption', name: 'MessageSelectOption' },
                    description: 'new option of select',
                },
            ],
        },
        {
            name: 'addOptions',
            return: {
                name: 'MessageSelect',
                url: 'MessageSelect',
            },
            parameter: [
                {
                    name: 'options',
                    type: { url: 'MessageSelectOption[]', name: 'MessageSelectOption' },
                    description: 'new options of select',
                },
            ],
        },
    ],
}
