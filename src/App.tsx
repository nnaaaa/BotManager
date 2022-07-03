import { CssBaseline, ThemeProvider } from '@mui/material'
import { useLogin } from 'hooks'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Authentication from 'screens/authenticate'
import Home from 'screens/home'
import Header from 'screens/home/header'
import GlobalStyles, { theme } from 'styles/global'

function App() {
    useLogin()

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles />
            <HashRouter>
                <Header />
                <Routes>
                    <Route element={<Authentication />} path="auth" />
                    <Route element={<Home />} path="/" />
                </Routes>
            </HashRouter>
        </ThemeProvider>
    )
}

export default App
