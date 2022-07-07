import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { BotAPI, CommandAPI } from 'apis'
import { BotEntity } from 'entities/bot.entity'
import {
    CreateCommandDto,
    CreateBotDto,
    DeleteBotDto,
    GenSecretKeyDto,
    UpdateBotDto,
} from 'screens/manageBot/dtos'
import { UpdateCommandDto } from 'screens/manageBot/dtos/updateCommand.dto'

interface IinitState {
    isLoading: boolean
    errors: any
    profile: BotEntity | null | undefined
    yourBots: BotEntity[]
    globalBots: BotEntity[]
}

const initialState: IinitState = {
    isLoading: false,
    errors: null,
    profile: null,
    yourBots: [],
    globalBots: [],
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
const getAll = createAsyncThunk('bot/getAll', async () => {
    const res = await BotAPI.getAll()
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

const addCommand = createAsyncThunk(
    'bot/addCommand',
    async (commandDto: CreateCommandDto) => {
        const res = await CommandAPI.add(commandDto)
        return res.data
    }
)

const updateCommand = createAsyncThunk(
    'bot/updateCommand',
    async (commandDto: UpdateCommandDto) => {
        const res = await CommandAPI.update(commandDto)
        return res.data
    }
)

const deleteCommand = createAsyncThunk('bot/deleteCommand', async (commandId: string) => {
    const res = await CommandAPI.delete(commandId)

    return commandId
})

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

            .addCase(getAll.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getAll.rejected, (state) => {
                state.isLoading = false
                state.errors = 'Fail to Get Global Bots'
            })
            .addCase(getAll.fulfilled, (state, action) => {
                state.isLoading = false
                state.globalBots = action.payload
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

            .addCase(addCommand.pending, (state) => {
                state.isLoading = true
            })
            .addCase(addCommand.rejected, (state) => {
                state.isLoading = false
                state.errors = 'Fail to Add Command'
            })
            .addCase(addCommand.fulfilled, (state, action) => {
                state.isLoading = false
                if (state.profile) {
                    state.profile.commands.unshift(action.payload)
                    state.yourBots = state.yourBots.map((bot) =>
                        bot.botId === state.profile?.botId
                            ? { ...bot, commands: [action.payload, ...bot.commands] }
                            : bot
                    )
                }
            })

            .addCase(updateCommand.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateCommand.rejected, (state) => {
                state.isLoading = false
                state.errors = 'Fail to Update Command'
            })
            .addCase(updateCommand.fulfilled, (state, action) => {
                state.isLoading = false
                if (state.profile) {
                    state.profile.commands = state.profile.commands.map((command) =>
                        command.commandId === action.payload.commandId
                            ? action.payload
                            : command
                    )
                    state.yourBots = state.yourBots.map((bot) =>
                        bot.botId === state.profile?.botId
                            ? {
                                  ...bot,
                                  commands: bot.commands.map((c) =>
                                      c.commandId === action.payload.commandId
                                          ? action.payload
                                          : c
                                  ),
                              }
                            : bot
                    )
                }
            })

            .addCase(deleteCommand.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteCommand.rejected, (state) => {
                state.isLoading = false
                state.errors = 'Fail to Delete Command'
            })
            .addCase(deleteCommand.fulfilled, (state, action) => {
                state.isLoading = false
                if (state.profile) {
                    state.profile.commands = state.profile.commands.filter(
                        (command) => command.commandId !== action.payload
                    )
                    state.yourBots = state.yourBots.map((bot) =>
                        bot.botId === state.profile?.botId
                            ? {
                                  ...bot,
                                  commands: bot.commands.filter(
                                      (c) => c.commandId === action.payload
                                  ),
                              }
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
    getAll,
    addCommand,
    updateCommand,
    deleteCommand,
})
