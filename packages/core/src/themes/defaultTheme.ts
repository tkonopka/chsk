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
            stroke: '#aaaaaa',
            strokeWidth: 2,
        },
        axis: {
            stroke: '#222222',
            visibility: 'hidden' as const,
        },
        tick: {
            stroke: '#222222',
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
}
