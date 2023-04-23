import { Surface } from '@chsk/core'
import { Origin, Pie, Slices } from '../../src'
import { ChartDecorator } from '../decorators'
import { commonPieProps } from '../pie/decorators'

export default {
    title: 'Addons/Polar/Polar/Origin',
    component: Pie,
}

export const WithoutOrigin = {
    name: 'without origin',
    args: {
        ...commonPieProps,
        children: (
            <>
                <Slices />
                <Surface
                    variant={'inner'}
                    style={{
                        stroke: '#222222',
                        strokeWidth: 1,
                        fillOpacity: 0,
                    }}
                />
            </>
        ),
    },
    decorators: [ChartDecorator],
}

export const WithOrigin = {
    name: 'with origin',
    args: {
        ...commonPieProps,
        children: (
            <>
                <Surface
                    variant={'inner'}
                    style={{
                        stroke: '#222222',
                        strokeWidth: 1,
                        fillOpacity: 0,
                    }}
                />
                <Origin>
                    <Slices />
                </Origin>
            </>
        ),
    },
    decorators: [ChartDecorator],
}
