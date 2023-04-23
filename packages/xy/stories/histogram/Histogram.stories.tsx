import { Axis, Legend } from '@chsk/core'
import { Histogram, HistogramArea, HistogramCurve } from '../../src'
import { ChartDecorator, ChartWithLegendSpaceDecorator, sampleData } from './decorators'

const AreaAndLegend = () => {
    return (
        <>
            <Axis variant={'bottom'} label={'x (a.u.)'} />
            <Axis variant={'left'} label={'counts'} />
            <HistogramArea style={{ fillOpacity: 1 }} />
            <Legend
                position={[220, 60]}
                positionUnits={'absolute'}
                anchor={[0, 0.5]}
                title={'Distributions'}
            />
        </>
    )
}

export default {
    title: 'Addons/XY/Histograms/Histogram',
    component: Histogram,
}

export const Counts = {
    name: 'counts',
    args: {
        variant: 'count',
        data: sampleData,
        breaks: 12,
        scaleX: {
            variant: 'linear',
            domain: ['auto', 'auto'],
        },
        scaleY: {
            variant: 'linear',
            domain: 'auto',
        },
        children: (
            <>
                <Axis variant={'bottom'} label={'x (a.u.)'} />
                <Axis variant={'left'} label={'counts'} />
                <HistogramArea style={{ fillOpacity: 1 }} />
            </>
        ),
    },
    decorators: [ChartDecorator],
}

export const Densities = {
    name: 'densities',
    args: {
        variant: 'density',
        data: sampleData,
        breaks: 12,
        scaleX: {
            variant: 'linear',
            domain: 'auto',
        },
        scaleY: {
            variant: 'linear',
            domain: 'auto',
        },
        children: (
            <>
                <Axis variant={'bottom'} label={'x (a.u.)'} />
                <Axis variant={'left'} label={'density'} />
                <HistogramArea style={{ fillOpacity: 1 }} />
            </>
        ),
    },
    decorators: [ChartDecorator],
}

export const LowResolution = {
    name: 'low resolution',
    args: {
        data: sampleData,
        breaks: 5,
        children: (
            <>
                <Axis variant={'bottom'} label={'x (a.u.)'} />
                <Axis variant={'left'} label={'counts'} />
                <HistogramCurve
                    curve="Step"
                    style={{
                        fillOpacity: 0,
                        strokeWidth: 3,
                    }}
                />
            </>
        ),
    },
    decorators: [ChartDecorator],
}

export const HighResolution = {
    name: 'high resolution',
    args: {
        data: sampleData,
        breaks: 40,
        children: (
            <>
                <Axis variant={'bottom'} label={'x (a.u.)'} />
                <Axis variant={'left'} label={'counts'} />
                <HistogramCurve
                    curve="Step"
                    style={{
                        fillOpacity: 0,
                        strokeWidth: 3,
                    }}
                />
            </>
        ),
    },
    decorators: [ChartDecorator],
}

export const AutoRescaling = {
    name: 'auto-rescaling',
    args: {
        data: sampleData,
        breaks: 12,
        scaleX: {
            variant: 'linear',
            domain: ['auto', 'auto'],
        },
        scaleY: {
            variant: 'linear',
            domain: 'auto',
        },
        autoRescale: true,
        children: <AreaAndLegend />,
    },
    decorators: [ChartWithLegendSpaceDecorator],
}

export const FixedScales = {
    name: 'fixed scales',
    args: {
        data: sampleData,
        breaks: 12,
        scaleX: {
            variant: 'linear',
            domain: 'auto',
        },
        scaleY: {
            variant: 'linear',
            domain: 'auto',
        },
        autoRescale: false,
        children: <AreaAndLegend />,
    },
    decorators: [ChartWithLegendSpaceDecorator],
}
