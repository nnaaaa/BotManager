import { LoadingButton } from '@mui/lab'
import {
    Avatar,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    ListItem,
    ListItemAvatar,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import { unwrapResult } from '@reduxjs/toolkit'
import { useFormik } from 'formik'
import { useAppDispatch, useAppSelector } from 'states/hooks'
import { botActions } from 'states/slices'
import { commandValidate } from 'utils/validation'

interface Props {
    closePopup: () => void
}

export function InputForm({ closePopup }: Props) {
    const dispatch = useAppDispatch()
    const { profile, isLoading } = useAppSelector((state) => state.bot)

    const { errors, values, touched, handleSubmit, handleChange } = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: '',
            description: '',
        },
        validationSchema: commandValidate,
        onSubmit: async (values, { setFieldError }) => {
            try {
                if (!profile) throw new Error('Profile not found')
                unwrapResult(
                    await dispatch(
                        botActions.addCommand({ botId: profile.botId, ...values })
                    )
                )
                closePopup()
            } catch (e) {
                console.log(e)
                setFieldError('name', 'Command is already created')
            }
        },
    })

    return (
        <>
            <DialogTitle>Command Worker</DialogTitle>
            {profile ? (
                <>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar src={profile.avatarUrl} />
                        </ListItemAvatar>
                        <Typography noWrap color="primary" sx={{ maxWidth: '30%' }}>
                            {profile.name}
                        </Typography>
                        <Typography fontWeight="bold">&nbsp;.&nbsp;</Typography>
                        <Typography noWrap color="text.disabled" sx={{ maxWidth: '60%' }}>
                            {values.name}
                        </Typography>
                    </ListItem>
                    <DialogContent>
                        <Stack spacing={2}>
                            <TextField
                                autoFocus
                                name="name"
                                variant="outlined"
                                fullWidth
                                label="Command name"
                                value={values.name}
                                onChange={handleChange}
                                error={touched.name && Boolean(errors.name)}
                                helperText={touched.name && errors.name}
                            />

                            <TextField
                                name="description"
                                label="Describe your command"
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
                        </Stack>
                    </DialogContent>

                    <DialogActions>
                        <LoadingButton
                            variant="contained"
                            onClick={() => handleSubmit()}
                            loading={isLoading}
                        >
                            Save
                        </LoadingButton>
                    </DialogActions>
                </>
            ) : (
                <DialogContent>
                    <DialogContentText>No Bot found</DialogContentText>
                </DialogContent>
            )}
        </>
    )
}
