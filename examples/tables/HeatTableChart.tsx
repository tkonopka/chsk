import {
    Axis,
    AxisTicks,
    Chart,
    GridLines,
    Counter,
    ThemeSpec,
    mergeTheme,
    Square,
    WithId,
    MilestoneMotion,
    Typography,
    Tooltip,
    TooltipData,
    TooltipDataItem,
} from '@chsk/core'
import {
    HeatMap,
    HeatMapCellProps,
    HeatMapCells,
    HeatMapHighlight,
    HeatMapDataItem,
} from '@chsk/matrix'
import { downloadTheme } from '@chsk/themes'
import { MilestoneStory } from '../types'
import { alphabetGreek, randomUniformValue } from '../utils'
import { DownloadButtons } from '../navigation'

const ids = alphabetGreek.slice(0, 6)
const keys = ['A', 'B', 'C', 'D', 'E', 'F']
export const generateHeatTableData = () => {
    const normalize = (x: number[]): number[] => {
        const sum = x.reduce((prev, value) => prev + value, 0)
        return x.map(value => Math.round((100 * value) / sum))
    }
    const A = normalize(ids.map(() => randomUniformValue(0, 20)))
    const B = normalize(ids.map(() => randomUniformValue(0, 20)))
    const C = normalize(ids.map(() => randomUniformValue(0, 20)))
    const D = normalize(ids.map(() => randomUniformValue(0, 20)))
    const E = normalize(ids.map(() => randomUniformValue(0, 20)))
    const F = normalize(ids.map(() => randomUniformValue(0, 20)))
    return ids.map((id, index) => ({
        id,
        A: A[index],
        B: B[index],
        C: C[index],
        D: D[index],
        E: E[index],
        F: F[index],
    }))
}

const idLabels: Record<string, string> = {
    alpha: 'Option 1',
    beta: 'Option 2',
    gamma: 'Option 3',
    delta: 'Option 4',
    epsilon: 'Option 5',
    zeta: 'Option 6',
}

const customTheme: ThemeSpec = mergeTheme(downloadTheme, {
    AxisTicks: {
        bottom: {
            tickSize: 0,
        },
        left: {
            tickSize: 0,
        },
    },
    line: {
        grid: {
            strokeWidth: '3px',
            stroke: '#cccccc',
            strokeLinecap: 'round',
            strokeDasharray: '1 8',
        },
    },
    text: {
        'counter.cell': {
            fontSize: '12px',
            fontWeight: 600,
            strokeWidth: 0,
            textAnchor: 'middle',
            dominantBaseline: 'middle',
        },
        'tickLabel.bottom': {
            fontSize: '18px',
            fontWeight: 600,
            fill: '#666',
        },
        'tickLabel.left': {
            fontSize: '15px',
            fontWeight: 600,
            fill: '#666',
            textAnchor: 'start',
        },
        'axisLabel.bottom': {
            fontSize: '15px',
        },
        title: {
            fontSize: '22px',
        },
        subtitle: {
            fontSize: '15px',
            fontWeight: 300,
            fill: '#666',
        },
        source: {
            fill: '#444444',
            fontSize: '11px',
            dominantBaseline: 'middle',
        },
    },
})

// a custom component for displaying heatmap cells - a symbol and a counter
export const HeatMapSquareCounter = ({
    x,
    y,
    width,
    height,
    className,
    style,
    cellSize,
}: HeatMapCellProps) => {
    return (
        <>
            <Square
                setRole={false}
                variant={undefined}
                cx={x}
                cy={y}
                r={Math.min(width, height) / 2}
                style={style}
                className={className}
            />
            <Counter
                setRole={false}
                position={[x, y]}
                size={[width, height]}
                style={{ ...style, fill: '#fff' }}
                className={className}
                format={v => (v > 9 ? v + '%' : '')}
            >
                {cellSize}
            </Counter>
        </>
    )
}

