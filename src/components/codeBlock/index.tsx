import ReactMarkdown from 'react-markdown'
import { CodeCopy } from './copy'

interface Props {
    text: string
}

export function CodeBlock({ text }: Props) {
    return (
        <ReactMarkdown
            children={text}
            components={{
                code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                        <CodeCopy language={match[1]} children={children} props={props} />
                    ) : (
                        <code className={className} {...props}>
                            {children}
                        </code>
                    )
                },
            }}
        />
    )
}
