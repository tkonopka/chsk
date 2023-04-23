import { defaultTheme, buttonTheme, tooltipItemLabelValueTheme } from '../../src'
import { ThemeController } from '../ThemeController'
import { ButtonExample, TooltipItemLabelValueExample } from './examples'

export default {
    title: 'Addons/Themes/Theme pieces',
    parameters: { controls: { include: [] } },
}

export const Button = {
    render: () => (
        <ThemeController
            chart={ButtonExample}
            chartId={'button'}
            themes={{
                buttonTheme,
                defaultTheme,
            }}
        />
    ),

    name: 'button',
}

export const TooltipItemLabelAndValue = {
    render: () => (
        <ThemeController
            chart={TooltipItemLabelValueExample}
            chartId={'tooltipItemLabelValue'}
            themes={{
                tooltipItemLabelValueTheme,
                defaultTheme,
            }}
        />
    ),

    name: 'tooltip item label and value',
}
