import { Axis } from '@chsk/core'
import { Distribution, Distributions } from '../../src'
import { ChartDecorator } from '../decorators'
import { commonDistributionProps } from './decorators'

const quantilesProps = {
    medianStyle: { strokeWidth: 3, stroke: '#444444' },
    whiskerStyle: { strokeWidth: 2 },
}

export default {
    title: 'Addons/Band/Distributions/Distribution',
    component: Distribution,
}

export const Vertical = {
    name: 'vertical',
    args: {
        ...commonDistributionProps,
        horizontal: false,
        children: (
            <>
                <Distributions {...quantilesProps} />
                <Axis variant={'left'} />
                <Axis variant={'bottom'} />
            </>
        ),
    },
    decorators: [ChartDecorator],
}

export const Horizontal = {
    name: 'horizontal',
    args: {
        ...commonDistributionProps,
        horizontal: true,
        children: (
            <>
                <Distributions {...quantilesProps} />
                <Axis variant={'left'} />
                <Axis variant={'bottom'} />
            </>
        ),
    },
    decorators: [ChartDecorator],
}
