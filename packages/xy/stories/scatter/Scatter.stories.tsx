import { Axis, Legend, ViewController, ViewClip } from '@chsk/core'
import { interpolateReds } from 'd3-scale-chromatic'
import { Scatter, ScatterPoints } from '../../src'
import { ChartWithLegendSpaceDecorator, dataBubbles } from './decorators'

import dataPolynomials from './dataPolynomials.json'

const PointsAndLegend = ({
    title = 'Polynomials',
    legend = true,
    controller = false,
    id = 'id',
    clip = false,
}: {
    title?: string
    legend?: boolean
    controller?: boolean
    id?: string
    clip?: boolean
}) => {
    return (
        <>
            <Axis variant={'bottom'} label={'x (a.u.)'} />
            <Axis variant={'left'} label={'y (a.u.)'} />
            {clip ? (
                <ViewClip id={id}>
                    <ScatterPoints />
                </ViewClip>
            ) : (
                <ScatterPoints />
            )}
            {legend ? (
                <Legend
                    position={[220, 60]}
                    anchor={[0, 0.5]}
                    positionUnits={'absolute'}
                    title={title}
                />
            ) : null}
            {controller ? <ViewController itemStyle={{ textAnchor: 'start' }} /> : null}
        </>
    )
}

export default {
    title: 'Addons/XY/Scatter/Scatter',
    component: Scatter,
}

export const AutoRescaling = {
    name: 'auto-rescaling',
    args: {
        data: dataPolynomials,
        x: 'x',
        y: 'y',
        valueSize: 5,
        scaleX: {
            variant: 'linear',
            domain: [0, 'auto'],
        },
        scaleY: {
            variant: 'linear',
            domain: [0, 'auto'],
        },
        autoRescale: true,
        children: <PointsAndLegend />,
    },
    decorators: [ChartWithLegendSpaceDecorator],
}

export const FixedScales = {
    name: 'fixed scales',
    args: {
        data: dataPolynomials,
        x: 'x',
        y: 'y',
        valueSize: 5,
        scaleX: {
            variant: 'linear',
            domain: [0, 'auto'],
        },
        scaleY: {
            variant: 'linear',
            domain: [0, 'auto'],
        },
        autoRescale: false,
        children: <PointsAndLegend />,
    },
    decorators: [ChartWithLegendSpaceDecorator],
}

export const BaseSymbolSize = {
    name: 'base symbol size',
    args: {
        data: dataPolynomials,
        x: 'x',
        y: 'y',
        valueSize: 9,
        scaleX: {
            variant: 'linear',
            domain: [0, 'auto'],
        },
        scaleY: {
            variant: 'linear',
            domain: [0, 'auto'],
        },
        autoRescale: false,
        children: <PointsAndLegend />,
    },
    decorators: [ChartWithLegendSpaceDecorator],
}

export const BubbleSize = {
    name: 'bubble size',
    args: {
        data: dataBubbles,
        x: 'x',
        y: 'y',
        valueSize: 'value',
        scaleX: {
            variant: 'linear',
            domain: [0, 'auto'],
        },
        scaleY: {
            variant: 'linear',
            domain: [0, 'auto'],
        },
        scaleSize: {
            variant: 'sqrt',
            domain: [0, 'auto'],
            size: 10,
        },
        autoRescale: true,
        children: <PointsAndLegend title={'Series'} />,
    },
    decorators: [ChartWithLegendSpaceDecorator],
}

export const BubbleColor = {
    name: 'bubble color',
    args: {
        data: dataBubbles,
        x: 'x',
        y: 'y',
        valueSize: 8,
        valueColor: 'value',
        scaleX: {
            variant: 'linear',
            domain: [0, 'auto'],
        },
        scaleY: {
            variant: 'linear',
            domain: [0, 'auto'],
        },
        scaleColor: {
            variant: 'sequential',
            colors: interpolateReds,
            domain: 'auto',
        },
        autoRescale: true,
        children: <PointsAndLegend title={'Series'} legend={false} />,
    },
    decorators: [ChartWithLegendSpaceDecorator],
}

export const WithoutClipping = {
    name: 'without clipping',
    args: {
        data: dataBubbles,
        x: 'x',
        y: 'y',
        valueSize: 8,
        valueColor: 'value',
        scaleX: {
            variant: 'linear',
            domain: [0, 'auto'],
        },
        scaleY: {
            variant: 'linear',
            domain: [0, 'auto'],
        },
        scaleColor: {
            variant: 'sequential',
            colors: interpolateReds,
            domain: 'auto',
        },
        children: (
            <PointsAndLegend
                title={'Series'}
                legend={false}
                id="clip0"
                clip={false}
                controller={true}
            />
        ),
    },
    decorators: [ChartWithLegendSpaceDecorator],
}

export const WithClipping = {
    name: 'with clipping',
    args: {
        data: dataBubbles,
        x: 'x',
        y: 'y',
        valueSize: 8,
        valueColor: 'value',
        scaleX: {
            variant: 'linear',
            domain: [0, 'auto'],
        },
        scaleY: {
            variant: 'linear',
            domain: [0, 'auto'],
        },
        scaleColor: {
            variant: 'sequential',
            colors: interpolateReds,
            domain: 'auto',
        },
        children: (
            <PointsAndLegend
                title={'Series'}
                legend={false}
                id="clip1"
                clip={true}
                controller={true}
            />
        ),
    },
    decorators: [ChartWithLegendSpaceDecorator],
}
