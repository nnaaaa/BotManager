import { CssBaseline, ThemeProvider } from "@mui/material";
import { HashRouter, Route, Routes } from "react-router-dom";
import GlobalStyles, { theme } from "styles/global";
import Authentication from 'screens/authenticate'
import Home from 'screens/home'
import { useQuery } from "react-query";
import { UserAPI } from "apis";
import { useAppDispatch } from "states/hooks";
import { authActions } from "states/slices";

function App() { 
  const dispatch = useAppDispatch()
  const { isLoading } = useQuery('getProfile', UserAPI.getProfile, {
    onSuccess: (res) => {
      dispatch(authActions.login(res.data))
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles />
      <HashRouter>
        <Routes>
          <Route element={<Authentication/>} path="auth" />
          <Route element={<Home/>} path="/"/>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
