import { ChannelEntity } from './class/channelEntity'
import { Client } from './class/client'
import { MessageEntity } from './class/messageEntity'
import { MessageService } from './class/messageService'
import { ClassDescription } from './class/type'

export const classDescriptionList: ClassDescription[] = [
    Client,
    MessageService,
    MessageEntity,
    ChannelEntity,
]

// export * from './type'
