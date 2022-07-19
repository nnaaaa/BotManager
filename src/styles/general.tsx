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
            main: '#2496ed',
        },
        secondary: {
            main: '#bd93f9',
        },
        text: {
            disabled: '#000000',
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
            main: '#9cd4f7',
        },
        background: {
            default: '#031f30',
            paper: '#0f1c24',
        },
        // primary: {
        //     main: '#dd637d',
        // },
        // background: {
        //     paper: '#581221',
        //     default: '#3a0c16'
        // },
        text: {
            disabled: '#d3d4d4',
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
