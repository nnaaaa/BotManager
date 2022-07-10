import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'

export const Wrapper = styled(Box)``

export const useStyle = makeStyles({
    textString: {
        padding: 8,
        borderRadius: 8,
        maxWidth: '100%',
        marginBottom: 8,
    },
})
