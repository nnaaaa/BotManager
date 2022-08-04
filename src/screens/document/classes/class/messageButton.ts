import { ClassDescription } from './type'

export const MessageButton: ClassDescription = {
    name: 'MessageButton',
    description: 'buttons attach to message',
    type: 'class',
    properties: [
        {
            name: 'name',
            type: { name: 'string', url: '' },
            description: 'name of button',
        },
        {
            name: 'customId',
            type: { name: 'string', url: '' },
            description: 'id which you define for button',
        },
        {
            name: 'isDisabled',
            type: { name: 'boolean', url: '' },
            description: 'if button is disabled',
        },
        {
            name: 'style',
            type: { name: 'ButtonStyle', url: 'ButtonStyle' },
            description: 'style of button',
        },
    ],
    methods: [
        {
            name: 'setName',
            return: {
                name: 'MessageButton',
                url: 'MessageButton',
            },
            parameter: [
                {
                    name: 'name',
                    type: { url: '', name: 'string' },
                    description: 'new name of button',
                },
            ],
        },
        {
            name: 'setCustomId',
            return: {
                name: 'MessageButton',
                url: 'MessageButton',
            },
            parameter: [
                {
                    name: 'customId',
                    type: { url: '', name: 'string' },
                    description: 'new custom id of button',
                },
            ],
        },
        {
            name: 'setDisabled',
            return: {
                name: 'MessageButton',
                url: 'MessageButton',
            },
            parameter: [
                {
                    name: 'disabled',
                    type: { url: '', name: 'string' },
                    description: 'new status of button',
                },
            ],
        },
        {
            name: 'setStyle',
            return: {
                name: 'MessageButton',
                url: 'MessageButton',
            },
            parameter: [
                {
                    name: 'style',
                    type: { url: 'ButtonStyle', name: 'ButtonStyle' },
                    description: 'new style of button',
                },
            ],
        },
    ],
}
