import { Theme } from '@emotion/react'
import { SxProps } from '@mui/material'
import '../assets/fonts/FrederGreat/FrederGreat-Regular.ttf'

export const borderStyle: SxProps<Theme> = {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'action.disabled',
    '&:hover': { borderColor: 'primary.main' },
}
