interface DataType {
    name: string
    url: string
}

interface Property {
    name: string
    type: DataType
    description: string
}

interface Method {
    name: string
    return: DataType
    parameter: Property[]
}

export interface ClassDescription {
    name: string
    description: string
    type: 'class' | 'interface' | 'abstract'
    properties: Property[]
    methods: Method[]
}
