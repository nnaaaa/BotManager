import { Error } from '@mui/icons-material'
import {
    Avatar,
    CircularProgress,
    DialogTitle,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Stack,
} from '@mui/material'
import { MemberEntity } from 'entities/member.entity'
import { Dispatch, SetStateAction } from 'react'
import { useAppSelector } from 'states/hooks'

interface Props {
    closeModal: () => void
    openReviewPermission: () => void
    setActiveMember: Dispatch<SetStateAction<MemberEntity | undefined>>
}

export function SelectGuild({
    closeModal,
    openReviewPermission,
    setActiveMember,
}: Props) {
    const { members, isLoading } = useAppSelector((state) => state.member)

    const onSelect = async (member: MemberEntity) => {
        setActiveMember(member)
        closeModal()
        openReviewPermission()
    }

    if (isLoading)
        return (
            <Stack width="100%" alignItems="center">
                <CircularProgress />
            </Stack>
        )

    return (
        <>
            <DialogTitle fontSize="12">Select guild</DialogTitle>
            <List>
                {members.length > 0 ? (
                    members.map((member) => (
                        <ListItemButton
                            key={member.guild.guildId}
                            onClick={() => onSelect(member)}
                        >
                            <ListItemAvatar>
                                <Avatar src={member.guild.avatarUrl} />
                            </ListItemAvatar>
                            <Stack flex={1}>
                                <ListItemText
                                    primary={member.guild.name}
                                    primaryTypographyProps={{
                                        fontSize: 18,
                                    }}
                                />
                            </Stack>
                        </ListItemButton>
                    ))
                ) : (
                    <ListItemButton disabled={true}>
                        <ListItemText primary="No guilds" />
                        <Error />
                    </ListItemButton>
                )}
            </List>
        </>
    )
}
