import { Avatar, Stack, SxProps, Theme, Typography } from '@mui/material'
import { borderStyle } from 'styles'
import { useStyle } from './styles'

interface Props {
    url: string | undefined
}

export function AvatarCard({ url }: Props) {
    const style = useStyle()

    return (
        <Stack
            sx={borderStyle}
            className={style.avatarWrapper}
            alignItems="center"
            justifyContent="center"
        >
            <Avatar sx={{ width: '128px', height: '128px', mb: 2 }} src={url} />
            <Stack direction="row">
                <Typography variant="caption" fontSize={12}>
                    Size:{' '}
                </Typography>
                <Typography component="span" fontWeight="bold" fontSize={12}>
                    128x128
                </Typography>
            </Stack>
        </Stack>
    )
}
