import { Stack, Typography } from '@mui/material'

interface Props {
    name: string
}

export function ArrayProps({ name }: Props) {
    return name[name.length - 2] === '[' ? (
        <Stack direction="row">
            <Typography color="primary">{name.slice(0, -2)}</Typography>
            <Typography fontWeight="bold" fontFamily="Cascadia" color="primary">
                [
            </Typography>
            <Typography fontWeight="bold" fontFamily="Cascadia" color="primary">
                ]
            </Typography>
        </Stack>
    ) : (
        <Typography color="primary">{name}</Typography>
    )
}
