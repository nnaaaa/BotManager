import { TreeItem, TreeView } from '@mui/lab'
import { Grid, Hidden } from '@mui/material'
import { Wrapper } from './styles'
import { ExpandMore, ChevronRight } from '@mui/icons-material'
import { Link, Outlet, useNavigate } from 'react-router-dom'

export function Document() {
    const navigate = useNavigate()

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
                                onClick={() => navigate('quickstart')}
                            />
                            <TreeItem
                                nodeId="2"
                                label="Class"
                                onClick={() => navigate('classes')}
                            >
                                <TreeItem nodeId="3" label="Client" />
                                <TreeItem nodeId="4" label="MessageService" />
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
