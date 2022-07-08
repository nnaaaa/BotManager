import { Dialog, Fade } from '@mui/material'
import React, { ReactNode } from 'react'
import { Opacity, Wrapper } from './styles'

interface IProps {
    open: boolean
    onClose: () => void
    children: ReactNode
}

export const Popup: React.FC<IProps> = (props) => {
    const { open, children, onClose } = props
    return (
        <Dialog
            open={open}
            onClose={onClose}
            PaperProps={{ sx: { boxShadow: 'none', minWidth: 400, maxWidth: 500 } }}
        >
            {children}
        </Dialog>
        // <Fade in={open}>
        //     <Opacity onClick={onClose}>
        //         <Wrapper display="block" onClick={(e) => e.stopPropagation()}>
        //             {open && children}
        //         </Wrapper>
        //     </Opacity>
        // </Fade>
    )
}
