import { CssBaseline, ThemeProvider } from '@mui/material'
import { Header, TutorialSections } from 'components'
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
    BotRegister,
    Quickstart,
    Interactions,
} from 'screens'
import { classDescriptionList } from 'screens/document/classes/data'
import { ColorModeContext } from 'states/contexts/colorMode'
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
                            <Route element={<Interactions />} path="Interactions">
                                <Route
                                    element={
                                        <TutorialSections
                                            fileNames={[
                                                'createButton.md',
                                                'eventButton.md',
                                            ]}
                                            header={'How to use buttons'}
                                        />
                                    }
                                    path="buttons"
                                />
                                <Route
                                    element={
                                        <TutorialSections
                                            fileNames={[
                                                'createSelect.md',
                                                'eventSelect.md',
                                            ]}
                                            header={'How to use selects'}
                                        />
                                    }
                                    path="selects"
                                />
                            </Route>
                            <Route element={<Quickstart />} path="quickstart">
                                <Route element={<BotRegister />} path="register" />
                                <Route
                                    element={
                                        <TutorialSections
                                            fileNames={['install.md', 'usage.md']}
                                            header={'Implement with javascript'}
                                        />
                                    }
                                    path="implement"
                                />
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
