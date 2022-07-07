import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { authReducer, botReducer, memberReducer } from './slices'

const rootReducer = combineReducers({
    auth: authReducer,
    bot: botReducer,
    member: memberReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat([]),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
