import { SelectEntity } from 'entities/select.entity'
import { Grid, MenuItem, Select, Typography } from '@mui/material'
import { useState } from 'react'
import { OptionEntity } from 'entities/option.entity'

interface Props{
    clickSelect: (option: OptionEntity) => void
    select: SelectEntity

}

export function SelectOption({ select,clickSelect }: Props) {
    const [selected,setSelected] = useState<string | undefined>(select.options[0].value)

    return (
        <Grid item>
            <Select
                // value={select.value}
                size="small"
                value={selected}
            >
                {select.options.map((opt) => (
                    <MenuItem
                        key={opt.optionId}
                        value={opt.value}
                        onClick={() => {
                            setSelected(opt.value)
                            clickSelect(opt as OptionEntity)
                        }}

                    >
                        <Typography noWrap>{opt.value}</Typography>
                    </MenuItem>
                ))}
            </Select>
        </Grid>
    )
}
