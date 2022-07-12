import { DarkMode, WbSunny } from '@mui/icons-material'
import { IconButton, Stack } from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext } from 'states/context/colorMode'

export function ModeSwitch() {
    const { toggleColorMode, mode } = useContext(ColorModeContext)

    return (
        <Stack direction="row" alignItems="center">
            {/* <Switch onChange={toggleColorMode} color="default" /> */}
            <IconButton onClick={toggleColorMode}>
                {mode === 'dark' ? <DarkMode /> : <WbSunny />}
            </IconButton>
        </Stack>
    )
}
