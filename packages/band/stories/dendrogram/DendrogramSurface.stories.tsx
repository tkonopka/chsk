import { DendrogramSurface, DendrogramInteractiveDataItem } from '../../src'
import { ChartDendrogramSurfaceDecorator } from './decorators'

export default {
    title: 'Addons/Band/Dendrogram/DendrogramSurface',
    component: DendrogramSurface,
}

export const AllLevels = {
    name: 'all levels',
    args: {
        style: { fill: '#888888', fillOpacity: 0.5, strokeWidth: 1, stroke: '#888888' },
    },
    decorators: [ChartDendrogramSurfaceDecorator],
}

export const SelectedLevels = {
    name: 'selected levels',
    args: {
        levels: [1, 2],
        style: { fill: '#888888', fillOpacity: 0.5, strokeWidth: 1, stroke: '#888888' },
    },
    decorators: [ChartDendrogramSurfaceDecorator],
}

export const Subset = {
    name: 'subset',
    args: {
        keys: ['gamma', 'epsilon'],
        style: { fill: '#888888', fillOpacity: 0.5, strokeWidth: 1, stroke: '#888888' },
    },
    decorators: [ChartDendrogramSurfaceDecorator],
}

export const Expansion = {
    name: 'expansion',
    args: {
        levels: [2],
        expansion: [0.5, 0, 0.5, 0.5],
        style: { fill: '#888888', fillOpacity: 0.5, strokeWidth: 1, stroke: '#888888' },
    },
    decorators: [ChartDendrogramSurfaceDecorator],
}

export const Interactivity = {
    name: 'interactive',
    args: {
        interactive: true,
        expansion: [0.5, 0, 0.5, 0.5],
        style: { fill: '#cccccc', stroke: '#dd0000', strokeWidth: 1, cursor: 'pointer' },
        handlers: {
            onClick: (data?: DendrogramInteractiveDataItem) => {
                console.log(JSON.stringify(data))
            },
        },
    },
    decorators: [ChartDendrogramSurfaceDecorator],
}
