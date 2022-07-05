import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { unwrapResult } from '@reduxjs/toolkit'
import { Copy } from 'components'
import { AvatarCard } from 'components/avatarCard'
import { useFormik } from 'formik'
import { useAppDispatch, useAppSelector } from 'states/hooks'
import { botActions } from 'states/slices'
import { borderStyle } from 'styles/global'
import { botInfoValidate } from 'utils/validation'
import { DeleteButton } from './deleteButton'
import { GenerateSecretKeyButton } from './generateKeybutton/secret'
import { Title, useStyle, Wrapper } from './styles'

export function GeneralInfomation() {
    const style = useStyle()
    const dispatch = useAppDispatch()
    const { profile, isLoading } = useAppSelector((state) => state.bot)

    const { errors, values, touched, handleSubmit, handleChange } = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: profile?.name || '',
            description: profile?.description || '',
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
                setFieldError('name','Bot name is already taken')
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
            <Stack direction="row" spacing={4} sx={{ mt: 6, flex: 1 }}>
                <Stack>
                    <Title>Bot icon</Title>
                    <AvatarCard url={profile.avatarUrl} />
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
                        <TextField
                            name="description"
                            variant="outlined"
                            value={values.description}
                            error={touched.description && Boolean(errors.description)}
                            helperText={touched.description && errors.description}
                            onChange={handleChange}
                            multiline
                            maxRows={7}
                            minRows={4}
                        />
                    </Stack>

                    <Stack>
                        <Title>Bot ID</Title>
                        <Typography>{profile.botId}</Typography>
                    </Stack>

                    <Stack alignItems="flex-start">
                        <Title>Secret Key</Title>
                        <Stack sx={borderStyle} className={style.textString}>
                            <Copy isHidden text={profile.secretKey} />
                        </Stack>
                        <GenerateSecretKeyButton />
                    </Stack>
                </Stack>
            </Stack>

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
