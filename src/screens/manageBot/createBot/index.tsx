import { LoadingButton } from '@mui/lab'
import { Box, Stack, TextField, Typography } from '@mui/material'
import { unwrapResult } from '@reduxjs/toolkit'
import { AvatarCard } from 'components/avatarCard'
import { FormEvent, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'states/hooks'
import { authActions, botActions } from 'states/slices'
import { Title } from './styles'
import { useManageBot } from '../useManageBot'
import { useFormik } from 'formik'
import { botInfoValidate } from 'utils/validation'

export function CreateBot() {
    const dispatch = useAppDispatch()
    const { isLoading } = useAppSelector((state) => state.bot)

    const { errors, values, touched, handleSubmit, handleChange } = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: '',
            description: '',
        },
        validationSchema: botInfoValidate,
        onSubmit: async (values, { setFieldError }) => {
            try {
                unwrapResult(await dispatch(botActions.createBot(values)))
            } catch {
                setFieldError('name','Bot name is already taken')
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
                    <AvatarCard url={''} />
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
                            onChange={handleChange}
                            error={touched.description && Boolean(errors.description)}
                            helperText={touched.description && errors.description}
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
