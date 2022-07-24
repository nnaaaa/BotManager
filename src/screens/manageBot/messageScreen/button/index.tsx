import { Button, Grid } from '@mui/material'
import { ButtonEntity } from 'entities/button.entity'

interface Props {
    buttons: ButtonEntity[]
    clickButton: (button: ButtonEntity) => Promise<void>
}

export function MessageButtons({ buttons, clickButton }: Props) {
    return (
        <>
            {buttons.map((b) => (
                <Grid item>
                    <Button
                        key={b.buttonId}
                        variant="contained"
                        size="small"
                        sx={{ textTransform: 'initial' }}
                        onClick={() => clickButton(b)}
                        color={b.style}
                        disabled={b.isDisabled}
                    >
                        {b.name}
                    </Button>
                </Grid>
            ))}
        </>
    )
}
