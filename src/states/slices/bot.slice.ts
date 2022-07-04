
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AuthAPI, BotAPI, UserAPI } from 'apis'
import { BotEntity } from 'entities/bot.entity'
import { UserEntity } from 'entities/user.entity'
import { LoginDto } from 'screens/authenticate/login/dtos/local.dto'
import { CreateBotDto } from 'screens/manageBot/dtos'

interface IinitState {
    isLoading: boolean
    errors: any
    profile: BotEntity | null | undefined
}

const initialState: IinitState = {
    isLoading: false,
    errors: null,
    profile: null,
}

const createBot = createAsyncThunk('bot/create', async (createBotDto: CreateBotDto, thunk) => {

    const res = await BotAPI.create(createBotDto)

    return res.data

})


const botSlice = createSlice({
    name: 'bot',
    initialState,
    reducers: {
        setBot: (state, action: PayloadAction<BotEntity>) => {
            state.profile = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createBot.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createBot.rejected, (state) => {
                state.isLoading = false
                state.errors = 'Fail to Create Bot'
            })
            .addCase(createBot.fulfilled, (state, action) => {
                state.isLoading = false
                state.profile = action.payload
            })
    }

})

export const { actions: botActionsDefault, reducer: botReducer } = botSlice

export const botActions = Object.assign(botActionsDefault, {
    createBot
})
