import { Avatar, Button, Grid } from '@mui/material'
import { ReactEntity } from 'entities'

interface Props {
    reacts: ReactEntity[]
    clickReact: (react: ReactEntity) => Promise<void>
}

export function MessageReacts({ reacts, clickReact }: Props) {
    return (
        <>
            {reacts.map((r) => (
                <Grid item>
                    <Button
                        disabled={true}
                        size="small"
                        variant="outlined"
                        onClick={() => clickReact(r)}
                        startIcon={
                            <Avatar
                                src={r.emoji.imageUrl}
                                sx={{ width: 14, height: 14 }}
                            />
                        }
                    >
                        1
                    </Button>
                </Grid>
            ))}
        </>
    )
}
