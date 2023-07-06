import { m } from 'framer-motion'
import {
    BandAxisScale,
    getClassName,
    useIdsKeys,
    useScales,
    useProcessedData,
    interval,
    ssrCompatible,
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
    setRole = true,
    style,
}: HeatMapSurfaceProps) => {
    const processedData = useProcessedData()
    const { scales } = useScales()
    const { idSet, keySet } = useIdsKeys(ids, keys, processedData)
    if (idSet.size === 0 || keySet.size === 0) return null

    const idInterval = getInterval(idSet, scales.y as BandAxisScale, expansion[0])
    const keyInterval = getInterval(keySet, scales.x as BandAxisScale, expansion[1])
    const compositeClassName = getClassName('heatmapSurface', className)
    const x = keyInterval[0]
    const y = idInterval[0]
    const config = {
        x,
        y,
        width: keyInterval[1] - keyInterval[0],
        height: idInterval[1] - idInterval[0],
    }
    return (
        <m.rect
            key={'s-' + Array.from(idSet).join(',') + '-' + Array.from(keySet).join(',')}
            role={setRole ? 'heatmap-surface' : undefined}
            initial={config}
            animate={config}
            className={compositeClassName}
            style={ssrCompatible(style, config)}
        />
    )
}
