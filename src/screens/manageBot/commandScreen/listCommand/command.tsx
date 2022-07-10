import { ListItemButton, Stack, Typography } from '@mui/material'

interface Props {
    onClick?: () => void
    selected?: boolean
    className: string
    funcName: string
    args: string[]
}

export function Command({ onClick, selected, className, funcName, args }: Props) {
    return (
        <ListItemButton onClick={onClick} selected={selected}>
            <Typography
                noWrap
                color="primary"
                sx={{ maxWidth: '30%' }}
                fontFamily="Cascadia"
            >
                {className}
            </Typography>
            <Typography fontWeight="bold" fontFamily="Cascadia">
                .
            </Typography>
            <Typography
                noWrap
                color="text.disabled"
                sx={{ maxWidth: '30%' }}
                fontFamily="Cascadia"
            >
                {funcName}
            </Typography>
            <Typography fontWeight="bold" fontFamily="Cascadia">
                (
            </Typography>
            <Stack sx={{ maxWidth: '40%', overflow: 'hidden' }} direction="row">
                {args.map((arg, index) => (
                    <>
                        <Typography
                            key={arg + index}
                            color="text.disabled"
                            fontFamily="Cascadia"
                        >
                            {arg}
                        </Typography>
                        {index !== args.length - 1 && (
                            <Typography fontWeight="bold" fontFamily="Cascadia">
                                ,
                            </Typography>
                        )}
                    </>
                ))}
            </Stack>
            <Typography fontWeight="bold" fontFamily="Cascadia">
                )
            </Typography>
        </ListItemButton>
    )
}
