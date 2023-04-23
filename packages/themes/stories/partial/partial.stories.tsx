import {
    boxedViewTheme,
    defaultTheme,
    fontSystemUITheme,
    inverseGridTheme,
    smallAxisTextTheme,
    faintTicksTheme,
} from '../../src'
import { ThemeController } from '../ThemeController'
import { ThemeScatterChart } from '../complete/ThemeScatterChart'

export default {
    title: 'Addons/Themes/Partial themes',
}

export const BoxedView = {
    render: () => (
        <ThemeController
            chart={ThemeScatterChart}
            chartId={'chartBoxed'}
            themes={{
                boxedViewTheme,
                defaultTheme,
            }}
        />
    ),
    name: 'boxed view',
}

export const FaintTicks = {
    render: () => (
        <ThemeController
            chart={ThemeScatterChart}
            chartId={'pieceFaintTicks'}
            themes={{
                faintTicksTheme,
                defaultTheme,
            }}
        />
    ),
    name: 'faint ticks',
}

export const FontSystemUi = {
    render: () => (
        <ThemeController
            chart={ThemeScatterChart}
            chartId={'pieceFontSystemUI'}
            themes={{
                fontSystemUITheme,
                defaultTheme,
            }}
        />
    ),
    name: 'font system-ui',
}

export const InverseGrid = {
    render: () => (
        <ThemeController
            chart={ThemeScatterChart}
            chartId={'chartInverseGrid'}
            themes={{
                inverseGridTheme,
                defaultTheme,
            }}
        />
    ),
    name: 'inverse grid',
}

export const SmallAxisText = {
    render: () => (
        <ThemeController
            chart={ThemeScatterChart}
            chartId={'pieceSmallAxisText'}
            themes={{
                smallAxisTextTheme,
                defaultTheme,
            }}
        />
    ),
    name: 'small axis text',
}
