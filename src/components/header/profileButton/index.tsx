import {
    Avatar,
    Button,
    CircularProgress,
    IconButton,
    Menu,
    MenuItem,
    Typography,
} from '@mui/material'
import Cookies from 'js-cookie'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from 'states/hooks'
import { authActions } from 'states/slices'

export function ProfileButton() {
    const dispatch = useAppDispatch()
    const { profile, isLoading } = useAppSelector((state) => state.auth)

    const [toggle, setToggle] = useState(false)
    const ref = useRef(null)

    const onLogout = () => {
        dispatch(authActions.logout())
        setToggle((pre)=> !pre)
        Cookies.remove('accesstoken')
        Cookies.remove('refreshtoken')
    }

    if (isLoading) return <CircularProgress />

    if (!profile)
        return (
            <>
                <Button
                    component={Link}
                    to="/auth"
                    variant="text"
                    color="inherit"
                    sx={{ textTransform: 'capitalize' }}
                >
                    Login
                </Button>
            </>
        )

    return (
        <>
            <Menu
                sx={{ mt: '45px' }}
                anchorEl={ref.current}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={toggle}
                onClose={() => setToggle(false)}
            >
                <MenuItem>
                    <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem>
                    <Typography textAlign="center" onClick={onLogout}>
                        Logout
                    </Typography>
                </MenuItem>
            </Menu>
            <IconButton onClick={() => setToggle(true)}>
                <Avatar src={profile.avatarUrl} ref={ref} />
            </IconButton>
        </>
    )
}
