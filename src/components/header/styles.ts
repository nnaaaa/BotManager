import { makeStyles } from '@mui/styles'

export const useStyle = makeStyles((theme: any) => ({
    appBar: {
        // boxShadow: 'none',
        // background: 'rgba(255,255,255,0.6)',
    },
    toolBar: {
        padding: `0.5rem 0`,
        // color: 'white',
        // boxShadow: 'inset 0px -1px 1px #e7ebf0 !important',
        alignItems: 'stretch',
        justifyContent: 'center',
        // backgroundColor: 'rgba(255,255,255,0.72)',
        backdropFilter: 'blur(20px)',
    },
    button: {
        fontSize: 20,
    },
}))
