import { ThemeSpec } from '@chask/core'

export const downloadThemeSpec: ThemeSpec = {
    text: {
        download: {
            fontStyle: 'normal',
            alignmentBaseline: 'middle',
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
