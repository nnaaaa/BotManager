import { Fade } from '@mui/material'
import React, { ReactNode } from 'react'
import { Opacity, Wrapper } from './styles'

interface IProps {
    open: boolean
    onClose: () => void
    children: JSX.Element
}

export const Popup: React.FC<IProps> = (props) => {
    const { open, children, onClose } = props
    return (
        <Fade in={open}>
            <Opacity onClick={onClose}>
                <Wrapper display="block" onClick={(e) => e.stopPropagation()}>
                    {open && children}
                </Wrapper>
            </Opacity>
        </Fade>
    )
}
