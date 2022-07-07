import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { store } from 'states/store'
import { ColorMode } from 'states/context/colorMode'
import { SocketProvider } from 'states/context/socket'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const queryClient = new QueryClient()

root.render(
    <React.StrictMode>
        <SocketProvider>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <ColorMode>
                        <App />
                    </ColorMode>
                </QueryClientProvider>
            </Provider>
        </SocketProvider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
