import { useEffect, useState } from 'react'

export const useLoadMdText = (path: string) => {
    const [installText, setInstallText] = useState('')
    const [usageText, setUsageText] = useState('')
    const [error, setError] = useState('')

    useEffect(() => {
        import('./md/install.md')
            .then((res) => fetch(res.default))
            .then((res) => res.text())
            .then((t) => setInstallText(t))
            .catch((e) => setError('Can not load file'))
        import('./md/usage.md')
            .then((res) => fetch(res.default))
            .then((res) => res.text())
            .then((t) => setUsageText(t))
            .catch((e) => setError('Can not load file'))
    }, [path])

    return {
        sections: [
            {
                title: 'Install',
                text: installText,
            },
            {
                title: 'Usage',
                text: usageText,
            },
        ],
        error,
    }
}
