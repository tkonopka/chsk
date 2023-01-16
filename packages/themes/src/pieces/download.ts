import { ThemeSpec } from '@chsk/core'

export const downloadThemePiece: ThemeSpec = {
    text: {
        download: {
            fontStyle: 'normal',
            alignmentBaseline: 'middle',
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
        },
    },
}
