import { KeyboardArrowDown } from '@mui/icons-material'
import {
    CircularProgress,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    TypographyProps,
} from '@mui/material'
import { ReactNode } from 'react'

interface Props {
    onClick?: () => void
    isLoading?: boolean
    isOpen: boolean
    textPrimary: string
    textSecondary?: string
    startIcon?: ReactNode
    primaryTypographyProps?: TypographyProps
    secondaryTypographyProps?: TypographyProps
}

export function ExpandButton({
    primaryTypographyProps,
    startIcon,
    onClick,
    isLoading,
    isOpen,
    textPrimary,
    textSecondary,
}: Props) {
    return (
        <ListItemButton
            alignItems="flex-start"
            onClick={onClick}
            sx={
                {
                    // px: 3,
                    // pt: 2.5,
                }
            }
        >
            {startIcon && <ListItemAvatar>{startIcon}</ListItemAvatar>}
            <ListItemText
                primary={textPrimary}
                primaryTypographyProps={{ fontWeight: 'bold' }}
                secondary={textSecondary}
                secondaryTypographyProps={{
                    noWrap: true,
                    // fontSize: 14,
                    // lineHeight: '16px',
                    color: isOpen ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.7)',
                }}
                sx={{ my: 0 }}
            />
            {isLoading ? (
                <CircularProgress variant="indeterminate" size="24px" />
            ) : (
                <KeyboardArrowDown
                    sx={{
                        mr: -1,
                        transform: isOpen ? 'rotate(-180deg)' : 'rotate(0)',
                        transition: '0.2s',
                    }}
                />
            )}
        </ListItemButton>
    )
}
