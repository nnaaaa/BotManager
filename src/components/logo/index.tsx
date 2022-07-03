import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import * as icon from 'assets/icon.png'

function Logo() {
    return (
        <Box style={{ position:'absolute',width:80,height:80,top:20,left:20 }} component={Link} to="/">
            <img src={icon.default} />
        </Box>
    )
}

export default Logo
