import { CssBaseline, ThemeProvider, useTheme } from '@mui/material'
import { Header } from 'components'
import { useLogin } from 'hooks'
import { useContext } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Authentication, Document, Home, ManageBot } from 'screens'
import { CreateBot } from 'screens/manageBot/createBot'
import { GeneralInfomation } from 'screens/manageBot/general'
import { PermissionScreen } from 'screens/manageBot/permission'
import { ColorModeContext } from 'states/context/colorMode'
import { Wrapper } from 'styles'
import GlobalStyles from 'styles/global'

function App() {
    const { theme } = useContext(ColorModeContext)

    useLogin()

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
                        <Route element={<ManageBot />} path="bot">
                            <Route element={<GeneralInfomation />} path="general" />
                            <Route element={<PermissionScreen />} path="permission" />
                            <Route element={<CreateBot />} path="create" />
                        </Route>
                        <Route element={<Home />} path="/" />
                    </Routes>
                </Wrapper>
            </HashRouter>
        </ThemeProvider>
    )
}

export default App
