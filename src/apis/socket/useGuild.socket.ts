import { GuildEntity } from "entities"
import { useContext } from "react"
import { SocketContext } from "states/contexts/socket"


export const useGuildSocket = () => {
    const { guildSocket } = useContext(SocketContext)

    const getOne = async (guildId:string) => {
        if (!guildSocket) return
        return await new Promise<GuildEntity>((resolve) => {
            guildSocket.emit('getOne',guildId,  (data: GuildEntity) => resolve(data))
        })
    }


    return { getOne }
}