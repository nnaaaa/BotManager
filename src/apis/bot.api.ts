import { AxiosResponse } from 'axios'
import { BotEntity } from 'entities/bot.entity'
import { CreateBotDto } from 'screens/manageBot/dtos'
import { AxiosClient } from './axios'

export class BotAPI {
    static namespace = 'bot'

    static async create(createBotDto: CreateBotDto) {
        const res = await AxiosClient.post<any,AxiosResponse<BotEntity>>(`${BotAPI.namespace}`, createBotDto)
        return res
    }
}
