import { Box, CircularProgress } from "@mui/material";


export function Loading() {
    return <Box width='100%' height='100%' display='flex' justifyContent='center' alignItems='center'>
        <CircularProgress/>
    </Box>
}