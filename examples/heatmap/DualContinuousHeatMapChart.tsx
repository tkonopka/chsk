import {
    Chart,
    Axis,
    AxisLabel,
    AxisTicks,
    Legend,
    LegendTitle,
    LegendColorScale,
    MilestoneMotion,
    WithId,
    ColorScaleProps,
    Tooltip,
    TooltipProps,
    useTooltip,
    createColorScale,
} from '@chsk/core'
import { HeatMap, HeatMapCells, HeatMapHighlight } from '@chsk/matrix'
import { interpolatePurples, interpolateBlues, schemeAccent } from 'd3-scale-chromatic'
import { generateHeatMapMatrixUniform, generateHeatMapRowCategorical } from './generators'
import {
    alphabetGreek,
    alphabetUppercase,
    alphabetUppercaseConsonants,
    alphabetUppercaseVowels,
} from '../utils'
import { MilestoneStory } from '../types'

const keys = alphabetGreek
const groups = ['A', 'B', 'C', 'D', 'E']
export const generateDualContinuousHeatMapData = () => {
    const group: WithId & Record<string, string | number> = generateHeatMapRowCategorical(
        'group',
        keys,
        groups,
        true
    )
    return [group]
        .concat(generateHeatMapMatrixUniform(alphabetUppercaseVowels, keys, 0, 10, 1))
        .concat(generateHeatMapMatrixUniform(alphabetUppercaseConsonants, keys, 0, 10, 1))
}

const customTheme = {
    rect: {
        legendColorScale: {
            stroke: '#222222',
            strokeWidth: 1,
        },
    },
    AxisLabel: {
        top: {
            distance: 60,
        },
        left: {
            distance: 40,
        },
    },
    AxisTicks: {
        top: {
            labelAngle: -45,
        },
    },
}

const scaleBlues: ColorScaleProps = {
    variant: 'sequential' as const,
    colors: interpolateBlues,
    domain: [0, 10],
}
const scalePurples: ColorScaleProps = {
    variant: 'sequential' as const,
    colors: interpolatePurples,
    domain: [0, 10],
}
const scaleSize: [number, number] = [13, 80]
const purpleScale = createColorScale(scalePurples)

const CustomTooltip = (props: TooltipProps) => {
    const { data: tooltip } = useTooltip()
    const data = tooltip?.data?.[0]
    if (!data) return null
    if (data.id === 'group') return null
    if (alphabetUppercaseConsonants.indexOf(data.id) >= 0) {
        data.color = 'value' in data ? purpleScale(Number(data['value'])) : purpleScale(0)
    }
    return <Tooltip {...props} />
}

export const DualContinuousHeatMapChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="dual-continuous"
            size={[640, 480]}
            padding={[80, 140, 40, 80]}
            theme={customTheme}
        >
            <HeatMap
                data={rawData}
                keys={keys}
                scaleColor={scaleBlues}
                scaleY={{
                    variant: 'band',
                    padding: 0,
                    extraPadding: { A: 0.5, B: 0.5 },
                }}
            >
                <MilestoneMotion initialOn={'measurements'} initial={'invisible'}>
                    <Axis variant={'left'} label={'Measurements'} ticks={alphabetUppercase} />
                </MilestoneMotion>
                <MilestoneMotion initialOn={'top'}>
                    <Axis variant={'top'}>
                        <AxisTicks
                            variant={'top'}
                            labelStyle={{ textAnchor: 'start', dominantBaseline: 'middle' }}
                        />
                        <AxisLabel variant={'top'}>Samples</AxisLabel>
                    </Axis>
                </MilestoneMotion>
                <MilestoneMotion initialOn={'categorical'}>
                    <Axis variant={'left'} label={''} ticks={['group']} />
                    <HeatMapCells
                        ids={['group']}
                        scaleColor={{
                            variant: 'categorical',
                            domain: groups,
                            colors: schemeAccent,
                        }}
                    >
                        <Legend
                            variant={'list'}
                            horizontal={false}
                            position={[430, -4]}
                            size={[60, 180]}
                            positionUnits={'absolute'}
                            sizeUnits={'absolute'}
                            itemSize={[60, 16]}
                            itemPadding={[1, 4, 1, 4]}
                            anchor={[0, 0]}
                            title={'Groups'}
                        />
                    </HeatMapCells>
                </MilestoneMotion>
                <MilestoneMotion initialOn={'vowels'} initial={'invisible'}>
                    <HeatMapCells ids={alphabetUppercaseVowels} scaleColor={scaleBlues}>
                        <Legend
                            variant={'color'}
                            horizontal={false}
                            position={[430, 225]}
                            size={[60, 110]}
                            positionUnits={'absolute'}
                            sizeUnits={'absolute'}
                            anchor={[0, 1]}
                        >
                            <LegendTitle position={[0, 8]} size={[60, 24]}>
                                Score (vowels)
                            </LegendTitle>
                            <LegendColorScale
                                key={'legend-color-scale'}
                                variant={'right'}
                                size={scaleSize}
                                position={[1, 30]}
                                gradientId={'grad-vowels'}
                            />
                        </Legend>
                    </HeatMapCells>
                </MilestoneMotion>
                <MilestoneMotion initialOn={'consonants'}>
                    <HeatMapCells ids={alphabetUppercaseConsonants} scaleColor={scalePurples}>
                        <Legend
                            variant={'color'}
                            horizontal={false}
                            position={[430, 380]}
                            size={[60, 130]}
                            positionUnits={'absolute'}
                            sizeUnits={'absolute'}
                            anchor={[0, 1]}
                        >
                            <LegendTitle position={[0, 8]} size={[60, 24]} padding={[0, 8, 0, 8]}>
                                Score (consonants)
                            </LegendTitle>
                            <LegendColorScale
                                key={'legend-color-scale'}
                                variant={'right'}
                                size={scaleSize}
                                padding={[0, 4, 0, 4]}
                                position={[0, 30]}
                                gradientId={'grad-consonants'}
                            />
                        </Legend>
                    </HeatMapCells>
                    <HeatMapHighlight style={{ fill: '#222222', opacity: 0.6 }} />
                    <CustomTooltip
                        itemSize={[120, 26]}
                        itemPadding={[4, 8, 4, 8]}
                        padding={[4, 0, 2, 0]}
                    />
                </MilestoneMotion>
            </HeatMap>
        </Chart>
    )
}
