import { Chart, Surface, View, Rectangle, Typography } from '@chsk/core'
import { ThemeStory, themeStoryChartProps } from '../ThemeController'

export const PieceDownloadChart = ({ chartId, theme }: ThemeStory) => {
    return (
        <Chart id={chartId} {...themeStoryChartProps} theme={theme ?? undefined}>
            <Surface variant={'inner'} />
            <View>
                <Rectangle
                    x={60}
                    y={60}
                    width={80}
                    height={40}
                    style={{ fill: '#dd4444' }}
                    className={'download'}
                />
                <Typography position={[60, 120]} className={'download'}>
                    styled text
                </Typography>
            </View>
        </Chart>
    )
}
