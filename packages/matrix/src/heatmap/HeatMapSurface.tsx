import { m } from 'framer-motion'
import {
    BandAxisScale,
    getClassName,
    useIdsKeys,
    useScales,
    useProcessedData,
    interval,
} from '@chsk/core'
import { HeatMapSurfaceProps } from './types'

const getInterval = (targets: Set<string>, scale: BandAxisScale, expansion: [number, number]) => {
    const bandwidth = scale.bandwidth()
    const values = interval(Array.from(targets).map(scale))
    return [values[0] - expansion[0] * bandwidth, values[1] + expansion[1] * bandwidth]
}

export const HeatMapSurface = ({
    ids,
    keys,
    expansion = [
        [0, 0],
        [0, 0],
    ],
    className,
    setRole = false,
    style,
}: HeatMapSurfaceProps) => {
    const processedData = useProcessedData()
    const { scales } = useScales()
    const { idSet, keySet } = useIdsKeys(ids, keys, processedData)
    if (idSet.size === 0 || keySet.size === 0) return null

    const idInterval = getInterval(idSet, scales.y as BandAxisScale, expansion[0])
    const keyInterval = getInterval(keySet, scales.x as BandAxisScale, expansion[1])
    const compositeClassName = getClassName('heatmapSurface', className)

    return (
        <g role={'heatmap-surface'}>
            <m.rect
                key={'surface-' + Array.from(idSet).join(',') + '-' + Array.from(keySet).join(',')}
                x={keyInterval[0]}
                width={keyInterval[1] - keyInterval[0]}
                y={idInterval[0]}
                height={idInterval[1] - idInterval[0]}
                role={setRole ? 'heatmap-surface' : undefined}
                className={compositeClassName}
                style={style}
            />
        </g>
    )
}
