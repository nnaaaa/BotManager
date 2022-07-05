import { Button, Popover, Stack } from '@mui/material'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useStyle } from '../styles'
export function BotButton() {
    const style = useStyle()
    const [toggle, setToggle] = useState(false)
    const ref = useRef<HTMLElement | null>()
    return (
        <>
            <Button
                className={style.button}
                variant="text"
                color="inherit"
                sx={{ textTransform: 'capitalize' }}
                ref={ref as any}
                onClick={() => setToggle(!toggle)}
            >
                Bot
            </Button>
            <Popover
                open={toggle}
                anchorEl={ref.current}
                onClose={() => setToggle(false)}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Stack direction="column">
                    <Button
                        className={style.button}
                        component={Link}
                        to="bot/create"
                        variant="text"
                        color="inherit"
                        sx={{ textTransform: 'capitalize' }}
                        onClick={() => setToggle(false)}
                    >
                        Manage
                    </Button>
                    <Button
                        className={style.button}
                        component={Link}
                        to="bot/find"
                        variant="text"
                        color="inherit"
                        sx={{ textTransform: 'capitalize' }}
                        onClick={() => setToggle(false)}
                    >
                        Explore
                    </Button>
                </Stack>
            </Popover>
        </>
    )
}
