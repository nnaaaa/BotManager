import { AxiosResponse } from 'axios'
import { CommandEntity } from 'entities/command.entity'
import { CreateCommandDto } from 'screens/manageBot/dtos'
import { UpdateCommandDto } from 'screens/manageBot/dtos/updateCommand.dto'
import { AxiosClient } from './axios'

export class CommandAPI {
    static namespace = 'command'

    static async add(createCommandDto: CreateCommandDto) {
        const res = await AxiosClient.post<
            CreateCommandDto,
            AxiosResponse<CommandEntity>
        >(`${CommandAPI.namespace}/${createCommandDto.botId}`, createCommandDto)
        return res
    }

    static async update(updateCommandDto: UpdateCommandDto) {
        const res = await AxiosClient.put<CreateCommandDto, AxiosResponse<CommandEntity>>(
            `${CommandAPI.namespace}/${updateCommandDto.commandId}`,
            updateCommandDto
        )
        return res
    }

    static async delete(commandId: string) {
        const res = await AxiosClient.delete(`${CommandAPI.namespace}/${commandId}`)
        return res
    }
}
