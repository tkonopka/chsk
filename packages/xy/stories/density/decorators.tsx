import { ReactNode } from 'react'
import { Axis, Chart, Legend, range, roundDecimalPlaces } from '@chsk/core'
import { ScatterDataItem, Density } from '../../src'

const generateDensityData = (ids: string[], n: number[], round = 2): Array<ScatterDataItem> => {
    const result = ids.map((id: string, i) => {
        const series: Record<string, unknown> = { id: id }
        const indexes = range(n[i])
        const x = Math.random()
        const y = Math.random()
        series['data'] = {
            x: indexes.map(() => roundDecimalPlaces(x + Math.random(), round)),
            y: indexes.map(() => roundDecimalPlaces(y + Math.random(), round)),
            c: indexes.map(() => roundDecimalPlaces(Math.abs(Math.random()), round)),
        }
        return series as ScatterDataItem
    })
    return result
}

export const densityData = generateDensityData(['alpha', 'beta'], [180, 120])

export const ChartCellDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 160]} padding={[40, 40, 40, 40]} style={{ display: 'inline-block' }}>
        {Story()}
    </Chart>
)

export const ChartDensityDecorator = (Story: () => ReactNode) => (
    <Chart size={[400, 300]} padding={[40, 140, 60, 60]} style={{ display: 'inline-block' }}>
        <Density
            data={densityData}
            x={'x'}
            y={'y'}
            binSize={20}
            scaleX={{
                variant: 'linear',
                domain: [0, 'auto'],
            }}
            scaleY={{
                variant: 'linear',
                domain: [0, 'auto'],
            }}
        >
            <Axis variant={'bottom'} label={'x (a.u.)'} />
            <Axis variant={'left'} label={'y (a.u.)'} />
            {Story()}
            <Legend
                position={[230, 60]}
                anchor={[0, 0.5]}
                positionUnits={'absolute'}
                title={'Groups'}
            />
        </Density>
    </Chart>
)
