import { Avatar, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import * as icon from 'assets/icon.png'

interface Props {
    width?: number
    height?: number
}

function Logo({ width = 52, height = 52 }: Props) {
    return (
        <Box style={{ cursor: 'pointer' }} sx={{ width, height }} component={Link} to="/">
            <Avatar src={icon.default} sx={{ width, height }} />
        </Box>
    )
}

export default Logo
