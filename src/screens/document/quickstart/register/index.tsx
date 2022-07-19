import { Grid, Hidden, MenuItem, MenuList, Stack, Typography } from '@mui/material'
import { useMemo, useState } from 'react'
import { Title } from 'styles'

import * as createBotImage from 'assets/images/createBot.png'
import * as createCommandImage from 'assets/images/createCommand.png'
import * as createPermissionImage from 'assets/images/createPermission.png'
import * as loginImage from 'assets/images/login.png'
import { useScrollToElement } from 'react-use-scroll-to-element-hook'

export function BotRegister() {
    const [curSectionIndex, setCurSectionIndex] = useState(0)
    const sections = useMemo(
        () => [
            {
                title: 'Login',
                content: 'Login is reprequisite for manage the bot',
                image: loginImage.default,
            },
            {
                title: 'Bot',
                content: 'Create your own bot',
                image: createBotImage.default,
            },
            {
                title: "Bot's Command",
                content: 'Create command for your bot',
                image: createCommandImage.default,
            },
            {
                title: 'Permission',
                content: 'Tick permissions which you need',
                image: createPermissionImage.default,
            },
        ],
        []
    )
    const { getScrollToElementRef, scrollToElementClickHandler } = useScrollToElement(
        sections.map((s) => s.title)
    )

    // if (error) return <Alert severity="error">{error}</Alert>

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={9} spacing={4}>
                <Typography variant="h4" fontWeight="bold">
                    Register
                </Typography>
                {sections.map((section, index) => {
                    return (
                        <Stack
                            sx={{ mt: 4 }}
                            ref={getScrollToElementRef(section.title) as any}
                            spacing={2}
                        >
                            <Title>{`${index + 1}. ${section.content}`}</Title>
                            {/* <Link component={RouterLink} to='/auth'>here</Link> */}
                            <img src={section.image} />
                        </Stack>
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
