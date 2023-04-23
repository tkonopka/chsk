import { HeatMap, HeatMapCells } from '../../src'
import { ChartDecoratorEqualPadding, commonProps, commonCategoricalProps } from '../decorators'

export default {
    title: 'Addons/Matrix/HeatMaps/HeatMap',
    component: HeatMap,
}

export const Default = {
    name: 'default',
    args: {
        ...commonProps,
        children: <HeatMapCells />,
    },
    decorators: [ChartDecoratorEqualPadding],
}

export const Categorical = {
    name: 'categorical',
    args: {
        ...commonCategoricalProps,
        children: <HeatMapCells />,
    },
    decorators: [ChartDecoratorEqualPadding],
}

export const Size = {
    name: 'size',
    args: {
        ...commonProps,
        dataSize: commonProps.data,
        children: <HeatMapCells />,
    },
    decorators: [ChartDecoratorEqualPadding],
}

export const Padding = {
    name: 'padding',
    args: {
        ...commonProps,
        scaleX: {
            variant: 'band',
            padding: 0.15,
        },
        scaleY: {
            variant: 'band',
            padding: 0.15,
        },
        children: <HeatMapCells />,
    },
    decorators: [ChartDecoratorEqualPadding],
}
