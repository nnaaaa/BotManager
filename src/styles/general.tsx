import { Theme } from '@emotion/react'
import { createTheme, SxProps, Typography } from '@mui/material'
import '../assets/fonts/FrederGreat/FrederGreat-Regular.ttf'

export const borderStyle: SxProps<Theme> = {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'action.disabled',
    '&:hover': { borderColor: 'primary.main' },
}

export const theme = createTheme({
    typography: {
        fontFamily: 'OpenSans',
        h4: {
            fontSize: '2rem',
        },
    },
})

export const Title = ({ children }: { children: string }) => (
    <Typography variant="h6" fontWeight="bold">
        {children}
    </Typography>
)
