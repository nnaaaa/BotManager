import { CssBaseline, ThemeProvider } from '@mui/material'
import { Header } from 'components'
import { useLoadMembers, useLogin } from 'hooks'
import { useContext } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import {
    Authentication,
    ClassDescriptionScreen,
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
    Implement,
    BotRegister,
    Quickstart,
} from 'screens'
import { classDescriptionList } from 'screens/document/classes/data'
import { ColorModeContext } from 'states/context/colorMode'
import { Wrapper } from './app.styles'
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
                            <Route element={<Classes />} path="classes">
                                {classDescriptionList.map((classDescription) => (
                                    <Route
                                        key={classDescription.name}
                                        element={
                                            <ClassDescriptionScreen
                                                description={classDescription}
                                            />
                                        }
                                        path={classDescription.name}
                                    />
                                ))}
                            </Route>
                            <Route element={<Quickstart />} path="quickstart">
                                <Route element={<BotRegister />} path="register" />
                                <Route element={<Implement />} path="implement" />
                            </Route>
                        </Route>
                        <Route path="bot">
                            <Route element={<ManageBot />} path="manage">
                                <Route element={<GeneralInfomation />} path="general" />
                                <Route element={<PermissionPicker />} path="permission" />
                                <Route element={<CreateBotScreen />} path="create" />
                                <Route element={<CommandScreen />} path="command" />
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
