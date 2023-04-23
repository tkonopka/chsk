import { darkTheme, defaultTheme, emptyTheme } from '../../src/complete'
import { ThemeController } from '../ThemeController'
import { ThemeScatterChart } from './ThemeScatterChart'

export default {
    title: 'Addons/Themes/Complete themes',
}

export const Dark = {
    render: () => (
        <ThemeController
            chart={ThemeScatterChart}
            chartId={'darkTheme'}
            themes={{
                darkTheme,
                defaultTheme,
            }}
            baseTheme={true}
        />
    ),
    name: 'dark',
}

export const Empty = {
    render: () => (
        <ThemeController
            chart={ThemeScatterChart}
            chartId={'emptyTheme'}
            themes={{
                emptyTheme,
                defaultTheme,
            }}
            baseTheme={true}
        />
    ),
    name: 'empty',
}
