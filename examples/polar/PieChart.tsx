import {
    Chart,
    ThemeSpec,
    mergeTheme,
    DataComponentProps,
    Typography,
    MilestoneMotion,
    Circle,
    ContinuousAxisScale,
    useScales,
} from '@chsk/core'
import {
    isPieData,
    Origin,
    Pie,
    Slices,
    SliceLabelProps,
    PieProcessedDataItem,
    SliceLabels,
    PolarItem,
} from '@chsk/polar'
import { FilterInsetColor } from '@chsk/annotation'
import { downloadTheme } from '@chsk/themes'
import { alphabetGreek, generateUniformPopulation } from '../utils'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'

const ids = alphabetGreek.slice(0, 5).reverse()

export const generatePieData = () => {
    const sizes = generateUniformPopulation(ids.length, 1, 50)
        .map(Math.round)
        .sort((a, b) => a - b)
    return ids.map((id, i) => ({ id, data: sizes[i] }))
}

const customTheme: ThemeSpec = mergeTheme(downloadTheme, {
    circle: {
        bg: {
            fill: '#eeeeee',
            strokeWidth: 2,
            stroke: '#ffffff',
        },
    },
    path: {
        slice: {
            strokeWidth: 2,
        },
    },
    text: {
        sliceId: {
            fontSize: '14px',
            fontWeight: 400,
            fill: '#222222',
        },
        slicePercentage: {
            fontSize: '14px',
            fontWeight: 600,
            fill: '#444444',
        },
    },
})

// a circle with unit radius in view scale
export const BgCircle = () => {
    const rScale = useScales().x as ContinuousAxisScale
    const r = rScale(1) - rScale(0)
    return <Circle r={r} className={'bg'} />
}

// replacement of DataComponent - draws two text boxes
export const CustomLabelDataComponent = ({
    data,
    props,
}: DataComponentProps<PieProcessedDataItem, SliceLabelProps>) => {
    if (!data) return null
    const midAngle = (data.startAngle + data.endAngle) / 2
    const leftHemisphere = midAngle < 0 || midAngle > Math.PI
    const textAnchor = leftHemisphere ? 'end' : 'start'
    const percentage = Math.round((data?.proportion ?? 0) * 1000) / 10
    const rOffset = 8 + Math.abs(10 * Math.cos(midAngle))
    return (
        <PolarItem
            variant="polar-label"
            position={[props.outerRadius + rOffset, midAngle]}
            angleUnit={'radian'}
            setRole={false}
        >
            <Typography
                key={'slice-id'}
                position={[0, -8]}
                style={{ textAnchor }}
                className={'sliceId'}
            >
                {data?.id}
            </Typography>
            <Typography
                key={'slice-percentage'}
                position={[0, 8]}
                style={{ textAnchor }}
                className={'slicePercentage'}
            >
                {percentage + '%'}
            </Typography>
        </PolarItem>
    )
}

export const PieChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isPieData(rawData)) return null
    const ids = rawData.map(d => d.id)
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="pie-blues"
            size={[480, 360]}
            padding={[80, 60, 30, 60]}
            theme={customTheme}
        >
            <FilterInsetColor
                id={'darker-slice'}
                floodColor={'#222222'}
                floodOpacity={0.3}
                erodeR={2}
            />
            <Pie
                data={rawData}
                scaleColor={{
                    variant: 'categorical',
                    colors: 'Blues',
                }}
                scaleX={{ variant: 'linear', domain: [-1.2, 1.2] }}
                scaleY={{ variant: 'linear', domain: [-1.2, 1.2] }}
            >
                <Typography variant={'title'} position={[-30, -60]}>
                    Breakdown into five groups
                </Typography>
                <Origin>
                    <BgCircle />
                    {ids.map(id => (
                        <MilestoneMotion
                            initial={'invisible'}
                            exit={'invisible'}
                            initialOn={id}
                            key={'milestone-' + id}
                        >
                            <Slices
                                key={'slice-' + id}
                                ids={[id]}
                                style={{ stroke: '#ffffff' }}
                                modifiers={{
                                    onMouseEnter: { filter: 'url(#darker-slice)' },
                                    onMouseLeave: {},
                                }}
                            />
                            <SliceLabels
                                key={'slice-label-' + id}
                                ids={[id]}
                                dataComponent={CustomLabelDataComponent}
                            />
                        </MilestoneMotion>
                    ))}
                </Origin>
                <DownloadButtons position={[320, -62]} data image />
            </Pie>
        </Chart>
    )
}
