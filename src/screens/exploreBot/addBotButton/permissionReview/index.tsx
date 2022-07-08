import {
    Box,
    Checkbox,
    FormControlLabel,
    FormGroup,
    Grid,
    List,
    ListItemButton,
} from '@mui/material'
import { BotEntity } from 'entities/bot.entity'
import { Permission } from 'entities/role.entity'

interface Props {
    bot: BotEntity
}

export function PermissionReview({ bot }: Props) {
    return (
        <FormGroup>
            {bot.requiredPermissions.map((permission: Permission) => {
                const formatPermission = permission.split('_').join(' ').toLowerCase()
                return (
                    <FormControlLabel
                        key={permission}
                        control={
                            <Checkbox checked={true} disabled={true} color="default" />
                        }
                        label={
                            formatPermission[0].toUpperCase() +
                            formatPermission.substring(1)
                        }
                    />
                )
            })}
        </FormGroup>
    )
}
