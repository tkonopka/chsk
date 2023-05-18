import { Axis } from '@chsk/core'
import { Quantile, Quantiles } from '../../src'
import { ChartDecorator } from '../decorators'
import { commonQuantileProps } from './decorators'

const quantilesProps = {
    medianStyle: { strokeWidth: 3, stroke: '#444444' },
    whiskerStyle: { strokeWidth: 2 },
}

export default {
    title: 'Addons/Band/Quantiles/Quantile',
    component: Quantile,
}

export const Vertical = {
    name: 'vertical',
    args: {
        ...commonQuantileProps,
        horizontal: false,
        children: (
            <>
                <Quantiles {...quantilesProps} />
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
        ...commonQuantileProps,
        horizontal: true,
        children: (
            <>
                <Quantiles {...quantilesProps} />
                <Axis variant={'left'} />
                <Axis variant={'bottom'} />
            </>
        ),
    },
    decorators: [ChartDecorator],
}
