import { Button } from '@mui/material'
import { unwrapResult } from '@reduxjs/toolkit'
import { useAppDispatch, useAppSelector } from 'states/hooks'
import { botActions } from 'states/slices'

export function GenerateSecretKeyButton() {
    const dispatch = useAppDispatch()
    const { profile, isLoading } = useAppSelector((state) => state.bot)

    const generateNewSecretKey = async () => {
        if (!profile) return
        unwrapResult(
            await dispatch(
                botActions.generateNewSecretKey({
                    botId: profile.botId,
                    oldSecretKey: profile.secretKey,
                })
            )
        )
    }
    return (
        <Button
            sx={{ textTransform: 'capitalize' }}
            disabled={isLoading}
            variant="contained"
            onClick={generateNewSecretKey}
        >
            Generate
        </Button>
    )
}