const customTitleFormat = (x: TooltipData) => {
    const data = x.data?.[0]
    if (!data) return ''
    return 'id' in data ? idLabels[data['id']] : ''
}
const customLabelFormat = (x: TooltipDataItem) => {
    return x['key'] + ': ' + ('size' in x ? x['size'] : '') + '%'
}

export const HeatTableChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    const colorData: Array<HeatMapDataItem> = rawData.map(seriesData => {
        const item: WithId & Record<string, string> = { id: seriesData.id }
        keys.map(k => {
            item[k] = k
        })
        return item
    })
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="survey-table"
            size={[680, 520]}
            padding={[90, 40, 80, 90]}
            theme={customTheme}
        >
            <HeatMap
                data={colorData}
                dataSize={rawData}
                keys={keys}
                scaleColor={{
                    variant: 'categorical',
                    colors: 'Category10',
                    domain: keys,
                }}
                scaleSize={{
                    variant: 'sqrt',
                    domain: [0, 'auto'],
                    size: 'auto',
                }}
            >
                <MilestoneMotion initial={'invisible'} initialOn={'grid'}>
                    <GridLines variant={'x'} />
                    <Axis variant={'bottom'}>
                        <AxisTicks variant={'bottom'} labelOffset={10} />
                    </Axis>
                    <Axis variant={'left'}>
                        <AxisTicks
                            variant={'left'}
                            labelOffset={80}
                            labelFormat={v => String(idLabels[String(v)])}
                        />
                    </Axis>
                </MilestoneMotion>
                <MilestoneMotion initial={'invisible'} initialOn={'A'}>
                    <HeatMapCells cell={HeatMapSquareCounter} keys={['A']} />
                </MilestoneMotion>
                <MilestoneMotion initial={'invisible'} initialOn={'B'}>
                    <HeatMapCells cell={HeatMapSquareCounter} keys={['B']} />
                </MilestoneMotion>
                <MilestoneMotion initial={'invisible'} initialOn={'C'}>
                    <HeatMapCells cell={HeatMapSquareCounter} keys={['C']} />
                </MilestoneMotion>
                <MilestoneMotion initial={'invisible'} initialOn={'D'}>
                    <HeatMapCells cell={HeatMapSquareCounter} keys={['D']} />
                </MilestoneMotion>
                <MilestoneMotion initial={'invisible'} initialOn={'E'}>
                    <HeatMapCells cell={HeatMapSquareCounter} keys={['E']} />
                </MilestoneMotion>
                <MilestoneMotion initial={'invisible'} initialOn={'F'}>
                    <HeatMapCells cell={HeatMapSquareCounter} keys={['F']} />
                    <HeatMapHighlight style={{ opacity: 0 }} />
                </MilestoneMotion>
                <MilestoneMotion initial={'invisible'} initialOn={'title'}>
                    <Typography variant={'title'} position={[-80, -60]}>
                        What is the main reason for &lsquo;X&rsquo;?
                    </Typography>
                </MilestoneMotion>
                <MilestoneMotion initial={'invisible'} initialOn={'subtitle'}>
                    <Typography variant={'subtitle'} position={[-80, -32]}>
                        Responders from six domains were asked to pick one answer from among six
                        options.
                    </Typography>
                </MilestoneMotion>
                <MilestoneMotion initial={'invisible'} initialOn={'download'}>
                    <Typography variant={'source'} position={[-80, 420]}>
                        Source: synthetic data.
                    </Typography>
                    <DownloadButtons position={[450, 420]} data image />
                </MilestoneMotion>
                <Tooltip
                    translate={[0, -15]}
                    padding={[4, 0, 4, 0]}
                    itemSize={[80, 26]}
                    itemPadding={[4, 8, 4, 8]}
                    titleFormat={customTitleFormat}
                    labelFormat={customLabelFormat}
                />
            </HeatMap>
        </Chart>
    )
}
