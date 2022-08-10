import { Rectangle } from '@chask/core'
import { BarPreparedDataItem, BarsProps } from './types'
import { useBarPreparedData } from './contexts'
import { ReactNode } from 'react'

export const Bars = ({ bar = Rectangle, rx, ry, className, style }: BarsProps) => {
    const preparedData = useBarPreparedData()
    const data = preparedData.data
    if (data.length === 0) return null

    const bars: Array<ReactNode> = []
    data.forEach((seriesData: BarPreparedDataItem) => {
        seriesData.position.map((pos, i) => {
            const size = seriesData.size[i]
            const result = bar({
                key: 'bar-' + seriesData.index + '-' + i,
                x: pos[0],
                y: pos[1],
                width: size[0],
                height: size[1],
                rx: rx,
                ry: ry,
                className: className,
                style: style,
                setRole: false,
            })
            bars.push(result)
        })
    })

    return (
        <g role={'bar-bars'} key={'bar-bars'}>
            {bars}
        </g>
    )
}
