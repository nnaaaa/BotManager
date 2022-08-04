import { ClassDescription } from './type'

export const MessageSelectOption: ClassDescription = {
    name: 'MessageSelectOption',
    description: 'option of select',
    type: 'class',
    properties: [
        {
            name: 'value',
            type: { name: 'string', url: '' },
            description: 'value of option',
        },
        {
            name: 'description',
            type: { name: 'string', url: '' },
            description: 'description of option',
        },
    ],
    methods: [
        {
            name: 'setValue',
            return: {
                name: 'MessageSelectOption',
                url: 'MessageSelectOption',
            },
            parameter: [
                {
                    name: 'value',
                    type: { url: '', name: 'string' },
                    description: 'new value of option',
                },
            ],
        },
        {
            name: 'setDescription',
            return: {
                name: 'MessageSelectOption',
                url: 'MessageSelectOption',
            },
            parameter: [
                {
                    name: 'description',
                    type: { url: '', name: 'string' },
                    description: 'new description of option',
                },
            ],
        },
    ],
}
