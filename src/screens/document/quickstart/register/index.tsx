import { Grid, Hidden, Link, MenuList, Stack, Typography } from '@mui/material'
import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { Title } from 'styles'
export function BotRegister() {
    const [curSectionIndex, setCurSectionIndex] = useState(0)
    // const { getScrollToElementRef, scrollToElementClickHandler } = useScrollToElement(
    //     sections.map((s) => s.title)
    // )

    // if (error) return <Alert severity="error">{error}</Alert>

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={9} spacing={4}>
                <Typography variant="h4" fontWeight="bold">
                    Register
                </Typography>
                {/* {sections.map((section, index) => {
                    return (
                        <Box
                            sx={{ mb: 8 }}
                            key={index}
                            ref={getScrollToElementRef(section.title) as any}
                        >
                            <Markdown text={section.text} />
                        </Box>
                    )
                })} */}

                <Stack sx={{ mt:4 }}>
                    <Title>1. Login</Title>
                    <Link component={RouterLink} to='/auth'>here</Link>
                </Stack>

                <Stack sx={{ mt:4 }}>
                    <Title>2. Register bot</Title>
                    <Link component={RouterLink} to='/bot/manage/create'>here</Link>
                </Stack>

                <Stack sx={{ mt:4 }}>
                    <Title>3. Create bot's commands</Title>
                    <Link component={RouterLink} to='/bot/manage/command'>here</Link>
                </Stack>

                <Stack sx={{ mt:4 }}>
                    <Title>4. Tick permissions which you need</Title>
                    <Link component={RouterLink} to='/bot/manage/permission'>here</Link>
                </Stack>
            </Grid>

            <Hidden mdDown>
                <Grid item md={3}>
                    <MenuList sx={{ position: 'fixed', height: '100vh', width: 250 }}>
                        <Typography>Content</Typography>
                        {/* {sections.map((ele, index) => {
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
                        })} */}
                    </MenuList>
                </Grid>
            </Hidden>
        </Grid>
    )
}
