import { Box, Stack, TextField, Typography } from '@mui/material'
import { Copy } from 'components'
import { AvatarCard } from 'components/avatarCard'
import { useAppSelector } from 'states/hooks'
import { borderStyle } from 'styles/global'
import { Title, useStyle, Wrapper } from './styles'

export function GeneralInfomation() {
    const style = useStyle()

    const { profile } = useAppSelector((state) => state.bot)
    
    if (!profile) return <></>

    return (
        <Box component={Wrapper}>
            <Typography variant="h4" gutterBottom>
                General Infomation
            </Typography>
            <Typography variant="h6" color="text.disabled">
                What should we call your creation? What amazing things does it do? What
                icon should represent it across Disney? Tell us here!
            </Typography>
            <Stack direction="row" spacing={4} sx={{ mt: 6, flex: 1 }}>
                <Stack>
                    <Title>Bot icon</Title>
                    <AvatarCard url={profile.avatarUrl} />
                </Stack>

                <Stack spacing={4} sx={{ flex: 1 }}>
                    <Stack>
                        <Title>Name</Title>
                        <TextField variant="outlined" value={profile.name}/>
                    </Stack>

                    <Stack>
                        <Title>Bot ID</Title>
                        <Typography>{profile.botId}</Typography>
                    </Stack>

                    <Stack>
                        <Title>Secret Key</Title>
                        <Stack sx={borderStyle} className={style.textString}>
                            <Copy isHidden text={profile.secretKey} />
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}
