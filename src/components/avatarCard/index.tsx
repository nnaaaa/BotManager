import { Avatar, MenuItem, Stack, Typography } from '@mui/material'
interface Props {
    url: string | undefined
    isDisabled?: boolean
}

export function AvatarCard({ url,isDisabled }: Props) {
    
    console.log(url)
    return (
        <MenuItem
            selected={true}
            disabled={isDisabled}
            // variant='outlined'
            sx={{ flexDirection: 'column', p: 2 }}
            // disabled={isDisabled}
            // sx={borderStyle}
            // className={style.avatarWrapper}
            // alignItems="center"
            // justifyContent="center"
        >
            <Avatar sx={{ width: '128px', height: '128px', mb: 2 }} src={url || 'https://cdn4.iconfinder.com/data/icons/usa-elements-solid-patriotic-and-freedom-1/512/Disneyland-512.png'} />
            <Stack direction="row">
                <Typography variant="caption" fontSize={12}>
                    Size:{' '}
                </Typography>
                <Typography component="span" fontWeight="bold" fontSize={12}>
                    128x128
                </Typography>
            </Stack>
        </MenuItem>
    )
}
