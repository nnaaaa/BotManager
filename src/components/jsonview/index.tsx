import { useContext } from 'react'
import ReactJson from 'react-json-view-with-toggle'
import { ColorModeContext } from 'states/context/colorMode'

export function JsonView({ json }: { json: Object }) {
    const { mode } = useContext(ColorModeContext)

    return (
        <ReactJson
            src={json}
            theme={mode === 'dark' ? 'tube' : 'bright:inverted'}
            iconStyle="square"
            indentWidth={8}
            displayDataTypes={false}
            style={{
                backgroundColor: 'none',
            }}
            collapseStringsAfterLength={20}
            quotesOnKeys={false}
        />
    )
}
