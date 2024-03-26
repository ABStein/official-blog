/** @type {import("bright").Extension} */
export const titleBar = {
    name: 'titleBar',
    TitleBarContent: Title,
}

/** @type {import("bright").BrightProps["TitleBarContent"]} */
function Title(props) {
    const { title, colors } = props
    const { foreground, background } = colors

    const redCircle = {
        borderRadius: '100%',
        height: '0.8em',
        width: '0.8em',
        opacity: 0.5,
    }
    const yellowCircle = {
        borderRadius: '100%',
        height: '0.8em',
        width: '0.8em',
        opacity: 0.5,
    }
    const greenCircle = {
        borderRadius: '100%',
        height: '0.8em',
        width: '0.8em',
        background: 'green',
        opacity: 0.5,
    }

    return (
        <div
            style={{
                background,
                color: foreground,
                padding: '3px 0',
                fontSize: '0.9em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
            }}
        >
            <div
                style={{ gap: 4, display: 'flex', marginLeft: 8 }}
            >
                <div className='bg-red-500' style={redCircle} />
                <div className='bg-yellow-500' style={yellowCircle} />
                <div className='bg-green-500' style={greenCircle} />
            </div>
            <span style={{ opacity: 0.8 }}>{title}</span>
            <div style={{ width: 45 }} />
        </div>
    )
}
