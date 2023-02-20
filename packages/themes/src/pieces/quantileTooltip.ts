import { ThemeSpec } from '@chsk/core'

export const quantileTooltipThemePiece: ThemeSpec = {
    text: {
        'tooltipItem.label': {
            textAnchor: 'start',
        },
        'tooltipItem.value': {
            textAnchor: 'start',
            fontWeight: 600,
            dominantBaseline: 'central',
        },
    },
}
