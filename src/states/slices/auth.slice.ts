import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserEntity } from 'entities/user.entity'


interface IinitState {
    profile: UserEntity | null
}

const initialState: IinitState = {
    profile: null
}

// const loginAsync = createAsyncThunk('auth/login', async (credential: SignInType) => {
//     const res = await authAPI.postLogin(credential)

//     if (res.data.refreshToken) {
//         Cookie.set('refreshToken', res.data.refreshToken)
//     }

//     if (res.data.accessToken) {
//         Cookie.set('accessToken', res.data.accessToken)
//         await userAPI.updateProfile({ isOnline: true })
//     } else throw new Error()
// })

// const registerAsync = createAsyncThunk(
//     'auth/register',
//     async (userInfo: Partial<IUser>) => {
//         try {
//             const res = await authAPI.postRegister(userInfo)
//             console.log(res)
//         } catch (e) {
//             console.log(e)
//         }
//     }
// )

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state,action: PayloadAction<UserEntity>) => {
            state.profile = action.payload
        },
        logout: (state) => {
            state.profile = null
        },
    },
})

export const { actions: authActions, reducer: authReducer } = authSlice