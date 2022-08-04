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
                                nodeId="Quickstart"
                                label="Quick Start"
                                onClick={() => navigate('/doc/quickstart/register')}
                            >
                                <TreeItem
                                    nodeId="Register"
                                    label="Register"
                                    onClick={() => navigate(`/doc/quickstart/register`)}
                                />
                                <TreeItem
                                    nodeId="Implement"
                                    label="Implement"
                                    onClick={() => navigate(`/doc/quickstart/implement`)}
                                />
                            </TreeItem>
                            <TreeItem
                                nodeId="Interaction"
                                label="Interactions"
                                onClick={() => navigate('/doc/interactions')}
                            >
                                <TreeItem
                                    nodeId="Buttons"
                                    label="Buttons"
                                    onClick={() => navigate(`/doc/interactions/buttons`)}
                                />
                                <TreeItem
                                    nodeId="Selects"
                                    label="Selects"
                                    onClick={() => navigate(`/doc/interactions/selects`)}
                                />
                                <TreeItem
                                    nodeId="Reacts"
                                    label="Reacts"
                                    onClick={() => navigate(`/doc/interactions/reacts`)}
                                />
                            </TreeItem>
                            <TreeItem
                                nodeId="Markdown"
                                label="Markdown"
                                onClick={() => navigate('/doc/markdown')}
                            />
                            <TreeItem
                                nodeId="4"
                                label="Class"
                                onClick={() => navigate(`/doc/classes/Client`)}
                            >
                                {classDescriptionList.map((classDescription, i) => (
                                    <TreeItem
                                        nodeId={classDescription.name + i}
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

export * from './interactions'
export * from './classes'
export * from './quickstart'
