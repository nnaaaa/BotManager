import { createTheme, Theme } from '@mui/material'
import { createContext, useMemo, useState } from 'react'
import { darkThemeOption, lightThemeOption } from 'styles'

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
        () => createTheme(mode === 'light' ? lightThemeOption : darkThemeOption),
        [mode]
    )

    return (
        <ColorModeContext.Provider value={{ toggleColorMode, theme, mode }}>
            {children}
        </ColorModeContext.Provider>
    )
}
