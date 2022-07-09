import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Wrapper = styled(Box)(({ theme }) => ({
    minHeight: 'calc(100vh - 64px)',
    marginTop: '64px',
    display: 'flex',
    '&::-webkit-scrollbar': {
        width: '10px',
    },
    '&::-webkit-scrollbar-track': {
        width: '10px',
    },
    '&::-webkit-scrollbar-thumb': {
        width: '10px',
        borderRadius: '2px',
        background: 'gray',
        transition: '0.5s',
    },
    '&::-webkit-scrollbar-thumb:hover': {
        background: theme.palette.primary.main,
    },
}))
