import { AxiosResponse } from 'axios'
import { BotEntity } from 'entities/bot.entity'
import { CreateBotDto, DeleteBotDto, GenSecretKeyDto, UpdateBotDto } from 'utils/dtos'
import { AxiosClient } from './axios'

export class BotAPI {
    static namespace = 'bot'

    static async create(createBotDto: CreateBotDto) {
        if (createBotDto.avatarUrl === '') {
            delete createBotDto.avatarUrl
        }
        const res = await AxiosClient.post<any, AxiosResponse<BotEntity>>(
            `${BotAPI.namespace}`,
            createBotDto
        )
        return res
    }

    static async update(updateBotDto: UpdateBotDto) {
        const res = await AxiosClient.put<UpdateBotDto, AxiosResponse<BotEntity>>(
            `${BotAPI.namespace}`,
            updateBotDto
        )
        return res
    }

    static async getOne(botId: string) {
        const res = await AxiosClient.get<any, AxiosResponse<BotEntity>>(
            `${BotAPI.namespace}/${botId}`
        )
        return res
    }

    static async getFromAuthor() {
        const res = await AxiosClient.get<any, AxiosResponse<BotEntity[]>>(
            `${BotAPI.namespace}/fromAuthor`
        )
        return res
    }

    static async getAll() {
        const res = await AxiosClient.get<any, AxiosResponse<BotEntity[]>>(
            `${BotAPI.namespace}/all`
        )
        return res
    }

    static async delete(deleteBotDto: DeleteBotDto) {
        const res = await AxiosClient.delete(`${BotAPI.namespace}/${deleteBotDto.botId}`)
        return res
    }

    static async generateNewSecretKey(genKeyDto: GenSecretKeyDto) {
        const res = await AxiosClient.post<GenSecretKeyDto, AxiosResponse<string>>(
            `${BotAPI.namespace}/genSecretKey`,
            genKeyDto
        )
        return res
    }
}
