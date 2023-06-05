import { DensityCells, DensityCell } from '../../src'
import { ChartDensityDecorator } from './decorators'

export default {
    title: 'Addons/XY/Density/DensityCells',
    component: DensityCells,
}

export const Transparency = {
    name: 'transparency',
    args: {
        transparency: true,
    },
    decorators: [ChartDensityDecorator],
}

export const NoTransparency = {
    name: 'no transparency',
    args: {
        transparency: false,
    },
    decorators: [ChartDensityDecorator],
}

export const Cells = {
    name: 'animated cells',
    args: {
        cell: DensityCell,
    },
    decorators: [ChartDensityDecorator],
}
