import {
    Chart,
    Circle,
    Axis,
    AxisLabel,
    AxisTicks,
    GridLines,
    MilestoneMotion,
    Typography,
    Legend,
    LegendItem,
    Rectangle,
    Tooltip,
    TooltipDataItem,
    NumericPositionSpec,
    X,
    Y,
    ThemeSpec,
} from '@chsk/core'
import { Segment } from '@chsk/annotation'
import {
    isScatterData,
    Scatter,
    ScatterErrors,
    ScatterPoints,
    ScatterCurve,
    ScatterCrosshair,
} from '@chsk/xy'
import { MilestoneStory } from '../types'
import { generateUniformPopulation, round4dp } from '../utils'

export const generateErrorsData = () => {
    const n = 10
    const xNoise = generateUniformPopulation(n, -0.4, 0.4)
    const xValues = Array(n)
        .fill(0)
        .map((_, i) => i + 1 + xNoise[i])
    const xErrors = generateUniformPopulation(n, 0.2, 0.4)
    const yErrors = generateUniformPopulation(n, 0.05, 0.12)
    const data = xValues.map((x, i) => ({
        x: round4dp(x),
        y: round4dp(Math.log(x)),
        xmin: x - xErrors[i],
        xmax: x + xErrors[i],
        ymin: Math.log(x) - Math.max(0.1, Math.log(x) * yErrors[i]),
        ymax: Math.log(x) + Math.max(0.1, Math.log(x) * yErrors[i]),
    }))
    return [{ id: 'A', data }]
}

const customTheme: ThemeSpec = {
    line: {
        scatterErrors: {
            strokeWidth: 2,
        },
    },
    g: {
        'legendItem:hover': {
            cursor: 'auto',
        },
    },
    path: {
        scatterCurve: {
            pointerEvents: 'none',
            fillOpacity: 0,
        },
    },
}
const fitStyle = {
    strokeWidth: 4,
    strokeDasharray: 5,
}
const customTooltipLabel = (x: TooltipDataItem) => {
    const point: NumericPositionSpec = 'point' in x ? (x['point'] as NumericPositionSpec) : [0, 0]
    return '[' + point[X] + ', ' + point[Y] + ']'
}

export const ErrorsChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isScatterData(rawData)) return null
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="error-bars"
            size={[600, 480]}
            padding={[80, 40, 60, 60]}
            theme={customTheme}
        >
            <Scatter
                data={rawData}
                x={'x'}
                y={'y'}
                valueSize={4}
                scaleX={{
                    variant: 'linear',
                    domain: 'auto',
                    nice: 4,
                }}
                scaleY={{
                    variant: 'linear',
                    domain: 'auto',
                    nice: 4,
                }}
                scaleColor={{
                    variant: 'categorical',
                    colors: ['#666666', '#aaaaaa'],
                }}
            >
                <MilestoneMotion initialOn={'axes'}>
                    <Typography variant={'title'} position={[-50, -50]}>
                        Empirical measurements of A and B
                    </Typography>
                    <GridLines variant={'x'} values={24} />
                    <GridLines variant={'y'} values={24} />
                    <Axis variant={'bottom'}>
                        <AxisLabel variant={'bottom'}>A (a.u.)</AxisLabel>
                        <AxisTicks variant={'bottom'} ticks={6} />
                    </Axis>
                    <Axis variant={'left'}>
                        <AxisLabel variant={'left'}>B (a.u.)</AxisLabel>
                        <AxisTicks variant={'left'} ticks={6} />
                    </Axis>
                </MilestoneMotion>
                <MilestoneMotion initialOn={'points'}>
                    <Typography variant={'subtitle'} position={[-50, -30]}>
                        Points represent summaries of multiple independent measurements
                    </Typography>
                    <ScatterErrors variant={'x'} lower={'xmin'} upper={'xmax'} capWidth={6} />
                    <ScatterErrors variant={'y'} lower={'ymin'} upper={'ymax'} capWidth={6} />
                    <ScatterPoints />
                </MilestoneMotion>
                <MilestoneMotion initialOn={'curve'}>
                    <ScatterCurve
                        curve={'MonotoneX'}
                        convolutionMask={[0.5, 1, 0.5]}
                        convolutionOffset={-1}
                        style={fitStyle}
                    />
                    <ScatterCrosshair
                        style={{ stroke: '#dd0000', strokeWidth: 0.5 }}
                        symbolStyle={{ fill: '#dd0000' }}
                    />
                </MilestoneMotion>
                <MilestoneMotion initialOn={'legend'}>
                    <Legend
                        position={[0.96, 0.96]}
                        positionUnits={'relative'}
                        size={[152, 60]}
                        sizeUnits={'absolute'}
                        anchor={[1, 1]}
                        padding={[8, 8, 8, 8]}
                    >
                        <Rectangle
                            x={0}
                            y={0}
                            width={152}
                            height={60}
                            style={{
                                stroke: '#666666',
                                strokeWidth: 1,
                                fill: '#ffffff',
                            }}
                        />
                        <LegendItem
                            variant={'right'}
                            position={[1, 4]}
                            padding={[8, 8, 8, 8]}
                            size={[150, 24]}
                            symbol={Circle}
                            r={5}
                            item={'A'}
                            label={'Measurements'}
                            labelDistance={13}
                            interactive={false}
                        />
                        <LegendItem
                            variant={'right'}
                            position={[1, 28]}
                            padding={[8, 8, 8, 8]}
                            size={[150, 24]}
                            symbol={Segment}
                            r={6}
                            item={'A'}
                            label={'Moving average'}
                            labelDistance={12}
                            symbolStyle={fitStyle}
                            interactive={false}
                        />
                    </Legend>
                </MilestoneMotion>
                <Tooltip
                    offset={[16, -16]}
                    anchor={[0, 1]}
                    size={[130, 30]}
                    title={''}
                    labelFormat={customTooltipLabel}
                />
            </Scatter>
        </Chart>
    )
}
