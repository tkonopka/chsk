import { Surface, GridItem } from '../../../src'
import { ChartWithGridDecorator } from './decorators'

export default {
    title: 'Core/Components/Views/GridItem',
    component: GridItem,
}

export const Position = {
    name: 'position',
    args: {
        position: [2, 1],
        children: (
            <Surface
                style={{
                    fill: '#ddaaaa',
                }}
            />
        ),
    },
    decorators: [ChartWithGridDecorator],
}

export const IndexAsInteger = {
    name: 'index as integer',
    args: {
        index: 2,
        children: (
            <Surface
                style={{
                    fill: '#ddaaaa',
                }}
            />
        ),
    },
    decorators: [ChartWithGridDecorator],
}

export const IndexAsArray = {
    name: 'index as array',
    args: {
        index: [0, 2],
        children: (
            <Surface
                style={{
                    fill: '#ddaaaa',
                }}
            />
        ),
    },
    decorators: [ChartWithGridDecorator],
}
