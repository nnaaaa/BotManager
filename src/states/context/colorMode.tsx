import { createTheme } from '@mui/material'
import { createContext, useMemo, useState } from 'react'
export const ColorModeContext = createContext({
    toggleColorMode: () => {},
    theme: createTheme(),
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
                },
            }),
        [mode]
    )

    return (
        <ColorModeContext.Provider value={{ toggleColorMode, theme }}>
            {children}
        </ColorModeContext.Provider>
    )
}
