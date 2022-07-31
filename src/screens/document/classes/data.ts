import { BotInputMessage } from './class/botInputMessage'
import { ChannelEntity } from './class/channelEntity'
import { ChannelService } from './class/channelService'
import { Client } from './class/client'
import { InspectedCommand } from './class/inspectedCommand'
import { MarkdownBuilder } from './class/markdownBuilder'
import { MessageEntity } from './class/messageEntity'
import { MessageService } from './class/messageService'
import { ClassDescription } from './class/type'

export const classDescriptionList: ClassDescription[] = [
    Client,
    ChannelService,
    MessageService,
    MessageEntity,
    ChannelEntity,
    MarkdownBuilder,
    InspectedCommand,
    BotInputMessage,
]

// export * from './type'
