import { ActionEntity } from './class/actionEntity'
import { BotInputMessage } from './class/botInputMessage'
import { ButtonEntity } from './class/buttonEntity'
import { ButtonStyle } from './class/buttonStyle'
import { ChannelEntity } from './class/channelEntity'
import { ChannelService } from './class/channelService'
import { Client } from './class/client'
import { InspectedCommand } from './class/inspectedCommand'
import { MarkdownBuilder } from './class/markdownBuilder'
import { MessageAction } from './class/messageAction'
import { MessageButton } from './class/messageButton'
import { MessageEntity } from './class/messageEntity'
import { MessageSelect } from './class/messageSelect'
import { MessageSelectOption } from './class/messageSelectOption'
import { MessageService } from './class/messageService'
import { OptionEntity } from './class/optionEntity'
import { ReactEntity } from './class/reactEntity'
import { SelectEntity } from './class/selectEntity'
import { SelectStyle } from './class/selectStyle'
import { ClassDescription } from './class/type'

export const classDescriptionList: ClassDescription[] = [
    Client,
    ChannelService,
    MessageService,
    MessageAction,
    MessageButton,
    MessageSelect,
    MessageSelectOption,

    MarkdownBuilder,
    InspectedCommand,
    ButtonStyle,
    SelectStyle,
    BotInputMessage,

    ChannelEntity,
    MessageEntity,
    ActionEntity,
    ButtonEntity,
    SelectEntity,
    ReactEntity,
    OptionEntity,
]
