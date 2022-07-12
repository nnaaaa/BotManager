import { BotInputMessage } from './class/botInputMessage';
import { ChannelEntity } from './class/channelEntity'
import { Client } from './class/client'
import { InspectedCommand } from './class/inspectedCommand'
import { MessageEntity } from './class/messageEntity'
import { MessageService } from './class/messageService'
import { ClassDescription } from './class/type'

export const classDescriptionList: ClassDescription[] = [
    Client,
    MessageService,
    MessageEntity,
    ChannelEntity,
    InspectedCommand,
    BotInputMessage
]

// export * from './type'
