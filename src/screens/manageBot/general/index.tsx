import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material'
import { unwrapResult } from '@reduxjs/toolkit'
import { InputImage, TextCopy } from 'components'
import { AvatarCard } from 'components/avatarCard'
import { useFormik } from 'formik'
import { useUploadImage } from 'hooks'
import { useAppDispatch, useAppSelector } from 'states/hooks'
import { botActions } from 'states/slices'
import { borderStyle, Title } from 'styles'
import { botInfoValidate } from 'utils/validation'
import { DeleteButton } from './deleteButton'
import { GenerateSecretKeyButton } from './generateKeybutton/secret'
import { useStyle, Wrapper } from './styles'

export function GeneralInfomation() {
    const style = useStyle()
    const dispatch = useAppDispatch()
    const { profile, isLoading } = useAppSelector((state) => state.bot)

    const { onUpload, isLoading: uploadImageLoading } = useUploadImage((url) =>
        setValues({ ...values, avatarUrl: url })
    )

    const { errors, values, touched, handleSubmit, handleChange, setValues } = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: profile?.name || '',
            description: profile?.description || '',
            avatarUrl: profile?.avatarUrl || '',
        },
        validationSchema: botInfoValidate,
        onSubmit: async (values, { setFieldError }) => {
            try {
                if (!profile) throw new Error('Profile not found')
                unwrapResult(
                    await dispatch(
                        botActions.updateBot({ botId: profile.botId, ...values })
                    )
                )
            } catch {
                setFieldError('name', 'Bot name is already taken')
            }
        },
    })

    if (!profile) return <></>

    return (
        <Box component={Wrapper}>
            <Typography variant="h4" gutterBottom>
                General Infomation
            </Typography>
            <Typography variant="h6" color="text.disabled">
                What should we call your creation? What amazing things does it do? What
                icon should represent it across Disney? Tell us here!
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
                            fullWidth
                            value={values.name}
                            onChange={handleChange}
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && errors.name}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Title>Description</Title>
                        <Typography variant="caption" color="text.disabled" gutterBottom>
                            ({values.description.length} characters)
                        </Typography>
                        <TextField
                            name="description"
                            variant="outlined"
                            fullWidth
                            value={values.description}
                            error={touched.description && Boolean(errors.description)}
                            helperText={touched.description && errors.description}
                            onChange={handleChange}
                            multiline
                            maxRows={7}
                            minRows={4}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Title>Bot ID</Title>
                        <Typography>{profile.botId}</Typography>
                    </Grid>

                    <Grid item xs={12} alignItems="flex-start" width="100%">
                        <Title>Secret Key</Title>
                        <Stack sx={borderStyle} className={style.textString}>
                            <TextCopy isHidden text={profile.secretKey} />
                        </Stack>
                        <GenerateSecretKeyButton />
                    </Grid>
                </Grid>
            </Grid>

            <Stack
                sx={{ mt: 4, flex: 1 }}
                direction="row"
                justifyContent="flex-end"
                spacing={2}
            >
                <DeleteButton />
                <Button
                    disabled={isLoading}
                    variant="contained"
                    onClick={() => handleSubmit()}
                >
                    Save
                </Button>
            </Stack>
        </Box>
    )
}
