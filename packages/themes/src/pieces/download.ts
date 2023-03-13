import { ThemeSpec } from '@chsk/core'

export const downloadTheme: ThemeSpec = {
    text: {
        download: {
            dominantBaseline: 'central',
            fill: '#444444',
            fontFamily: 'sans-serif',
            fontSize: '11px',
            fontStyle: 'italic',
            textAnchor: 'start',
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
