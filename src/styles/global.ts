import { Theme } from '@emotion/react'
import { SxProps } from '@mui/material'
import { createGlobalStyle } from 'styled-components'
import '../assets/fonts/FrederGreat/FrederGreat-Regular.ttf'

const globalStyles = createGlobalStyle`
    html{
        font-family:'Fira Code';
    }
    *{
        box-sizing: border-box;
    }
    a{
        text-decoration:none;
    }
    img{
        width:100%;
        display:inline-block;
    }
    input{
        outline:none;
        border:none;
    }
    form{
        margin:0;
    }
   
    /* ::-webkit-scrollbar-thumb:hover {
        background:#EA63FD;
    } */
`

export const linearBackground = `linear-gradient(to right bottom,
    rgba(24, 1, 86,0.4),
    rgba(84, 0, 218,0.4),
    rgba(122, 39, 244,0.4),
    rgba(236, 58, 245,0.4),
    rgba(93, 214, 245,0.4))`

export default globalStyles

export const borderStyle: SxProps<Theme> = {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'action.disabled',
    '&:hover': { borderColor: 'primary.main' },
}
