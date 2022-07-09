import { Typography, Box } from '@mui/material'
import { styled } from '@mui/material/styles'

export const Wrapper = styled(Box)``
export const Title = ({ children }: { children: string }) => (
    <Typography variant="h6" color="text.secondary">
        {children}
    </Typography>
)
