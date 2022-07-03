import { LoadingButton } from '@mui/lab'
import { Button, Divider, TextField, Typography } from '@mui/material'
import { unwrapResult } from '@reduxjs/toolkit'
import { AuthAPI } from 'apis/auth.api'
import { useFormik } from 'formik'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'states/hooks'
import { authActions } from 'states/slices'
import { loginValidate } from 'utils/yup'
import { useStyle } from '../styles'

interface Props {
    switchForm: () => void
}

export default function Login({ switchForm }: Props) {
    const style = useStyle()
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { isLoading, errors: authError } = useAppSelector(state => state.auth)
    const { errors, values, touched, handleSubmit, handleChange } = useFormik({
        initialValues: {
            account: '',
            password: '',
        },
        validationSchema: loginValidate,
        onSubmit: async (values, { setFieldError }) => {
            try {
                await dispatch(authActions.loginAsync(values))
                unwrapResult(await dispatch(authActions.getProfile()))
                navigate('/', { replace: true })
            } catch {
                setFieldError('account', "Account doesn't exist")
            }
        },
    })

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            <Typography variant="h4" fontWeight={600}>
                Welcome back!
            </Typography>
            <Typography variant="subtitle1">
                We're so excited to see you again!
            </Typography>

            <Divider sx={{ my: 2 }} />

            <TextField
                name="account"
                label="Tài khoản"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
                error={touched.account && Boolean(errors.account)}
                helperText={touched.account && errors.account}
                onChange={handleChange}
                value={values.account}
            />
            <TextField
                name="password"
                label="Mật khẩu"
                variant="outlined"
                fullWidth
                type="password"
                sx={{ mb: 2 }}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                onChange={handleChange}
                value={values.password}
            />

            {authError && (
                <Typography color="error" gutterBottom>
                    Account and password are incorrect
                </Typography>
            )}

            <LoadingButton
                color="primary"
                variant="contained"
                type="submit"
                loading={isLoading}
            >
                Submit
            </LoadingButton>

            <Divider flexItem sx={{ my: 2 }} />

            <Button onClick={switchForm} variant="contained">
                Sign Up
            </Button>
        </form>
    )
}
