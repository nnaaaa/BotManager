import {
    Avatar,
    CircularProgress,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Stack,
} from '@mui/material'
import { BotEntity } from 'entities/bot.entity'
import { GuildEntity } from 'entities/guild.entity'
import { useMemberSocket } from 'hooks'
import { useAppSelector } from 'states/hooks'

interface Props {
    bot: BotEntity
    closeModal: () => void
}

export function SelectGuild({ bot, closeModal }: Props) {
    const { joinGuild } = useMemberSocket()
    const { members, isLoading } = useAppSelector((state) => state.member)

    const onSelect = async (guild: GuildEntity) => {
        await joinGuild(bot, guild)
        closeModal()
    }

    if (isLoading)
        return (
            <Stack width="100%" alignItems="center">
                <CircularProgress />
            </Stack>
        )

    return (
        <List sx={{ maxHeight: '400px' }}>
            {members &&
                members.map(({ guild }) => (
                    <ListItemButton key={guild.guildId} onClick={() => onSelect(guild)}>
                        <ListItemAvatar>
                            <Avatar src={guild.avatarUrl} />
                        </ListItemAvatar>
                        <Stack flex={1}>
                            <ListItemText
                                primary={guild.name}
                                primaryTypographyProps={{
                                    fontSize: 18,
                                }}
                            />
                        </Stack>
                    </ListItemButton>
                ))}
        </List>
    )
}
