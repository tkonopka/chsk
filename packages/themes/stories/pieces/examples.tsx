import { Chart, Surface, View, Rectangle, Typography } from '@chsk/core'
import { ThemeStory, themeStoryChartProps } from '../ThemeController'

export const DownloadExample = ({ chartId, theme }: ThemeStory) => {
    return (
        <Chart id={chartId} {...themeStoryChartProps} theme={theme ?? undefined}>
            <Surface variant={'inner'} />
            <View>
                <Rectangle
                    x={60}
                    y={60}
                    width={40}
                    height={40}
                    style={{ fill: '#dd4444' }}
                    className={'download'}
                />
                <Typography position={[110, 80]} className={'download'}>
                    styled text
                </Typography>
            </View>
        </Chart>
    )
}

export const TooltipItemLabelValueExample = ({ chartId, theme }: ThemeStory) => {
    return (
        <Chart id={chartId} {...themeStoryChartProps} theme={theme ?? undefined}>
            <Surface variant={'inner'} />
            <View>
                <Rectangle
                    x={30}
                    y={40}
                    width={120}
                    height={40}
                    style={{ fillOpacity: 0, stroke: '#dd0000', strokeWidth: 1 }}
                />
                <Typography position={[40, 60]} className={'tooltipItem label'}>
                    key:
                </Typography>
                <Typography position={[70, 60]} className={'tooltipItem value'}>
                    value
                </Typography>
            </View>
        </Chart>
    )
}
