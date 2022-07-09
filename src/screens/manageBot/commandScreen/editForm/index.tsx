import { Add, Delete } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import {
    Avatar,
    Button,
    IconButton,
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
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from 'states/hooks'
import { botActions } from 'states/slices'
import { Title } from 'styles'
import { commandValidate } from 'utils/validation'

interface Props {
    command: CommandEntity
}

export function EditCommandForm({ command }: Props) {
    const dispatch = useAppDispatch()
    const { profile, isLoading } = useAppSelector((state) => state.bot)

    const [newArgs, setNewArgs] = useState<string>('')
    const [newArgsError, setNewArgsError] = useState<string>('')

    const handleDelete = async () => {
        if (!profile) return
        unwrapResult(await dispatch(botActions.deleteCommand(command.commandId)))
    }

    const { errors, values, touched, handleSubmit, handleChange, setFieldValue } =
        useFormik({
            enableReinitialize: true,
            initialValues: {
                name: command.name,
                description: command.description,
                args: command.args,
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
            <ListItemButton selected>
                <ListItemAvatar>
                    <Avatar src={profile.avatarUrl} />
                </ListItemAvatar>

                <Typography noWrap color="primary" sx={{ maxWidth: '30%' }}>
                    {profile.name}
                </Typography>

                <Typography fontWeight="bold">&nbsp;.&nbsp;</Typography>

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
            <Stack sx={{ maxWidth: '100%' }} my={2} spacing={2}>
                <Stack>
                    <Title>Description</Title>
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
                </Stack>

                <Stack spacing={1} alignItems="flex-start">
                    <Title>{`Argument (${values.args.length})`}</Title>

                    {values.args && values.args.length > 0 && (
                        <ListItemButton selected sx={{ width: '80%' }} disableRipple>
                            <Stack spacing={1} flex={1}>
                                {values.args.map((arg, index) => (
                                    <Stack
                                        direction="row"
                                        alignItems="center"
                                        spacing={1}
                                        key={arg + index}
                                        flex={1}
                                    >
                                        <Typography>{`${index + 1}. `}</Typography>
                                        <InputBase
                                            name={`args[${index}]`}
                                            value={arg}
                                            onChange={handleChange}
                                            sx={{
                                                flex: 1,
                                                bgcolor: 'background.paper',
                                                px: 1,
                                                borderWidth:
                                                    touched.args &&
                                                    Boolean(errors.args?.[index])
                                                        ? '1px'
                                                        : '0px',
                                                borderRadius: 1,
                                                borderStyle: 'solid',
                                                borderColor: 'error.main',
                                            }}
                                        />
                                        <IconButton
                                            size="small"
                                            onClick={() =>
                                                setFieldValue(
                                                    'args',
                                                    values.args.filter(
                                                        (_, i) => i !== index
                                                    )
                                                )
                                            }
                                        >
                                            <Delete />
                                        </IconButton>
                                    </Stack>
                                ))}
                            </Stack>
                        </ListItemButton>
                    )}

                    <TextField
                        onChange={(e) => {
                            setNewArgs(e.target.value)
                        }}
                        value={newArgs}
                        error={Boolean(newArgsError)}
                        helperText={newArgsError}
                    />
                    <Button
                        variant="contained"
                        size="small"
                        startIcon={<Add />}
                        onClick={() => {
                            if (!newArgs) {
                                setNewArgsError('Args name is required')
                                return
                            }
                            setFieldValue('args', [...values.args, newArgs])
                            setNewArgs('')
                        }}
                    >
                        Add
                    </Button>
                </Stack>
            </Stack>
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
                    onClick={() => handleSubmit()}
                    loading={isLoading}
                >
                    Save
                </LoadingButton>
            </Stack>
        </List>
    )
}
