import { Alert, Box, Grid, Hidden, MenuItem, MenuList, Typography } from '@mui/material'
import { Markdown } from 'components/markdown'
import { useState } from 'react'
import { useScrollToElement } from 'react-use-scroll-to-element-hook'
import { useLoadMdText } from './useLoadMd'
export function Implement() {
    const [curSectionIndex, setCurSectionIndex] = useState(0)
    const { sections, error } = useLoadMdText()
    const { getScrollToElementRef, scrollToElementClickHandler } = useScrollToElement(
        sections.map((s) => s.title)
    )

    if (error) return <Alert severity="error">{error}</Alert>

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={9}>
                <Typography variant="h4" fontWeight="bold">
                    Implement Code with Javascript
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
