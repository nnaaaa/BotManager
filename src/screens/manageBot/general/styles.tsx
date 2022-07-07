import styled from 'styled-components'
import { makeStyles } from '@mui/styles'
import { Typography } from '@mui/material'

export const Wrapper = styled.div``
export const Title = ({ children }: { children: string }) => (
    <Typography variant="h6" color="text.secondary">
        {children}
    </Typography>
)

export const useStyle = makeStyles({
    textString: {
        padding: 8,
        borderRadius: 8,
        // width: 'min-content',
        maxWidth: '100%',
        marginBottom: 8,
    },
})
