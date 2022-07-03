import { Grid, Skeleton } from '@mui/material'
import { makeStyles } from '@mui/styles'

export const useStyle = makeStyles({
    wrapper: {
        backgroundImage: `linear-gradient(to right bottom,
            rgba(24, 1, 86,0.4),
            rgba(84, 0, 218,0.4),
            rgba(122, 39, 244,0.4),
            rgba(236, 58, 245,0.4),
            rgba(93, 214, 245,0.4))`,
        minHeight: '100vh',
    },
})
