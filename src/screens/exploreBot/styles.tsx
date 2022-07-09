import { IconButton, IconButtonProps, Typography, Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { styled } from '@mui/material/styles'

export const Wrapper = styled(Box)`
    /* padding: 1rem 1rem; */
    flex: 1;
`

export const Right = styled(Box)`
    padding: 2rem 2rem;
`

export const Left = styled(Box)`
    padding: 1rem 1rem;
`

export const Title = ({ children }: { children: string }) => (
    <Typography variant="h6" color="text.secondary" sx={{ px: 1 }} gutterBottom>
        {children}
    </Typography>
)
