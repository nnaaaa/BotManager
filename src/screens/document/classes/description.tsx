import { Grid, Link, ListItem, Stack, Typography } from '@mui/material'
import { ExpandButton } from 'components'
import { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { ArrayProps } from './arrayProp'
import { ClassDescription } from './class/type'

interface Props {
    description: ClassDescription
}

export function ClassDescriptionScreen({ description }: Props) {
    const [isOpenProps, setOpenProps] = useState(true)
    const [isOpenMethods, setOpenMethods] = useState(true)

    return (
        <Stack spacing={2}>
            <Stack>
                <Typography variant="h4" gutterBottom fontWeight="bold">
                    {description.name}
                </Typography>
                <Typography variant="h6" color="text.disabled">
                    {description.description}
                </Typography>
            </Stack>

            <Grid container>
                <Grid item xs={12} md={6}>
                    <Stack spacing={2}>
                        {description.properties.length > 0 && (
                            <ExpandButton
                                isOpen={isOpenProps}
                                onClick={() => setOpenProps((pre) => !pre)}
                                textPrimary="Properties"
                            />
                        )}
                        {isOpenProps &&
                            description.properties.map((property) => (
                                <ListItem key={property.name}>
                                    <Typography variant="h6">
                                        {property.name}:&nbsp;
                                    </Typography>
                                    {property.type.url ? (
                                        <Link
                                            component={RouterLink}
                                            to={`/doc/classes/${property.type.url}`}
                                        >
                                            <ArrayProps name={property.type.name} />
                                        </Link>
                                    ) : (
                                        <ArrayProps name={property.type.name} />
                                    )}
                                </ListItem>
                            ))}
                    </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Stack spacing={2}>
                        {description.methods.length > 0 && (
                            <ExpandButton
                                isOpen={isOpenMethods}
                                onClick={() => setOpenMethods((pre) => !pre)}
                                textPrimary="Methods"
                            />
                        )}
                        {isOpenMethods &&
                            description.methods.map((method) => (
                                <ListItem key={method.name}>
                                    <Typography variant="h6">{method.name}</Typography>
                                    <Typography fontWeight="bold" fontFamily="Cascadia">
                                        (
                                    </Typography>
                                    <Stack
                                        sx={{ maxWidth: '50%', overflow: 'hidden' }}
                                        direction="row"
                                    >
                                        {method.parameter.map((param, index) => (
                                            <>
                                                <Typography
                                                    key={param.name + index}
                                                    fontFamily="Cascadia"
                                                >
                                                    {param.name}:
                                                </Typography>
                                                {param.type.url ? (
                                                    <Link
                                                        component={RouterLink}
                                                        to={`/doc/classes/${param.type.url}`}
                                                    >
                                                        {param.type.name}
                                                    </Link>
                                                ) : (
                                                    <Typography color="primary">
                                                        {param.type.name}
                                                    </Typography>
                                                )}
                                                {index !==
                                                    method.parameter.length - 1 && (
                                                    <Typography
                                                        fontWeight="bold"
                                                        fontFamily="Cascadia"
                                                    >
                                                        ,
                                                    </Typography>
                                                )}
                                            </>
                                        ))}
                                    </Stack>
                                    <Typography fontWeight="bold" fontFamily="Cascadia">
                                        )
                                    </Typography>
                                    <Typography fontFamily="Cascadia">:</Typography>
                                    {!method.return.url ? (
                                        <Typography color="primary">
                                            {method.return.name}
                                        </Typography>
                                    ) : (
                                        <Link
                                            component={RouterLink}
                                            to={`/doc/classes/${method.return.url}`}
                                        >
                                            {method.return.name}
                                        </Link>
                                    )}
                                </ListItem>
                            ))}
                    </Stack>
                </Grid>
            </Grid>
        </Stack>
    )
}
