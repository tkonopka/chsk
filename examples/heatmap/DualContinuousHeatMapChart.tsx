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
} from '@chsk/core'
import { HeatMap, HeatMapCells, HeatMapHighlight } from '@chsk/matrix'
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
            offset: 60,
        },
        left: {
            offset: 40,
        },
    },
    AxisTicks: {
        top: {
            labelRotate: -45,
        },
    },
}

const scaleBlues: ColorScaleProps = {
    variant: 'sequential' as const,
    colors: 'Blues' as const,
    domain: [0, 10],
}
const scalePurples: ColorScaleProps = {
    variant: 'sequential' as const,
    colors: 'Purples' as const,
    domain: [0, 10],
}
const scaleSize: [number, number] = [13, 80]

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
                <MilestoneMotion initialOn={'top'} initial={'invisible'}>
                    <Axis variant={'top'}>
                        <AxisTicks
                            variant={'top'}
                            labelStyle={{ textAnchor: 'start', dominantBaseline: 'middle' }}
                        />
                        <AxisLabel variant={'top'}>Samples</AxisLabel>
                    </Axis>
                </MilestoneMotion>
                <MilestoneMotion initialOn={'categorical'} initial={'invisible'}>
                    <Axis variant={'left'} label={''} ticks={['group']} />
                    <HeatMapCells
                        ids={['group']}
                        scaleColor={{
                            variant: 'categorical',
                            domain: groups,
                            colors: 'Accent',
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
                            <LegendTitle position={[0, 8]} size={[60, 24]} padding={[0, 8, 0, 8]}>
                                Score (vowels)
                            </LegendTitle>
                            <LegendColorScale
                                key={'legend-color-scale'}
                                variant={'right'}
                                size={scaleSize}
                                padding={[0, 8, 0, 8]}
                                position={[0, 30]}
                                gradientId={'grad-vowels'}
                            />
                        </Legend>
                    </HeatMapCells>
                </MilestoneMotion>
                <MilestoneMotion initialOn={'consonants'} initial={'invisible'}>
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
                                padding={[0, 8, 0, 8]}
                                position={[0, 30]}
                                gradientId={'grad-consonants'}
                            />
                        </Legend>
                    </HeatMapCells>
                    <HeatMapHighlight style={{ fill: '#222222', opacity: 0.6 }} />
                </MilestoneMotion>
            </HeatMap>
        </Chart>
    )
}
