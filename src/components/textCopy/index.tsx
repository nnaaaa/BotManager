import {
    Circle,
    ContentCopyOutlined,
    Visibility,
    VisibilityOff,
} from '@mui/icons-material'
import { Button, IconButton, Stack, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

interface Props {
    text: string
    isHidden?: boolean
}

export function TextCopy({ text, isHidden = false }: Props) {
    const [isCopied, setCopy] = useState(false)
    const [isVisible, setVisible] = useState(false)

    useEffect(() => {
        setCopy(false)
    }, [text])

    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            width="100%"
        >
            {isHidden ? (
                isVisible ? (
                    <Typography sx={{ mr: 1, maxWidth: '400px' }} noWrap>
                        {text}
                    </Typography>
                ) : (
                    <Stack direction="row">
                        {text
                            .split('')
                            .slice(0, 40)
                            .map((char, i) => (
                                <Circle key={'hidde' + char + i} sx={{ fontSize: 8 }} />
                            ))}
                    </Stack>
                )
            ) : (
                <Typography sx={{ mr: 1, maxWidth: '400px' }} noWrap>
                    {text}
                </Typography>
            )}
            <Stack direction="row" alignItems="center" spacing={1}>
                {isHidden && (
                    <IconButton onClick={() => setVisible((pre) => !pre)}>
                        {isVisible ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                )}
                <CopyToClipboard text={text} onCopy={() => setCopy(true)}>
                    <Button
                        variant={isCopied ? 'contained' : 'outlined'}
                        sx={{ textTransform: 'capitalize' }}
                        startIcon={<ContentCopyOutlined />}
                    >
                        {isCopied ? `Copied!` : `Copy`}
                    </Button>
                </CopyToClipboard>
            </Stack>
        </Stack>
    )
}
