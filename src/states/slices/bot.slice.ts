import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BotAPI } from 'apis'
import { BotEntity } from 'entities/bot.entity'
import {
    CreateBotDto,
    DeleteBotDto,
    GenSecretKeyDto,
    UpdateBotDto,
} from 'screens/manageBot/dtos'

interface IinitState {
    isLoading: boolean
    errors: any
    profile: BotEntity | null | undefined
    yourBots: BotEntity[]
}

const initialState: IinitState = {
    isLoading: false,
    errors: null,
    profile: null,
    yourBots: [],
}

const createBot = createAsyncThunk('bot/create', async (createBotDto: CreateBotDto) => {
    const res = await BotAPI.create(createBotDto)
    return res.data
})
const updateBot = createAsyncThunk('bot/update', async (updateBotDto: UpdateBotDto) => {
    const res = await BotAPI.update(updateBotDto)
    return res.data
})
const getFromAuthor = createAsyncThunk('bot/getFromAuthor', async () => {
    const res = await BotAPI.getFromAuthor()
    return res.data
})

const generateNewSecretKey = createAsyncThunk(
    'bot/generateNewSecretKey',
    async (genKeyDto: GenSecretKeyDto) => {
        const res = await BotAPI.generateNewSecretKey(genKeyDto)
        return res.data
    }
)

const deleteBot = createAsyncThunk(
    'bot/deleteOne',
    async (deleteBotDto: DeleteBotDto) => {
        const res = await BotAPI.delete(deleteBotDto)
        return deleteBotDto
    }
)

const botSlice = createSlice({
    name: 'bot',
    initialState,
    reducers: {
        setBot: (state, action: PayloadAction<BotEntity>) => {
            state.profile = action.payload
        },
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
                state.yourBots.unshift(action.payload)
            })
            .addCase(updateBot.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateBot.rejected, (state) => {
                state.isLoading = false
                state.errors = 'Fail to Update Bot'
            })
            .addCase(updateBot.fulfilled, (state, action) => {
                state.isLoading = false
                state.profile = action.payload
                state.yourBots = state.yourBots.map((bot) => {
                    if (bot.botId === action.payload.botId) {
                        return action.payload
                    }
                    return bot
                })
            })
            .addCase(getFromAuthor.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getFromAuthor.rejected, (state) => {
                state.isLoading = false
                state.errors = 'Fail to Get Your Bots'
            })
            .addCase(getFromAuthor.fulfilled, (state, action) => {
                state.isLoading = false
                state.yourBots = action.payload
            })
            .addCase(deleteBot.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteBot.rejected, (state) => {
                state.isLoading = false
                state.errors = 'Fail to Get Your Bots'
            })
            .addCase(deleteBot.fulfilled, (state, action) => {
                state.isLoading = false
                state.yourBots = state.yourBots.filter(
                    (bot) => bot.botId !== action.payload.botId
                )
                state.profile = null
            })
            .addCase(generateNewSecretKey.pending, (state) => {
                state.isLoading = true
            })
            .addCase(generateNewSecretKey.rejected, (state) => {
                state.isLoading = false
                state.errors = 'Fail to Generate Secret Key'
            })
            .addCase(generateNewSecretKey.fulfilled, (state, action) => {
                state.isLoading = false
                if (state.profile) {
                    state.profile.secretKey = action.payload
                    state.yourBots = state.yourBots.map((bot) =>
                        bot.botId === state.profile?.botId
                            ? { ...bot, secretKey: action.payload }
                            : bot
                    )
                }
            })
    },
})

export const { actions: botActionsDefault, reducer: botReducer } = botSlice

export const botActions = Object.assign(botActionsDefault, {
    createBot,
    updateBot,
    getFromAuthor,
    generateNewSecretKey,
    deleteBot,
})
