import { styled } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'
import { Typography, Box } from '@mui/material'

export const Wrapper = styled(Box)``
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
