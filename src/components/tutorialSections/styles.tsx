import { Grid, Skeleton } from '@mui/material'
export const LazyLoading = () => (
    <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
            <Skeleton variant="text" width={200} height={40} />
            <Skeleton variant="text" width={150} height={40} />
            <Skeleton variant="rectangular" height={200} />
            <Skeleton variant="text" width={200} height={40} sx={{ mt: 4 }} />
            <Skeleton variant="text" width={150} height={40} />
            <Skeleton variant="rectangular" height={200} />
        </Grid>
        <Grid item md={3}>
            <Skeleton variant="text" width={100} height={40} />
            <Skeleton variant="text" height={40} />
            <Skeleton variant="text" height={40} />
        </Grid>
    </Grid>
)
