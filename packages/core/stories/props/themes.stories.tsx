import { customTheme, ChartWithAxisGrid, DivDecorator } from '../decorators'

export default {
    title: 'Core/Props/Themes',
    component: ChartWithAxisGrid,
}

export const Default = {
    name: 'default',
    args: {
        id: 'default-theme',
    },
    decorators: [DivDecorator],
}

export const Custom = {
    name: 'custom',
    args: {
        id: 'custom-theme',
        theme: customTheme,
    },
    decorators: [DivDecorator],
}
