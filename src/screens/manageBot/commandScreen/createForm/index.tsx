import { Add } from '@mui/icons-material'
import { Button } from '@mui/material'
import { Popup } from 'components'
import { useState } from 'react'
import { InputForm } from './form'

export function CreateForm() {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <Button
                variant="contained"
                size="small"
                startIcon={<Add />}
                onClick={() => setOpen(true)}
            >
                Add
            </Button>
            <Popup open={isOpen} onClose={() => setOpen(false)}>
                {<InputForm closePopup={() => setOpen(false)} />}
            </Popup>
        </>
    )
}
