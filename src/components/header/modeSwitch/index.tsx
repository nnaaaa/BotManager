import { DarkMode, WbSunny } from '@mui/icons-material'
import { Stack, Switch } from '@mui/material'
import { useContext } from 'react'
import { ColorModeContext } from 'states/context/colorMode'

export function ModeSwitch() {
    const { toggleColorMode } = useContext(ColorModeContext)

    return (
        <Stack direction="row" alignItems="center">
            <DarkMode />
            <Switch onChange={toggleColorMode} color="default" />
            <WbSunny />
        </Stack>
    )
}
