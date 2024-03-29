import { Avatar, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import * as icon from 'assets/images/icon.png'

interface Props {
    width?: number
    height?: number
}

export function Logo({ width = 52, height = 52 }: Props) {
    return (
        <Box style={{ cursor: 'pointer' }} sx={{ width, height }} component={Link} to="/">
            <Avatar src={icon.default} sx={{ width, height }} />
        </Box>
    )
}
