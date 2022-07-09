import { Box, Grid, Stack, TextField, Typography } from '@mui/material'
import { useFormik } from 'formik'
import { useAppSelector } from 'states/hooks'
import { CreateForm } from './createForm'
import { ListCommand } from './listCommand'
import { Title } from 'styles'

export function CommandScreen() {
    return (
        <Box width="100%">
            <Typography variant="h4" gutterBottom>
                Which function your bot can do?
            </Typography>
            <Stack
                sx={{ mt: 2 }}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                spacing={2}
            >
                <Typography variant="h6" color="text.disabled">
                    List it carefully!
                </Typography>

                <CreateForm />
            </Stack>

            <Stack sx={{ mt: 4 }}>
                <ListCommand />
            </Stack>
        </Box>
    )
}
