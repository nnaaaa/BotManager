import { createTheme, Theme } from '@mui/material'
import { createContext, useMemo, useState } from 'react'

interface IColorModeContext {
    toggleColorMode: () => void
    theme: Theme
    mode: 'dark' | 'light'
}

export const ColorModeContext = createContext<IColorModeContext>({
    toggleColorMode: () => {},
    theme: createTheme(),
    mode: 'dark',
})

interface Props {
    children: JSX.Element
}

export const ColorMode: React.FC<Props> = ({ children }) => {
    const [mode, setMode] = useState<'light' | 'dark'>('dark')
    const toggleColorMode = () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
    }

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
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
            }),
        [mode]
    )

    return (
        <ColorModeContext.Provider value={{ toggleColorMode, theme, mode }}>
            {children}
        </ColorModeContext.Provider>
    )
}
