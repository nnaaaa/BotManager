import { ClassDescription } from "./type";


export const MarkdownBuilder: ClassDescription = {
    name: 'MarkdownBuilder',
    description: 'used to create markdown string instead of bother tranditional string',
    type: 'class',
    properties: [],
    methods: [
        {
            name: 'bold',
            return: {
                name: 'string',
                url: '',
            },
            parameter: [
                {
                    name: 'text',
                    type: { url: '', name: 'string' },
                    description: 'text to be bold',
                },
            ],
        },
        {
            name: 'italic',
            return: {
                name: 'string',
                url: '',
            },
            parameter: [
                {
                    name: 'text',
                    type: { url: '', name: 'string' },
                    description: 'text to be italic',
                },
            ],
        },
        {
            name: 'underline',
            return: {
                name: 'string',
                url: '',
            },
            parameter: [
                {
                    name: 'text',
                    type: { url: '', name: 'string' },
                    description: 'text to be underline',
                },
            ],
        },
        {
            name: 'strikethrough',
            return: {
                name: 'string',
                url: '',
            },
            parameter: [
                {
                    name: 'text',
                    type: { url: '', name: 'string' },
                    description: 'text to be strike through',
                },
            ],
        },
        {
            name: 'inlineCode',
            return: {
                name: 'string',
                url: '',
            },
            parameter: [
                {
                    name: 'code',
                    type: { url: '', name: 'string' },
                    description: 'text to be display as inline code',
                },
            ],
        },
        {
            name: 'codeBlock',
            return: {
                name: 'string',
                url: '',
            },
            parameter: [
                {
                    name: 'code',
                    type: { url: '', name: 'string' },
                    description: 'text to be display as code block',
                },
                {
                    name: 'language',
                    type: { url: '', name: 'string' },
                    description: 'programming language of code block',
                },
            ],
        },
        {
            name: 'tag',
            return: {
                name: 'TemplateTag',
                url: '',
            },
            parameter: [],
        },
        {
            name: 'link',
            return: {
                name: 'string',
                url: '',
            },
            parameter: [
                {
                    name: 'url',
                    type: { url: '', name: 'string' },
                    description: 'text to be display as a url',
                },
            ],
        },
        {
            name: 'image',
            return: {
                name: 'string',
                url: '',
            },
            parameter: [
                {
                    name: 'url',
                    type: { url: '', name: 'string' },
                    description: 'text to be display as a url of a image',
                },
            ],
        },
    ]
}