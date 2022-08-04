import { CssBaseline, ThemeProvider } from '@mui/material'
import { Header, TutorialSections } from 'components'
import { useLoadMembers, useLogin } from 'hooks'
import { useContext } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import {
    Authentication, BotRegister, ClassDescriptionScreen,
    Classes,
    CommandScreen,
    CreateBotScreen,
    Document,
    ExploreBot,
    GeneralInfomation,
    Home, Interactions, ManageBot,
    MessageScreen,
    PermissionPicker, Quickstart
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
                            <Route element={<Quickstart />} path="quickstart">
                                <Route element={<BotRegister />} path="register" />
                                <Route
                                    element={
                                        <TutorialSections
                                            fileNames={['install', 'usage']}
                                            header={'Implement with javascript'}
                                        />
                                    }
                                    path="implement"
                                />
                            </Route>
                            <Route element={<Interactions />} path="interactions">
                                <Route
                                    element={
                                        <TutorialSections
                                            fileNames={[
                                                'createButton',
                                                'eventButton',
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
                                                'createSelect',
                                                'eventSelect',
                                            ]}
                                            header={'How to use selects'}
                                        />
                                    }
                                    path="selects"
                                />
                            </Route>
                            <Route
                                element={
                                    <TutorialSections
                                        fileNames={[
                                            'markdownBasicStyle',
                                            'markdownAdvancedStyle'
                                        ]}
                                        header={'Use markdown in message'}
                                    />
                                }
                                path="markdown"
                            />
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
