import data from '../stories/dataSmall.json'
import { BarProps } from '../src'

export const chartProps = {
    size: [400, 300] as [number, number],
    padding: [40, 40, 40, 40] as [number, number, number, number],
}

export const barProps: BarProps = {
    data: data,
    keys: ['x', 'y', 'z'],
    scaleIndex: {
        variant: 'band' as const,
        domain: ['alpha', 'beta'],
    },
    scaleValue: {
        variant: 'linear' as const,
        min: 0,
        max: 100,
    },
}
