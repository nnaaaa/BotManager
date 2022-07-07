import { LoadingButton } from '@mui/lab'
import {
    Avatar,
    Box,
    InputBase,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Stack,
    TextField,
    Typography,
} from '@mui/material'
import { unwrapResult } from '@reduxjs/toolkit'
import { CommandEntity } from 'entities/command.entity'
import { useFormik } from 'formik'
import { useAppDispatch, useAppSelector } from 'states/hooks'
import { botActions } from 'states/slices'
import { commandValidate } from 'utils/validation'

interface Props {
    command: CommandEntity
}

export function EditCommandForm({ command }: Props) {
    const dispatch = useAppDispatch()
    const { profile, isLoading } = useAppSelector((state) => state.bot)

    const handleDelete = async () => {
        if (!profile) return
        unwrapResult(await dispatch(botActions.deleteCommand(command.commandId)))
    }

    const { errors, values, touched, handleSubmit, handleChange } = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: command.name,
            description: command.description,
        },
        validationSchema: commandValidate,
        onSubmit: async (values, { setFieldError }) => {
            try {
                if (!profile) throw new Error('Profile not found')
                unwrapResult(
                    await dispatch(
                        botActions.updateCommand({
                            commandId: command.commandId,
                            ...values,
                        })
                    )
                )
            } catch (e) {
                console.log(e)
                setFieldError('name', 'Command is already created')
            }
        },
    })

    if (!profile) return <></>

    return (
        <List>
            <ListItemButton selected={true}>
                <ListItemAvatar>
                    <Avatar src={profile.avatarUrl} />
                </ListItemAvatar>
                <Typography noWrap color="primary" sx={{ maxWidth: '30%' }}>
                    {profile.name}
                </Typography>
                <Typography fontWeight="bold">&nbsp;.&nbsp;</Typography>
                {/* <Typography noWrap color="text.disabled" sx={{ maxWidth: '70%' }}>
                    {command.name}
                </Typography> */}
                <InputBase
                    value={values.name}
                    name="name"
                    onChange={handleChange}
                    sx={{
                        bgcolor: 'background.paper',
                        px: 1,
                        borderWidth: touched.name && Boolean(errors.name) ? '1px' : '0px',
                        borderRadius: 1,
                        borderStyle: 'solid',
                        borderColor: 'error.main',
                    }}
                />
            </ListItemButton>
            {touched.name && Boolean(errors.name) && (
                <ListItemText
                    primaryTypographyProps={{ fontSize: '12px', color: 'error', px: 2 }}
                    primary={errors.name}
                />
            )}
            <Box sx={{ maxWidth: '100%' }} my={2}>
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
            </Box>
            <Stack
                direction="row"
                justifyContent="flex-end"
                alignItems="center"
                spacing={2}
            >
                <LoadingButton
                    variant="contained"
                    color="error"
                    loading={isLoading}
                    onClick={handleDelete}
                >
                    Delete
                </LoadingButton>
                <LoadingButton
                    variant="contained"
                    color="primary"
                    onClick={() => handleSubmit()}
                    loading={isLoading}
                >
                    Save
                </LoadingButton>
            </Stack>
        </List>
    )
}
