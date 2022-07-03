import { LoadingButton } from '@mui/lab'
import { Button, Divider, TextField, Typography } from '@mui/material'
import { AuthAPI } from 'apis/auth.api'
import { useFormik } from 'formik'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { loginValidate } from 'utils/yup'
import { useStyle } from '../styles'

interface Props {
    switchForm: () => void
}

export default function Login({ switchForm }: Props) {
    const style = useStyle()
    const navigate = useNavigate()
    const { isLoading, mutate, error,isError } = useMutation(AuthAPI.login, {

        onSuccess: () => {
            navigate('/', { replace: true })
        }
    })


    const { errors, values, touched, handleSubmit, handleChange } = useFormik({
        initialValues: {
            account: '',
            password: '',
        },
        validationSchema: loginValidate,
        onSubmit: async (values, { setFieldError }) => {
            try {
                // await dispatch(authActions.loginAsync(values))
                // unwrapResult(await dispatch(userActions.getProfile()))
                mutate(values)
            } catch {
                setFieldError('account','Account doesn\'t exist')
            }
        },
    })

    return (
        <form className={style.form} onSubmit={handleSubmit}>
            {/* <Typography variant="h4" fontWeight={600}>
                Welcome back!
            </Typography> */}

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

            {isError && (
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
