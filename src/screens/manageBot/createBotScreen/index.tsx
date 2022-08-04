import { LoadingButton } from '@mui/lab'
import { Box, Grid, Stack, TextField, Typography } from '@mui/material'
import { unwrapResult } from '@reduxjs/toolkit'
import { InputImage } from 'components'
import { AvatarCard } from 'components/avatarCard'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'states/hooks'
import { botActions } from 'states/slices'
import { Title } from 'styles'
import { botInfoValidate } from 'utils/validation'
import { useUploadImage } from 'hooks'
export function CreateBotScreen() {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { isLoading } = useAppSelector((state) => state.bot)

    const { onUpload, isLoading: uploadImageLoading } = useUploadImage((url) =>
        setValues({ ...values, avatarUrl: url })
    )

    const { errors, values, touched, handleSubmit, handleChange, setValues } = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: '',
            description: '',
            avatarUrl: '',
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
            <Grid container spacing={4} sx={{ mt: 6, flex: 1 }}>
                <Grid item xs={12} md={3}>
                    <Stack>
                        <Title>Bot icon</Title>
                        <InputImage
                            name="avatarFile"
                            onChange={onUpload}
                            isDisabled={uploadImageLoading}
                        >
                            <AvatarCard
                                url={values.avatarUrl}
                                isDisabled={uploadImageLoading}
                            />
                        </InputImage>
                    </Stack>
                </Grid>

                <Grid item container md={9} spacing={4}>
                    <Grid item xs={12}>
                        <Title>Name</Title>
                        <TextField
                            name="name"
                            variant="outlined"
                            value={values.name}
                            fullWidth
                            onChange={handleChange}
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && errors.name}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Title>Description</Title>
                        <Typography
                            component="p"
                            variant="caption"
                            color="text.disabled"
                            gutterBottom
                        >
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
                            fullWidth
                            minRows={4}
                            maxRows={7}
                        />
                    </Grid>
                </Grid>
            </Grid>

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
