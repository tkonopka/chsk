import { m, domAnimation, LazyMotion } from 'framer-motion'
import {
    Chart,
    Axis,
    GridLines,
    MilestoneMotion,
    ThemeSpec,
    Typography,
    DataComponentProps,
    RectangleProps,
    useRawData,
    Path,
    useScales,
    mergeTheme,
    Tooltip,
    Rectangle,
    useTooltip,
    TooltipItem,
    RawDataContextProps,
} from '@chsk/core'
import {
    Bar,
    BarInteractiveDataItem,
    BarPreparedDataContextProps,
    Bars,
    useBarPreparedData,
} from '@chsk/band'
import { buttonTheme } from '@chsk/themes'
import { randomUniformValue, round4dp } from '../utils'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'
import { useMemo } from 'react'

const threshold = (v: number, threshold: number) => (v > threshold ? v : 0)
const acgt = ['A', 'C', 'G', 'T']

export const generateSequenceLogoBarData = () => {
    const n = 12
    const raw = Array(n)
        .fill(0)
        .map(() => randomUniformValue(0, 2))
    const bits = raw.map((v, index) => {
        if (index == 0 || index === n - 1) return v
        if (v > 1.5 || v < 0.2) return v
        return (raw[index] + 0.5 * raw[index - 1] + 0.5 * raw[index + 1]) / 2
    })

    const makePositionData = (index: number) => {
        const values = Array(4)
            .fill(0)
            .map(() => randomUniformValue(0, 1))
            .map(v => (v < 0.2 ? 0 : v * v * v * v))
            .map((v, index) => [v, index])
        values.sort((a, b) => b[0] - a[0])
        const normalization = bits[index] / values.reduce((total, v) => (total += v[0]), 0)
        return {
            id: String(index + 1),
            rank1: threshold(round4dp(values[0][0] * normalization), 0.03),
            rank2: threshold(round4dp(values[1][0] * normalization), 0.03),
            rank3: threshold(round4dp(values[2][0] * normalization), 0.03),
            rank4: threshold(round4dp(values[3][0] * normalization), 0.03),
            bases: values.map(v => acgt[v[1]]),
        }
    }
    return Array(n)
        .fill(0)
        .map((_, index) => makePositionData(index))
}

const keyMapping: Record<string, number> = { rank1: 0, rank2: 1, rank3: 2, rank4: 3 }

// paths obtained by converting glyphs into svg paths (font: OpenSans SemiBold)
const basePath: Record<string, string> = {
    A: 'm 9.09505,12.13776 -1.20716,-3.356901 h -4.62194 l -1.18236,3.356901 h -2.08359 l 4.52272,-12.13776 h 2.14974 l 4.52272,12.13776 z m -1.72806,-5.060156 -1.13275,-3.290755 q -0.12402,-0.330729 -0.34726,-1.041797 -0.21498,-0.711068 -0.29766,-1.041797 -0.22324,1.016992 -0.65319,2.224154 l -1.09141,3.150195 z',
    C: 'm 5.73815,1.694987 q -1.70326,0 -2.67891,1.207161 -0.97565,1.207161 -0.97565,3.332096 0,2.224154 0.93431,3.365169 0.94258,1.141016 2.72025,1.141016 0.76895,0 1.48828,-0.148828 0.71934,-0.157097 1.49655,-0.396875 v 1.694987 q -1.42213,0.537435 -3.22461,0.537435 -2.6541,0 -4.07624,-1.604037 -1.42213,-1.612304 -1.42213,-4.605403 0,-1.885156 0.68626,-3.299023 0.69453,-1.413868 2.00091,-2.166276 1.30638,-0.752409 3.06752,-0.752409 1.85208,0 3.42304,0.777213 l -0.71106,1.645378 q -0.61185,-0.289388 -1.29812,-0.504362 -0.67799,-0.223242 -1.4304,-0.223242 z',
    G: 'm 5.53971,5.70508 h 4.44831 v 6.06888 q -1.09141,0.35553 -2.10013,0.50436 -1.00046,0.14883 -2.16628,0.14883 -2.74505,0 -4.23333,-1.62058 -1.48828,-1.62884 -1.48828,-4.58886 0,-2.91869 1.67845,-4.56406 1.67845,-1.65365 4.62194,-1.65365 1.89342,0 3.58841,0.7276 l -0.69453,1.64538 q -1.47175,-0.67799 -2.94349,-0.67799 -1.93477,0 -3.05925,1.21543 -1.12447,1.21543 -1.12447,3.32382 0,2.21589 1.00872,3.37344 1.01699,1.14928 2.91868,1.14928 0.95912,0 2.05052,-0.23977 v -3.11713 h -2.50527 z',
    T: 'm 5.53144,12.088151 h -1.9761 v -10.393164 h -3.55534 v -1.694987 h 9.08678 v 1.694987 h -3.55534 z',
}
const baseDimension: Record<string, [number, number]> = {
    A: [11.19518, 12.13776],
    C: [9.1777335, 12.427148],
    G: [9.9880199, 12.42715],
    T: [9.0867796, 12.088151],
}

