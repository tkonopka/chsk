import { Chart, Typography, ThemeSpec, mergeThemes, LabelProps } from '@chsk/core'
import {
    Venn,
    VennSets,
    isVennData,
    VennIntersectionLabels,
    VennPreparedDataItem,
    VennProps,
} from '@chsk/set'
import { Paragraph } from '@chsk/annotation'
import { buttonTheme, fontSystemUITheme } from '@chsk/themes'
import { interpolateLab, interpolateRgb } from 'd3-interpolate'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'

export const generateTextSetData = () => {
    return [
        { id: 'R', data: [1, 2, 4, 5], size: 1 },
        { id: 'G', data: [2, 3, 5, 6], size: 1 },
        { id: 'B', data: [4, 5, 6, 7], size: 1 },
    ]
}

const customColors: string[] = ['#e41a1c', '#4daf4a', '#377eb8']

const customTheme: ThemeSpec = mergeThemes([
    buttonTheme,
    fontSystemUITheme,
    {
        path: {
            default: {
                fillOpacity: 1,
                strokeWidth: 1.5,
            },
        },
        text: {
            default: {
                fill: '#222222',
            },
            title: {
                textAnchor: 'middle',
            },
            subtitle: {
                textAnchor: 'middle',
            },
            vs: {
                textAnchor: 'middle',
                fontSize: '16px',
            },
            paragraph: {
                fill: '#f4f4f4',
            },
        },
    },
])

// custom interpolation functions for colors
const interpolationRgb = (c1: string, c2: string, c3?: string) => {
    if (c3 === undefined) return interpolateRgb(c1, c2)(0.5)
    const intermediate = interpolateRgb(c1, c2)(0.5)
    return interpolateRgb(intermediate, c3)(1.0 / 3)
}
const interpolationLab = (c1: string, c2: string, c3?: string) => {
    if (c3 === undefined) return interpolateLab(c1, c2)(0.5)
    const intermediate = interpolateLab(c1, c2)(0.5)
    return interpolateLab(intermediate, c3)(1.0 / 3)
}

// display color names and color combinations
const customFormat = (x: string | number, item?: VennPreparedDataItem) => {
    if (+x < 0 || !item) return '' // does not happen, but satisfies ts warning
    if (item.id === 'R') return 'red'
    if (item.id === 'G') return 'green'
    if (item.id === 'B') return 'blue'
    if (item.id === 'R G B') return 'red + green + blue'
    if (item.id === 'R G') return 'red + green'
    if (item.id === 'R B') return 'red + blue'
    if (item.id === 'G B') return 'green + blue'
    return ''
}

// wrapper to position paragraph vertically center-aligned
const CustomParagraph = ({ children, ...props }: LabelProps) => {
    return (
        <Paragraph {...props} size={[40, 12]} align={0.5}>
            {children}
        </Paragraph>
    )
}

// A venn diagram with some intersection labels slightly offset for readability
const CustomVenn = (props: VennProps) => {
    return (
        <Venn {...props}>
            <VennSets style={{ stroke: '#222222' }} />
            <VennIntersectionLabels
                ids={['R', 'G', 'B', 'R G B']}
                component={CustomParagraph}
                format={customFormat}
            />
            <VennIntersectionLabels
                ids={['R G']}
                component={CustomParagraph}
                format={customFormat}
                offset={[0, 2.8]}
            />
            <VennIntersectionLabels
                ids={['G B']}
                component={CustomParagraph}
                format={customFormat}
                offset={[-2, -2]}
            />
            <VennIntersectionLabels
                ids={['R B']}
                component={CustomParagraph}
                format={customFormat}
                offset={[2, -2]}
            />
        </Venn>
    )
}

export const TextSetChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isVennData(rawData)) return null
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="text-sets"
            size={[640, 320]}
            padding={[80, 40, 40, 40]}
            theme={customTheme}
        >
            <Typography variant={'title'} position={[140, -50]}>
                RGB Interpolation
            </Typography>
            <Typography variant={'vs'} position={[280, -50]}>
                vs.
            </Typography>
            <Typography variant={'title'} position={[420, -50]}>
                LAB Interpolation
            </Typography>
            <Typography variant={'subtitle'} position={[420, -30]}>
                (This is the library default)
            </Typography>
            <CustomVenn
                container={{
                    position: [0, 0],
                    positionUnits: 'relative',
                    size: [0.5, 1],
                    sizeUnits: 'relative',
                }}
                data={rawData}
                interpolation={interpolationRgb}
                separation={0.35}
                scaleColor={{
                    variant: 'categorical',
                    colors: customColors,
                    size: 3,
                }}
            />
            <CustomVenn
                container={{
                    position: [0.5, 0],
                    positionUnits: 'relative',
                    size: [0.5, 1],
                    sizeUnits: 'relative',
                }}
                data={rawData}
                interpolation={interpolationLab}
                separation={0.35}
                scaleColor={{
                    variant: 'categorical',
                    colors: customColors,
                    size: 3,
                }}
            />
            <DownloadButtons position={[470, 220]} image />
        </Chart>
    )
}
