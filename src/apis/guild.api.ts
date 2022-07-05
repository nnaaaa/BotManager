import { AxiosResponse } from 'axios'
import { GuildEntity } from 'entities/guild.entity'
import { MemberEntity } from 'entities/member.entity'
import { AxiosClient } from './axios'

export class GuildAPI {
    static namespace = 'guild'

    static async getJoined() {
        const res = await AxiosClient.get<any, AxiosResponse<MemberEntity[]>>(
            `${GuildAPI.namespace}/getJoined`
        )
        return res.data
    }
}
