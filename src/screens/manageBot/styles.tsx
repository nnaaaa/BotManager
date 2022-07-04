import { Typography } from '@mui/material'
import styled from 'styled-components'

export const Wrapper = styled.div`
    /* padding: 1rem 1rem; */
    flex: 1;
`

export const Right = styled.div`
    padding: 2rem 2rem;
`

export const Left = styled.div`
    padding: 2rem 2rem;
`

export const Title = ({ children }: { children: string }) => <Typography variant='h6' color='text.secondary' sx={{px:1}} gutterBottom>{children}</Typography>

