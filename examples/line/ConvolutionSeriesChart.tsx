import {
    Chart,
    Axis,
    AxisTicks,
    GridLines,
    Typography,
    Legend,
    Tooltip,
    roundDecimalPlaces,
    SymbolProps,
    Circle,
    mergeTheme,
} from '@chsk/core'
import { isScatterData, Scatter, ScatterCurve, ScatterPoints, ScatterCrosshair } from '@chsk/xy'
import { generateRandomWalk } from './generators'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'
import { downloadTheme } from '@chsk/themes'

// generates monthly data with a yearly seasonal pattern
export const generateConvolutionSeriesData = () => {
    return [
        {
            id: 'alpha',
            data: generateRandomWalk(Math.floor(60), 0, 0.25).map(item => {
                return { x: item.x, y: roundDecimalPlaces(item.y, 3) }
            }),
        },
        {
            id: 'beta',
            data: generateRandomWalk(Math.floor(60), 0, 0.25).map(item => {
                return { x: item.x, y: roundDecimalPlaces(item.y, 3) }
            }),
        },
    ]
}

const customTheme = mergeTheme(downloadTheme, {
    rect: {
        tooltip: {
            fill: '#444444ee',
        },
    },
    text: {
        tooltipTitle: {
            fill: '#ffffff',
            fontSize: 14,
        },
        tooltipItem: {
            fill: '#ffffff',
            fontSize: 14,
        },
    },
    path: {
        scatterCurve: {
            fillOpacity: 0,
        },
    },
})

const LargerCircle = ({ r = 1, ...props }: SymbolProps) => {
    return <Circle r={2 * r} {...props} />
}

export const ConvolutionSeriesChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isScatterData(rawData)) return null
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="moving-average"
            size={[640, 400]}
            padding={[80, 100, 50, 50]}
            theme={customTheme}
        >
            <Scatter
                data={rawData}
                x={'x'}
                y={'y'}
                valueSize={3}
                scaleX={{
                    variant: 'linear',
                    domain: 'auto',
                    nice: false,
                }}
                scaleY={{
                    variant: 'linear',
                    domain: 'auto',
                }}
            >
                <Typography variant={'title'} position={[-30, -50]}>
                    Two time series (a.u.)
                </Typography>
                <Typography variant={'subtitle'} position={[-30, -28]}>
                    Lines represent a moving average of five time points
                </Typography>
                <GridLines variant={'y'} style={{ stroke: '#cccccc' }} />
                <Axis variant={'bottom'} label={'time (a.u.)'} />
                <Axis variant={'left'}>
                    <AxisTicks variant={'left'} labelFormat={v => Number(v).toFixed(1)} />
                </Axis>
                <ScatterPoints symbolStyle={{ opacity: 0.5 }} />
                <ScatterCurve
                    curve={'Natural'}
                    style={{ strokeWidth: 4 }}
                    convolutionMask={[1, 1, 1, 1, 1]}
                    downsampleFactor={0.5}
                />
                <ScatterCrosshair
                    symbol={LargerCircle}
                    symbolStyle={{ strokeWidth: 1.5, stroke: '#000000' }}
                    style={{ strokeWidth: 0 }}
                />
                <Legend
                    position={[1, 1]}
                    positionUnits={'relative'}
                    translate={[20, 0]}
                    size={[100, 100]}
                    sizeUnits={'absolute'}
                    horizontal={false}
                    anchor={[0, 1]}
                    padding={[0, 0, 0, 0]}
                    symbol={Circle}
                    r={9}
                    itemSize={[180, 18]}
                    itemPadding={[2, 2, 2, 2]}
                    title={'Series'}
                    firstOffset={[0, 6]}
                />
                <Tooltip
                    translate={[16, -20]}
                    itemSize={[140, 28]}
                    anchor={[0, 1]}
                    symbol={Circle}
                />
                <DownloadButtons position={[480, -50]} data image />
            </Scatter>
        </Chart>
    )
}
