import { GridProps } from './types'
import { getTicks, useScales } from '../scales'
import { useDimensions } from '../general'
import { Line } from './lines'

export const Grid = ({ variant, values, style }: GridProps) => {
    const scales = useScales()
    const dimensions = useDimensions()
    const isX = variant === 'x'
    const scale = isX ? scales.scaleX : scales.scaleY
    //console.log('Grid ' + variant + ' with scale: ' + scale)
    //console.log('style: ' + JSON.stringify(style))
    let tickCoordinates: Array<number>
    if ('ticks' in scale) {
        const tickValues = Array.isArray(values)
            ? (values as Array<number>)
            : (getTicks(scale, values) as Array<number>)
        tickCoordinates = tickValues?.map((v: number) => scale(v) as number)
    } else {
        const tickValues = Array.isArray(values)
            ? (values as Array<string>)
            : (getTicks(scale, undefined) as Array<string>)
        tickCoordinates = tickValues?.map(v => scale(v) as number)
    }

    let result
    if (isX) {
        result = tickCoordinates?.map((v: number, i: number) => (
            <Line
                x1={v}
                x2={v}
                y1={0}
                y2={dimensions.innerHeight}
                variant={'grid'}
                key={'grid-x-' + i}
                style={style}
            />
        ))
    } else {
        result = tickCoordinates?.map((v: number, i: number) => (
            <Line
                x1={0}
                x2={dimensions.innerWidth}
                y1={v}
                y2={v}
                variant={'grid'}
                key={'grid-y-' + i}
                style={style}
            />
        ))
    }
    return <g role={'grid-' + variant}>{result}</g>
}
