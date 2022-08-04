import { InputLabel } from '@mui/material'
import { ChangeEvent } from 'react'
import { uid } from 'uid'
interface IProps {
    children: JSX.Element
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    name: string
    isDisabled?: boolean
}

export function InputImage({ name, onChange, isDisabled, children }: IProps) {
    const id = uid()
    return (
        <InputLabel
            htmlFor={isDisabled ? '' : id}
            sx={{ color: 'primary.main' }}
            disabled={isDisabled}
        >
            <input
                name={name}
                accept="image/*"
                type="file"
                alt="image"
                style={{ display: 'none' }}
                id={id}
                onChange={onChange}
            />
            {children}
        </InputLabel>
    )
}
