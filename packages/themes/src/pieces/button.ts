import { ThemeSpec } from '@chsk/core'

export const buttonTheme: ThemeSpec = {
    text: {
        button: {
            dominantBaseline: 'central',
            fill: '#555555',
            fontFamily: 'sans-serif',
            fontSize: '11px',
            textAnchor: 'start',
        },
    },
    path: {
        button: {
            cursor: 'pointer',
            strokeWidth: 0,
            fill: '#555555',
            fillOpacity: 1,
            pointerEvents: 'none',
        },
    },
    rect: {
        button: {
            cursor: 'pointer',
        },
        'button.bg': {
            fill: '#eeeeee',
            fillOpacity: 0,
        },
        'button.bg:hover': {
            fillOpacity: 1,
        },
        'button.bg.selected': {
            fill: '#dddddd',
            fillOpacity: 0.7,
        },
        'button.bg.selected:hover': {
            fillOpacity: 1,
        },
    },
}
