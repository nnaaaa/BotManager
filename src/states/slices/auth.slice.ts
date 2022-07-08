import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthAPI, UserAPI } from 'apis/rest'
import { BotEntity } from 'entities/bot.entity'
import { UserEntity } from 'entities/user.entity'
import { LoginDto } from 'screens/authenticate/login/dtos/local.dto'
import { UpdateBotDto } from 'utils/dtos'

interface IinitState {
    isLoading: boolean
    errors: any
    profile: UserEntity | null
}

const initialState: IinitState = {
    isLoading: false,
    errors: null,
    profile: null,
}
const loginAsync = createAsyncThunk('auth/login', async (loginDto: LoginDto) => {
    try {
        await AuthAPI.login(loginDto)
    } catch (e) {
        console.error(e)
    }
})

const getProfile = createAsyncThunk('auth/getProfile', async () => {
    try {
        const res = await UserAPI.getProfile()

        return res.data
    } catch (e) {
        console.error(e)
    }
})

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
        // login: (state, ) => {
        //     state.profile = action.payload
        // },
        logout: (state) => {
            state.errors = null
            state.profile = null
        },
        addBot: (state, action: PayloadAction<BotEntity>) => {
            if (state.profile) state.profile.createdBots.unshift(action.payload)
        },
        updateBot: (state, action: PayloadAction<UpdateBotDto>) => {
            if (state.profile) {
                state.profile.createdBots = state.profile.createdBots.map((bot) => {
                    if (bot.botId === action.payload.botId) {
                        return { ...bot, ...action.payload }
                    }
                    return bot
                })
            }
        },
        removeBot: (state, action: PayloadAction<BotEntity>) => {
            if (state.profile)
                state.profile.createdBots = state.profile.createdBots.filter(
                    (bot) => bot.botId !== action.payload.botId
                )
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAsync.pending, (state) => {
                state.isLoading = true
            })
            .addCase(loginAsync.rejected, (state) => {
                state.isLoading = false
                state.errors = 'Fail to login'
            })
            .addCase(loginAsync.fulfilled, (state) => {
                state.isLoading = false
            })

            .addCase(getProfile.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getProfile.rejected, (state) => {
                state.isLoading = false
                state.errors = 'Fail to get user profile'
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.isLoading = false
                state.profile = action.payload
            })
        // .addCase(registerAsync.pending, (state) => {
        //     state.loading = true
        // })
        // .addCase(registerAsync.rejected, (state) => {
        //     state.loading = false
        //     state.error = 'Fail to register'
        // })
        // .addCase(registerAsync.fulfilled, (state) => {
        //     state.loading = false
        // })
    },
})

export const { actions: authActionsDefault, reducer: authReducer } = authSlice
export const authActions = Object.assign(authActionsDefault, {
    loginAsync,
    getProfile,
})
