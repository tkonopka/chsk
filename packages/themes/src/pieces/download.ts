import { ThemeSpec } from '@chsk/core'

export const downloadTheme: ThemeSpec = {
    text: {
        download: {
            fontStyle: 'normal',
            dominantBaseline: 'central',
            textAnchor: 'start',
        },
        footnote: {
            fontFamily: 'sans-serif',
            fontSize: '11px',
            fill: '#444444',
            fontStyle: 'italic',
        },
    },
    rect: {
        download: {
            cursor: 'pointer',
        },
    },
    path: {
        download: {
            cursor: 'pointer',
            strokeWidth: 0,
            fill: '#555555',
            fillOpacity: 1,
        },
    },
}
