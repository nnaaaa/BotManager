import { Dialog, Paper, PaperProps } from '@mui/material'
import { ReactNode } from 'react'
import Draggable from 'react-draggable'

interface IProps {
    open: boolean
    onClose: () => void
    children: ReactNode
}

function PaperComponent(props: PaperProps) {
    return <Draggable children={<Paper {...props} />} />
}

export const Popup = (props: IProps) => {
    const { open, children, onClose } = props
    return (
        <Dialog
            open={open}
            onClose={onClose}
            PaperProps={{ sx: { boxShadow: 'none', minWidth: 400, maxWidth: 500 } }}
            PaperComponent={PaperComponent}
        >
            {children}
        </Dialog>
    )
}
