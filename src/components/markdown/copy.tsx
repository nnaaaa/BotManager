import { ContentCopyOutlined } from '@mui/icons-material'
import { Button } from '@mui/material'
import { Box } from '@mui/system'
import { ReactNode, useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
    dracula
} from 'react-syntax-highlighter/dist/esm/styles/prism'

interface Props {
    children: ReactNode | ReactNode[]
    language: string
    props: any
}

export function CodeCopy({ children, language, props }: Props) {
    const [isCopied, setCopy] = useState(false)

    return (
        <Box position="relative">
            <CopyToClipboard
                text={String(children).replace(/\n$/, '')}
                onCopy={() => setCopy(true)}
            >
                <Button
                    sx={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        textTransform: 'capitalize',
                    }}
                    variant={isCopied ? 'contained' : 'outlined'}
                    startIcon={<ContentCopyOutlined />}
                >
                    {isCopied ? `Copied!` : `Copy`}
                </Button>
            </CopyToClipboard>
            <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                wrapLongLines
                style={dracula as any}
                language={language}
                PreTag="div"
                {...props}
            />
        </Box>
    )
}
