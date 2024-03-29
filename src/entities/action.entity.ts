import { ButtonEntity } from './button.entity'
import { MessageEntity } from './message.entity'
import { ReactEntity } from './react.entity'
import { SelectEntity } from './select.entity'

export interface ActionEntity {
    actionId: string

    reacts: ReactEntity[]

    buttons: ButtonEntity[]

    selects: SelectEntity[]

    message: MessageEntity
}
