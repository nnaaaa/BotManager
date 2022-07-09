import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'

import { makeStyles } from '@mui/styles'

export const useStyle = makeStyles({
    form: {
        minWidth: 400,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 24,
        borderRadius: 8,
        borderWidth: 1,
        borderStyle: 'solid',
        // background: '#fff',
        // boxShadow:
        //     'rgba(0, 0, 0, 0.2) 0px 3px 3px -2px,rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px',
    },
    signBtn: {
        justifyContent: 'flex-start',
        width: '100%',
    },
})

export const Wrapper = styled(Box)`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 1rem;
`
