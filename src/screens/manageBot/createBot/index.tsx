import { LoadingButton } from '@mui/lab'
import { Box, Stack, TextField, Typography } from '@mui/material'
import { unwrapResult } from '@reduxjs/toolkit'
import { AvatarCard } from 'components/avatarCard'
import { FormEvent, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'states/hooks'
import { authActions, botActions } from 'states/slices'
import { Title } from './styles'
import { useCreateBot } from './useCreateBot'

export function CreateBot() {
    const dispatch = useAppDispatch()
    const { profile: userProfile } = useAppSelector((state) => state.auth)
    const { profile, isLoading } = useAppSelector((state) => state.bot)
    const { name, description, setName, setDescription, getContent, previewImage } =
        useCreateBot()

    const handleSubmit = async (e: FormEvent) => {
        try {
            e.preventDefault()
            const dto = getContent()
            console.log(dto)
            unwrapResult(await dispatch(botActions.createBot(dto)))

        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        if (profile && userProfile) {
            const isExist = userProfile.createdBots.some(b => b.botId === profile.botId)
            if (!isExist)
                dispatch(authActions.addBot(profile))
        }
    }, [profile])

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
                    <AvatarCard url={previewImage} />
                </Stack>

                <Stack spacing={4} sx={{ flex: 1 }}>
                    <Stack>
                        <Title>Name</Title>
                        <TextField
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Stack>

                    <Stack>
                        <Title>Description</Title>
                        <TextField
                            variant="outlined"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
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
