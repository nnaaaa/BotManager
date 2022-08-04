import { ClassDescription } from './type'

export const MessageAction: ClassDescription = {
    name: 'MessageAction',
    description: 'action of message',
    type: 'class',
    properties: [],
    methods: [
        {
            name: 'clearButton',
            return: {
                name: 'MessageAction',
                url: 'MessageAction',
            },
            parameter: [],
        },
        {
            name: 'clearReact',
            return: {
                name: 'MessageAction',
                url: 'MessageAction',
            },
            parameter: [],
        },
        {
            name: 'clearSelect',
            return: {
                name: 'MessageAction',
                url: 'MessageAction',
            },
            parameter: [],
        },
        {
            name: 'addButton',
            return: {
                name: 'MessageAction',
                url: 'MessageAction',
            },
            parameter: [
                {
                    name: 'button',
                    type: { url: 'MessageButton', name: 'MessageButton' },
                    description: 'button of action',
                },
            ],
        },
        {
            name: 'addButtons',
            return: {
                name: 'MessageAction',
                url: 'MessageAction',
            },
            parameter: [
                {
                    name: 'buttons',
                    type: { url: 'MessageButton[]', name: 'MessageButton' },
                    description: 'buttons of action',
                },
            ],
        },
        {
            name: 'addReact',
            return: {
                name: 'MessageAction',
                url: 'MessageAction',
            },
            parameter: [
                {
                    name: 'emoji',
                    type: { url: 'EmojiEntity', name: 'EmojiEntity' },
                    description: 'react of action',
                },
            ],
        },
        {
            name: 'addReacts',
            return: {
                name: 'MessageAction',
                url: 'MessageAction',
            },
            parameter: [
                {
                    name: 'emojis',
                    type: { url: 'EmojiEntity[]', name: 'EmojiEntity' },
                    description: 'reacts of action',
                },
            ],
        },
        {
            name: 'addSelect',
            return: {
                name: 'MessageAction',
                url: 'MessageAction',
            },
            parameter: [
                {
                    name: 'select',
                    type: { url: 'MessageSelect', name: 'MessageSelect' },
                    description: 'select of action',
                },
            ],
        },
        {
            name: 'onButtonClick',
            return: {
                name: 'void',
                url: '',
            },
            parameter: [
                {
                    name: 'cb',
                    type: { url: '', name: '(b: ButtonEntity) => void' },
                    description: 'listen button click event',
                },
            ],
        },
        {
            name: 'onReactCreate',
            return: {
                name: 'void',
                url: '',
            },
            parameter: [
                {
                    name: 'cb',
                    type: { url: '', name: '(r: ReactEntity) => void' },
                    description: 'listen react create event',
                },
            ],
        },
        {
            name: 'onReactDelete',
            return: {
                name: 'void',
                url: '',
            },
            parameter: [
                {
                    name: 'cb',
                    type: { url: '', name: '(r: ReactEntity) => void' },
                    description: 'listen react delete event',
                },
            ],
        },
        {
            name: 'onSelect',
            return: {
                name: 'void',
                url: '',
            },
            parameter: [
                {
                    name: 'cb',
                    type: { url: '', name: '(o: OptionEntity) => void' },
                    description: 'listen select event',
                },
            ],
        },
    ],
}
