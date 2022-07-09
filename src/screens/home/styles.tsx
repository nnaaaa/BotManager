import { makeStyles } from '@mui/styles'
import { styled } from '@mui/material/styles'
import * as bg from 'assets/images/background.jpg'
import { Box } from '@mui/material'

export const useStyle = makeStyles({
    wrapper: {
        background: `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url(${bg.default}) no-repeat 0 50%`,
        // position: 'relative',
        // '&::before': {
        //     content: "wret",
        //     position: 'absolute',
        //     top: 0,
        //     right: 0,
        //     bottom: 0,
        //     left: 0,
        //     backgroundColor: 'rgba(0,0,0,0.25)',
        // }
    },
})
export const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
`
