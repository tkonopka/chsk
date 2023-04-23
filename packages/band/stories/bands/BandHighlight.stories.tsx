import { Chart, Axis } from '@chsk/core'
import { Bar, Bars, BandHighlight } from '../../src'
import { commonBarProps } from '../bars/decorators'

export default {
    title: 'Addons/Band/Bands/BandHighlight',
    component: BandHighlight,
}

export const Vertical = {
    render: () => (
        <Chart
            id={'vertical'}
            size={[400, 240]}
            padding={[60, 60, 60, 60]}
            style={{
                display: 'inline-block',
            }}
        >
            <Bar {...commonBarProps}>
                <Bars />
                <Axis variant={'left'} label={'Values (a.u.)'} />
                <Axis variant={'bottom'} />
                <BandHighlight
                    style={{
                        fill: '#777777',
                        opacity: 0.3,
                    }}
                />
            </Bar>
        </Chart>
    ),

    name: 'vertical',
}

export const Horizontal = {
    render: () => (
        <Chart
            id={'horizontal'}
            size={[400, 240]}
            padding={[60, 60, 60, 60]}
            style={{
                display: 'inline-block',
            }}
        >
            <Bar {...commonBarProps} horizontal={true}>
                <Bars />
                <Axis variant={'left'} />
                <Axis variant={'top'} label={'Values (a.u.)'} />
                <BandHighlight
                    style={{
                        fill: '#777777',
                        opacity: 0.3,
                    }}
                />
            </Bar>
        </Chart>
    ),

    name: 'horizontal',
}

export const Static = {
    render: () => (
        <Chart
            id={'static'}
            size={[400, 240]}
            padding={[40, 60, 60, 60]}
            style={{
                display: 'inline-block',
            }}
        >
            <Bar {...commonBarProps}>
                <Bars />
                <Axis variant={'left'} />
                <Axis variant={'bottom'} label={'Values (a.u.)'} />
                <BandHighlight
                    ids={['alpha']}
                    interactive={false}
                    style={{
                        fill: '#777777',
                        opacity: 0.3,
                    }}
                />
            </Bar>
        </Chart>
    ),

    name: 'static',
}

export const EdgeAnimation = {
    render: () => (
        <Chart
            id={'edge'}
            size={[400, 240]}
            padding={[40, 60, 60, 60]}
            style={{
                display: 'inline-block',
            }}
        >
            <Bar {...commonBarProps}>
                <Bars />
                <Axis variant={'left'} />
                <Axis variant={'bottom'} label={'Values (a.u.)'} />
                <BandHighlight
                    edgeAnimation={true}
                    style={{
                        fill: '#222222',
                        opacity: 0.3,
                    }}
                />
            </Bar>
        </Chart>
    ),

    name: 'edge animation',
}
