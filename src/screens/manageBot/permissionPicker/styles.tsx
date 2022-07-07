import { Typography } from '@mui/material'

export const Title = ({ children }: { children: string }) => (
    <Typography variant="h6" color="text.secondary">
        {children}
    </Typography>
)
