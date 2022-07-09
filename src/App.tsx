import { CssBaseline, ThemeProvider } from '@mui/material'
import { Header } from 'components'
import { useLogin, useLoadMembers } from 'hooks'
import { useContext } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import {
    Authentication,
    Classes,
    CommandScreen,
    CreateBotScreen,
    Document,
    ExploreBot,
    GeneralInfomation,
    Home,
    ManageBot,
    MessageScreen,
    PermissionPicker,
    QuickStart,
} from 'screens'
import { ColorModeContext } from 'states/context/colorMode'
import { Wrapper } from './styles'
import './styles/fonts.css'
import './styles/reset.css'

function App() {
    const { theme } = useContext(ColorModeContext)

    useLogin()
    useLoadMembers()

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <HashRouter>
                <Wrapper>
                    <Header />
                    <Routes>
                        <Route element={<Authentication />} path="auth" />
                        <Route element={<Document />} path="doc">
                            <Route element={<Classes />} path="classes" />
                            <Route element={<QuickStart />} path="quickstart" />
                        </Route>
                        <Route path="bot">
                            <Route element={<ManageBot />} path="manage">
                                <Route element={<GeneralInfomation />} path="general" />
                                <Route element={<PermissionPicker />} path="permission" />
                                <Route element={<CreateBotScreen />} path="create" />
                                <Route element={<CommandScreen />} path="addCommand" />
                                <Route element={<MessageScreen />} path="message" />
                            </Route>
                            <Route element={<ExploreBot />} path="explore" />
                        </Route>
                        <Route element={<Home />} path="/" />
                    </Routes>
                </Wrapper>
            </HashRouter>
        </ThemeProvider>
    )
}

export default App
