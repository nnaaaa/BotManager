import { CssBaseline, ThemeProvider, useTheme } from '@mui/material'
import { Header } from 'components'
import { useLogin } from 'hooks'
import { useLoadMembers } from 'hooks/useLoadMembers'
import { useContext } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import {
    CommandScreen,
    Authentication,
    CreateBotScreen,
    Document,
    ExploreBot,
    GeneralInfomation,
    Home,
    ManageBot,
    PermissionPicker,
} from 'screens'
import { ColorModeContext } from 'states/context/colorMode'
import { Wrapper } from 'styles'
import GlobalStyles from 'styles/global'

function App() {
    const { theme } = useContext(ColorModeContext)

    useLogin()
    useLoadMembers()

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles />
            <HashRouter>
                <Wrapper>
                    <Header />
                    <Routes>
                        <Route element={<Authentication />} path="auth" />
                        <Route element={<Document />} path="doc" />
                        <Route path="bot">
                            <Route element={<ManageBot />} path="manage">
                                <Route element={<GeneralInfomation />} path="general" />
                                <Route element={<PermissionPicker />} path="permission" />
                                <Route element={<CreateBotScreen />} path="create" />
                                <Route element={<CommandScreen />} path="addCommand" />
                            </Route>
                            <Route element={<ExploreBot />} path="explore"></Route>
                        </Route>
                        <Route element={<Home />} path="/" />
                    </Routes>
                </Wrapper>
            </HashRouter>
        </ThemeProvider>
    )
}

export default App
