import { Theme } from '@emotion/react'
import { SxProps, ThemeOptions, Typography } from '@mui/material'
import '../assets/fonts/FrederGreat/FrederGreat-Regular.ttf'

export const borderStyle: SxProps<Theme> = {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'action.disabled',
    '&:hover': { borderColor: 'primary.main' },
}

export const lightThemeOption: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#6272a4',
        },
        secondary: {
            main: '#bd93f9',
        },
    },
    typography: {
        // htmlFontSize: 14,
        // fontSize:14,
        fontFamily: 'OpenSans',
        h4: {
            fontSize: '2rem',
        },
        h6: {
            fontSize: '1rem',
        },
    },
}

export const darkThemeOption: ThemeOptions = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#6272a4',
        },
        secondary: {
            main: '#bd93f9',
        },
        background: {
            paper: '#282a36',
            // paper: '#44475a'
        },
    },
    typography: {
        // htmlFontSize: 14,
        // fontSize:14,
        fontFamily: 'OpenSans',
        h4: {
            fontSize: '2rem',
        },
        h6: {
            fontSize: '1rem',
        },
    },
}

export const Title = ({ children }: { children: string }) => (
    <Typography variant="h6" fontWeight="bold">
        {children}
    </Typography>
)
