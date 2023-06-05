import { Axis, Legend } from '@chsk/core'
import { Density, DensityCells } from '../../src'
import { ChartWithLegendSpaceDecorator } from '../scatter/decorators'
import { densityData } from './decorators'

const CellsAndLegend = ({
    title = 'Groups',
    legend = true,
}: {
    title?: string
    legend?: boolean
}) => {
    return (
        <>
            <Axis variant={'bottom'} label={'x (a.u.)'} />
            <Axis variant={'left'} label={'y (a.u.)'} />
            <DensityCells />
            {legend ? (
                <Legend
                    position={[220, 60]}
                    anchor={[0, 0.5]}
                    positionUnits={'absolute'}
                    title={title}
                />
            ) : null}
        </>
    )
}

export default {
    title: 'Addons/XY/Density/Density',
    component: Density,
}

export const LoRes = {
    name: 'low resolution',
    args: {
        data: densityData,
        x: 'x',
        y: 'y',
        binSize: 30,
        children: <CellsAndLegend />,
    },
    decorators: [ChartWithLegendSpaceDecorator],
}

export const HiRes = {
    name: 'low resolution',
    args: {
        data: densityData,
        x: 'x',
        y: 'y',
        binSize: 5,
        children: <CellsAndLegend />,
    },
    decorators: [ChartWithLegendSpaceDecorator],
}

export const Color = {
    name: 'custom color',
    args: {
        data: densityData,
        x: 'x',
        y: 'y',
        valueColor: 'c',
        binSize: 15,
        scaleColor: { variant: 'sequential', colors: ['#777777', '#ff0000'], domain: [0, 1] },
        children: <CellsAndLegend />,
    },
    decorators: [ChartWithLegendSpaceDecorator],
}
