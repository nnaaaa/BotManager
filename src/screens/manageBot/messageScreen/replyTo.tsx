import { Stack, Typography } from '@mui/material'
import { MessageEntity } from 'entities/message.entity'

export const Reply = ({ replyTo }: { replyTo: MessageEntity | undefined }) => {
    if (!replyTo || !replyTo?.content) return <></>
    // const className = replyTo.content.split('.')[0]
    // const args = replyTo.content.match(argsFuncRegex)?.[1]?.split(/[\s,]+/) as string[]
    // const name = replyTo.content.match(funcNameRegex)?.[1] as string
    return (
        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
            <Typography>reply</Typography>
            <Typography color="primary">{replyTo.content}</Typography>
            {/* <Command className={className} args={args} funcName={name} /> */}
        </Stack>
    )
}
