import * as yup from 'yup'

export const loginValidate = yup.object().shape({
    account: yup.string().required('Account is required').email('Invalid Email'),
    password: yup.string().required('Password is required'),
})

export const botInfoValidate = yup.object().shape({
    name: yup.string().required('Name is required'),
    description: yup
        .string()
        .required('Description must be at least 10 characters')
        .min(20, 'Description must be at least 20 characters'),
})

export const commandValidate = yup.object().shape({
    name: yup.string().required('Name is required'),
    description: yup
        .string()
        .required('Description must be at least 10 characters')
        .min(10, 'Description must be at least 10 characters'),
    args: yup.array().of(yup.string().required('Argument name is required')),
})

export const argumentValidate = yup.object().shape({
    name: yup.string().required('Name is required'),
})
