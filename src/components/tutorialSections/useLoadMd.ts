import { useEffect, useState } from 'react'

interface Section {
    title: string
    text: string
}

export const useLoadMdText = (fileNames: string[]) => {
    const [sections, setSections] = useState<Section[]>([])

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const loadMd = async () => {
            setSections([])
            for (const name of fileNames) {
                const module = await import(`./md/${name}.md`)
                const res = await fetch(module.default)
                const text = await res.text()
                setSections((pre) => [...pre, { title: name, text }])
            }
        }
        setLoading(true)
        loadMd()
            .then(() => {})
            .catch((e) => {
                setError(e)
            })
            .finally(() => setLoading(false))
    }, [fileNames])

    return {
        sections,
        error,
        loading,
    }
}
