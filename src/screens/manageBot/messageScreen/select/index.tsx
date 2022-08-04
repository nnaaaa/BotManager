import { OptionEntity } from 'entities/option.entity'
import { SelectEntity } from 'entities/select.entity'
import { SelectOption } from './select'

interface Props {
    selects: SelectEntity[]
    clickSelect: (option: OptionEntity) => void
}

export function MessageSelect({ selects, clickSelect }: Props) {
    return (
        <>
            {selects.map((select) => (
                <SelectOption select={select} clickSelect={clickSelect} />
            ))}
        </>
    )
}
