import dataGroups from '../stories/dataGroups.json'
import { BarProps } from '../src'

export const barProps: BarProps = {
    data: dataGroups,
    keys: ['x', 'y', 'z'],
    scaleIndex: {
        variant: 'band' as const,
        domain: ['alpha', 'beta'],
    },
    scaleValue: {
        variant: 'linear' as const,
        domain: [0, 100] as [number, number],
    },
}
