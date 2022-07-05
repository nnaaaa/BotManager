import { Circle, Star, Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, IconButton, Stack, Typography } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

interface Props {
    text: string
    isHidden?: boolean
}

export function Copy({ text, isHidden = false }: Props) {
    const [isCopied, setCopy] = useState(false)
    const [isVisible, setVisible] = useState(false)

    useEffect(() => {
        setCopy(false)
    }, [text])

    return (
        <Stack
            direction="row"
            alignItems="center"
            // sx={{
            //     borderColor: 'text.disabled',
            //     borderWidth: 1,
            //     borderStyle: 'solid',
            //     width: 'min-content',
            //     p: 1,
            //     borderRadius: 1,
            // }}
        >
            {isHidden ? (
                isVisible ? (
                    <Typography sx={{ mr: 1 }} noWrap>
                        {text}
                    </Typography>
                ) : (
                    <Stack direction="row">
                        {text
                            .split('')
                            .slice(0, 30)
                            .map((char, i) => (
                                <Circle key={'hidde' + char + i} sx={{ fontSize: 8 }} />
                            ))}
                    </Stack>
                )
            ) : (
                <Typography sx={{ mr: 1 }} noWrap>
                    {text}
                </Typography>
            )}
            {isHidden && (
                <IconButton onClick={() => setVisible((pre) => !pre)}>
                    {isVisible ? <Visibility /> : <VisibilityOff />}
                </IconButton>
            )}
            <CopyToClipboard text={text} onCopy={() => setCopy(true)}>
                <Button
                    variant={isCopied ? 'contained' : 'outlined'}
                    sx={{ textTransform: 'capitalize' }}
                >
                    {isCopied ? `Copied!` : `Copy`}
                </Button>
            </CopyToClipboard>
        </Stack>
    )
}
