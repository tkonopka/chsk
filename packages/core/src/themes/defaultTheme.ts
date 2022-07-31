// default theme object

export const defaultTheme = {
    typography: {
        default: {
            fontFamily: 'sans-serif',
            fontWeight: 400,
            fontSize: '14px',
            fill: '#333333',
        },
        title: {
            fontFamily: 'sans-serif',
            fontWeight: 600,
            fontSize: '18px',
            fill: '#333333',
        },
        subtitle: {
            fontFamily: 'sans-serif',
            fontWeight: 400,
            fontSize: '14px',
            fill: '#777777',
        },
        axisLabel: {
            fontFamily: 'sans-serif',
            fontWeight: 400,
            fontSize: '14px',
            fill: '#333333',
            textAnchor: 'middle' as const,
        },
        tickLabel: {
            fontFamily: 'sans-serif',
            fontWeight: 400,
            fontSize: '12px',
            fill: '#333333',
            textAnchor: 'middle' as const,
            alignmentBaseline: 'hanging' as const,
        },
    },
    line: {
        default: {
            stroke: '#222222',
            strokeWidth: 1,
        },
        grid: {
            stroke: '#bbbbbb',
            strokeWidth: 1,
        },
        axis: {
            stroke: '#222222',
            visibility: 'hidden' as const,
        },
        tick: {
            stroke: '#555555',
            strokeWidth: 2,
        },
    },
    surface: {
        inner: {
            fill: '#eeeeee',
            fillOpacity: 1,
        },
        outer: {
            fill: '#f4f4f4',
            fillOpacity: 1,
        },
    },
    rect: {
        default: {
            stroke: '#333333',
            strokeWidth: 0,
        },
    },
    circle: {
        default: {
            stroke: '#333333',
            strokeWidth: 0,
        },
    },
    tick: {
        size: 5,
        padding: 5,
        rotation: 0,
    },
}
