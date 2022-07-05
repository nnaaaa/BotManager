import * as yup from 'yup'

export const loginValidate = yup.object().shape({
    account: yup.string().required('Account is required').email('Invalid Email'),
    password: yup.string().required('Password is required'),
})

export const botInfoValidate = yup.object().shape({
    name: yup.string().required('Name is required'),
    description: yup.string().min(10, 'Description must be at least 10 characters'),
})
