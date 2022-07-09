import {
    Alert,
    Box,
    Grid,
    Hidden,
    MenuItem,
    MenuList,
    Stack,
    Typography,
} from '@mui/material'
import { Markdown } from 'components/markdown'
import React, { Suspense, useEffect, useState } from 'react'
import { useLoadMdText } from './useLoadMd'
import { useScrollToElement } from 'react-use-scroll-to-element-hook'
export function QuickStart() {
    // const [text, setText] = useState('')
    // const [error, setError] = useState('')

    // useEffect(() => {
    //     import('./quickstart.md')
    //         .then((res) => fetch(res.default))
    //         .then((res) => res.text())
    //         .then((t) => setText(t))
    //         .catch((e) => setError('Can not load file'))
    // }, [])
    const [curSectionIndex, setCurSectionIndex] = useState(0)
    const { sections, error } = useLoadMdText('./quickstart.md')
    const { getScrollToElementRef, scrollToElementClickHandler } = useScrollToElement(
        sections.map((s) => s.title)
    )

    if (error) return <Alert severity="error">{error}</Alert>

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={9}>
                <Typography variant="h4" fontWeight="bold">
                    Quick Start
                </Typography>
                {sections.map((section, index) => {
                    return (
                        <Box
                            sx={{ mb: 8 }}
                            key={index}
                            ref={getScrollToElementRef(section.title) as any}
                        >
                            <Markdown text={section.text} />
                        </Box>
                    )
                })}
            </Grid>

            <Hidden mdDown>
                <Grid item md={3}>
                    <MenuList sx={{ position: 'fixed', height: '100vh', width: 250 }}>
                        <Typography>Content</Typography>
                        {sections.map((ele, index) => {
                            return (
                                <MenuItem
                                    selected={index === curSectionIndex}
                                    key={index}
                                    onClick={() => {
                                        scrollToElementClickHandler(ele.title)
                                        setCurSectionIndex(index)
                                    }}
                                >
                                    <Typography variant="body2" color="text.secondary">
                                        {ele.title}
                                    </Typography>
                                </MenuItem>
                            )
                        })}
                    </MenuList>
                </Grid>
            </Hidden>
        </Grid>
    )
}
