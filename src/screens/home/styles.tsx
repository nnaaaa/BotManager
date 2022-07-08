import { makeStyles } from '@mui/styles'
import styled from 'styled-components'
import * as bg from 'assets/images/background.jpg'

export const useStyle = makeStyles({
    wrapper: {
        background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${bg.default}) no-repeat 0 50%`,
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
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
`
