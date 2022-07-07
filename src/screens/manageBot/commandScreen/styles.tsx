import { Typography } from '@mui/material'
import styled from 'styled-components'

export const Wrapper = styled.div``
export const Title = ({ children }: { children: string }) => (
    <Typography variant="h6" color="text.secondary">
        {children}
    </Typography>
)
