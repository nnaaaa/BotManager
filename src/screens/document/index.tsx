import { ChevronRight, ExpandMore } from '@mui/icons-material'
import { TreeItem, TreeView } from '@mui/lab'
import { Grid, Hidden } from '@mui/material'
import { Outlet, useNavigate } from 'react-router-dom'
import { classDescriptionList } from './classes/data'
import { Wrapper } from './styles'

export function Document() {
    const navigate = useNavigate()

    if (!classDescriptionList) return <></>

    return (
        <Wrapper>
            <Grid container spacing={2}>
                <Hidden mdDown>
                    <Grid item md={3}>
                        <TreeView
                            defaultCollapseIcon={<ExpandMore />}
                            defaultExpandIcon={<ChevronRight />}
                            multiSelect
                        >
                            <TreeItem
                                nodeId="1"
                                label="Quick Start"
                                onClick={() => navigate('/doc/quickstart/register')}
                            >
                                <TreeItem
                                    nodeId="2"
                                    label="Register"
                                    onClick={() =>
                                        navigate(
                                            `/doc/quickstart/register`
                                        )
                                    }
                                />
                                <TreeItem
                                    nodeId="3"
                                    label="Implement"
                                    onClick={() =>
                                        navigate(
                                            `/doc/quickstart/implement`
                                        )
                                    }
                                />
                            </TreeItem>
                            <TreeItem
                                nodeId="4"
                                label="Class"
                                onClick={() => navigate(`/doc/classes/Client`)}
                            >
                                {classDescriptionList.map((classDescription, i) => (
                                    <TreeItem
                                        nodeId={`${i + 5}`}
                                        key={classDescription.name + i}
                                        label={classDescription.name}
                                        onClick={() =>
                                            navigate(
                                                `/doc/classes/${classDescription.name}`
                                            )
                                        }
                                    />
                                ))}
                            </TreeItem>
                        </TreeView>
                    </Grid>
                </Hidden>

                <Grid item xs={12} md={9}>
                    <Outlet />
                </Grid>
            </Grid>
        </Wrapper>
    )
}

export * from './classes'
export * from './quickstart'

