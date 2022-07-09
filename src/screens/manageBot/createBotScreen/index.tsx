import { LoadingButton } from '@mui/lab'
import { Box, Stack, TextField, Typography } from '@mui/material'
import { unwrapResult } from '@reduxjs/toolkit'
import { InputImage } from 'components'
import { AvatarCard } from 'components/avatarCard'
import { useFormik } from 'formik'
import { ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'states/hooks'
import { botActions } from 'states/slices'
import { botInfoValidate } from 'utils/validation'
import { Title } from 'styles'
export function CreateBotScreen() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { isLoading } = useAppSelector((state) => state.bot)

    const onUploadAvatar = async (e: ChangeEvent<HTMLInputElement>) => {
        // if (e.target && e.target.files) {
        //     // const a = await BotAPI.uploadImage(e.target.files[0])
        //     console.log(URL.createObjectURL(e.target.files[0]))
        //     setValues({ ...values, avatarUrl: URL.createObjectURL(e.target.files[0]) })
        // }
        // if (e.target && e.target.files) {
        //     form.append('file', e.target.files[0])
        //     form.append('upload_preset', 'botAvatar')
        //     const res = await AxiosClient.post(
        //         'https://api.cloudinary.com/v1_1/nnaaaa/upload',form
        //     )
        //     console.log(e.target.files[0])
        //     // const a = v2.uploader.upload_large(e.target.files[0])
        //     // console.log(a)
        //     setValues({ ...values, avatarUrl: 'vcrewert' })
        // }
    }

    const { errors, values, touched, handleSubmit, handleChange, setValues } = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: '',
            description: '',
            // avatarUrl: '',
        },
        validationSchema: botInfoValidate,
        onSubmit: async (values, { setFieldError }) => {
            try {
                unwrapResult(await dispatch(botActions.createBot(values)))
                navigate('/bot/manage/general')
            } catch {
                setFieldError('name', 'Bot name is already taken')
            }
        },
    })

    return (
        <Box component="form" onSubmit={handleSubmit} width="100%">
            <Typography variant="h4" gutterBottom>
                Let type your bot information
            </Typography>
            <Typography variant="h6" color="text.disabled">
                These info can be changed later
            </Typography>
            <Stack direction="row" spacing={4} sx={{ mt: 6, flex: 1 }}>
                <Stack>
                    <Title>Bot icon</Title>
                    <InputImage name="avatarFile" onChange={onUploadAvatar}>
                        <AvatarCard url={''} />
                    </InputImage>
                </Stack>

                <Stack spacing={4} sx={{ flex: 1 }}>
                    <Stack>
                        <Title>Name</Title>
                        <TextField
                            name="name"
                            variant="outlined"
                            value={values.name}
                            onChange={handleChange}
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && errors.name}
                        />
                    </Stack>

                    <Stack>
                        <Title>Description</Title>
                        <Typography variant="caption" color="text.disabled" gutterBottom>
                            ({values.description.length} characters)
                        </Typography>
                        <TextField
                            name="description"
                            variant="outlined"
                            value={values.description}
                            onChange={handleChange}
                            error={touched.description && Boolean(errors.description)}
                            helperText={touched.description && errors.description}
                            multiline
                            minRows={4}
                            maxRows={7}
                        />
                    </Stack>
                </Stack>
            </Stack>

            <Stack
                direction="row"
                spacing={4}
                sx={{ mt: 6, flex: 1 }}
                justifyContent="flex-end"
            >
                <LoadingButton loading={isLoading} type="submit" variant="contained">
                    Create Now
                </LoadingButton>
            </Stack>
        </Box>
    )
}
