import { InputLabel } from '@mui/material'
import { ChangeEvent } from 'react'
import { uid } from 'uid'
interface IProps {
    children: JSX.Element
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    name: string
}

export function InputImage({ name, onChange, children }: IProps) {
    const id = uid()
    return (
        <InputLabel htmlFor={id} sx={{ color: 'primary.main', cursor: 'pointer' }}>
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