// get a letter code 'A', 'C', etc. from a data object holding id, key / rank
const getBaseLetter = (
    rawData: RawDataContextProps,
    preparedData: BarPreparedDataContextProps,
    data?: BarInteractiveDataItem
) => {
    const dataIndex = preparedData.seriesIndexes[data?.id ?? ''] ?? 0
    const dataKey = data?.key ?? preparedData.keys[0]
    const keyIndex = keyMapping[dataKey] ?? 0
    const base = (rawData.data[dataIndex]['bases'] as string[])[keyIndex ?? 0]
    return { base, baseIndex: acgt.indexOf(base) }
}

const LogoDataComponent = ({
    data,
    props,
}: DataComponentProps<BarInteractiveDataItem, RectangleProps>) => {
    const rawData = useRawData()
    const preparedData = useBarPreparedData()
    const colorScale = useScales().scales.color

    // use the "data" for the component to find the base (A, C, G, T) that it represents
    const { base, baseIndex } = getBaseLetter(rawData, preparedData, data)

    // extract svg properties for ACGT components
    const dim = baseDimension[base]
    const path = basePath[base]

    // create an animated letter/path
    const config = {
        translateX: props.x,
        translateY: props.y + props.height,
        scaleX: props.width / dim[0],
        scaleY: -props.height / dim[1],
        originX: 0,
        originY: 0,
    }
    return (
        <m.g initial={config} animate={config} key={'logo-' + data?.id + '-' + base}>
            <Path d={path} className={'logo'} style={{ fill: colorScale(baseIndex) }} />
        </m.g>
    )
}

const LogoTooltipItem = () => {
    const rawData = useRawData()
    const preparedData = useBarPreparedData()
    const { data } = useTooltip()
    const item = data.data?.[0]
    if (item === undefined) return null
    const { base, baseIndex } = useMemo(
        () => getBaseLetter(rawData, preparedData, item as BarInteractiveDataItem),
        [rawData, preparedData, item]
    )
    const value = 'data' in item ? Number(item['data']) : 0
    return (
        <TooltipItem
            key={'item-' + item.id + '-' + item.key}
            variant={'right'}
            position={[0, 0]}
            size={[120, 30]}
            padding={[8, 8, 8, 8]}
            item={item.id}
            label={base + ': ' + value + ' bits'}
            color={baseIndex}
            labelDistance={14}
        />
    )
}

const customTheme: ThemeSpec = mergeTheme(buttonTheme, {
    text: {
        axisLabel: {
            textAnchor: 'middle',
            dominantBaseline: 'auto',
        },
        lineLabel: {
            textAnchor: 'middle',
            fontWeight: 600,
            fill: '#444444',
        },
    },
    path: {
        default: {
            fillOpacity: 1,
        },
        logo: {
            strokeWidth: 0,
        },
    },
    AxisTicks: {
        bottom: {
            tickSize: 0,
        },
        left: {
            tickSize: 0,
        },
    },
    AxisLabel: {
        bottom: {
            offset: 48,
        },
    },
})

export const SequenceLogoBarChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="sequence-logo"
            size={[600, 300]}
            padding={[80, 40, 60, 75]}
            theme={customTheme}
        >
            <Bar
                variant={'stacked'}
                horizontal={false}
                keys={['rank4', 'rank3', 'rank2', 'rank1']}
                scaleIndex={{
                    variant: 'band',
                    padding: 0.0,
                    paddingOuter: 0.1,
                }}
                scaleValue={{
                    variant: 'linear',
                    domain: [0, 2],
                }}
                scaleColor={{
                    variant: 'categorical',
                    colors: ['#7fc29b', '#3f9cde', '#ffa047', '#e05263'],
                }}
                data={rawData}
            >
                <Typography variant={'title'} position={[0, -40]}>
                    Binding profile
                </Typography>
                <MilestoneMotion initialOn={'axes'}>
                    <GridLines variant={'y'} />
                    <Axis variant={'bottom'} label={'Position'} />
                    <Axis variant={'left'} label={'Bits'} />
                </MilestoneMotion>
                <MilestoneMotion initialOn={'data'}>
                    <LazyMotion features={domAnimation}>
                        <Bars dataComponent={LogoDataComponent} />
                        <Bars style={{ fillOpacity: 0 }} />
                    </LazyMotion>
                    <Tooltip>
                        <Rectangle
                            key={'surface'}
                            variant={'tooltip-surface'}
                            x={0}
                            y={0}
                            width={120}
                            height={30}
                            rx={1}
                            ry={1}
                            className={'tooltip surface'}
                        />
                        <LogoTooltipItem key={'tooltip-item'} />
                    </Tooltip>
                    <DownloadButtons position={[390, -45]} data image />
                </MilestoneMotion>
            </Bar>
        </Chart>
    )
}
