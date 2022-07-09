import { List } from '@mui/material'
import { styled } from '@mui/material/styles'

// import styled from "styled-components";

export const ScrollStyled = styled(List)(({ theme }) => ({
    maxHeight: '500px',
    overflowY: 'auto',
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
        width: '7px',
    },
    '&::-webkit-scrollbar-track': {
        width: '7px',
    },
    '&::-webkit-scrollbar-thumb': {
        width: '7px',
        borderRadius: '1px',
        background: 'gray',
        transition: '0.5s',
    },
    '&::-webkit-scrollbar-thumb:hover': {
        background: theme.palette.primary.main,
    },
}))
