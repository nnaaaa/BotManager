import { Button } from '@mui/material'
import { unwrapResult } from '@reduxjs/toolkit'
import { useAppDispatch, useAppSelector } from 'states/hooks'
import { botActions } from 'states/slices'
export function DeleteButton() {
    const dispatch = useAppDispatch()
    const { profile, isLoading } = useAppSelector((state) => state.bot)

    const handleDelete = async () => {
        if (!profile) return
        unwrapResult(
            await dispatch(
                botActions.deleteBot({
                    botId: profile.botId,
                    secretKey: profile.secretKey,
                })
            )
        )
    }

    return (
        <Button
            disabled={isLoading}
            variant="contained"
            color="error"
            onClick={handleDelete}
        >
            Delete
        </Button>
    )
}
