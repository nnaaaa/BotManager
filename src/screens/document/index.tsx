import { TreeItem, TreeView } from '@mui/lab'
import { Grid } from '@mui/material'
import { Wrapper } from './styles'
import { ExpandMore, ChevronRight } from '@mui/icons-material'

export function Document() {
    return (
        <Wrapper>
            <Grid container>
                <Grid item xs={3}>
                    <TreeView
                        defaultCollapseIcon={<ExpandMore />}
                        defaultExpandIcon={<ChevronRight />}
                        multiSelect
                    >
                        <TreeItem nodeId="1" label="Class">
                            <TreeItem nodeId="2" label="Client" />
                            <TreeItem nodeId="3" label="MessageService" />
                        </TreeItem>
                        {/* <TreeItem nodeId="5" label="Documents">
                            <TreeItem nodeId="2" label="Client" />
                            <TreeItem nodeId="3" label="MessageService" />
                        </TreeItem> */}
                    </TreeView>
                </Grid>
            </Grid>
        </Wrapper>
    )
}
