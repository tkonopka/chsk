import {
    Chart,
    Axis,
    AxisLabel,
    AxisTicks,
    Legend,
    LegendTitle,
    LegendColorScale,
    MilestoneMotion,
    Surface,
    useScales,
} from '@chsk/core'
import { HeatMap, HeatMapCells, HeatMapHighlight, isHeatMapData } from '@chsk/matrix'
import { generateHeatMapMatrixUniform } from './generators'
import { alphabetGreek } from '../utils'
import { MilestoneStory } from '../types'

const ids = alphabetGreek
export const generateBlockHeatMapData = () => {
    // completely random base matrix
    const result = generateHeatMapMatrixUniform(ids, ids, 0, 30, 0)
    // assign items into three groups
    const breakA = 5 + Math.floor(5 * Math.random())
    const breakB = ids.length - 5 - Math.floor(5 * Math.random())
    const setA = new Set<string>(ids.slice(0, breakA))
    const setB = new Set<string>(ids.slice(breakA, breakB))
    const setC = new Set<string>(ids.slice(breakB))
    const groupMultiplier = (idA: string, idB: string) => {
        if (setA.has(idA) && setA.has(idB)) return 70
        if (setB.has(idA) && setB.has(idB)) return 60
        if (setC.has(idA) && setC.has(idB)) return 50
        return 0
    }
    // add blocks
    ids.forEach((idA, i) => {
        ids.forEach((idB, j) => {
            if (i < j) return
            if (i === j) {
                result[i][idA] = 100
                return
            }
            const multiplier = groupMultiplier(idA, idB)
            const value = Number(result[i][idB]) + Math.random() * multiplier
            result[i][idB] = value
            result[j][idA] = value
        })
    })
    // set some cells to magic numbers to encode breaks between groups
    // (this is just for an example, not a complete cluster analysis)
    result[0][ids[breakA]] = 20
    result[0][ids[breakB]] = 20
    result[breakA][ids[0]] = 20
    result[breakB][ids[0]] = 20
    return result
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
            offset: 70,
        },
    },
    AxisTicks: {
        top: {
            labelRotate: -45,
        },
    },
}

export const BlockHeatMapChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isHeatMapData(rawData)) return null

    // look for magic number '20' to detect block boundaries
    const breaks = ids.map(id => (rawData[0][id] === 20 ? id : null)).filter(Boolean)
    const breakIndexes = [ids.indexOf(breaks[0] ?? 'alpha'), ids.indexOf(breaks[1] ?? 'alpha')]
    const idsA = ids.slice(0, breakIndexes[0])
    const idsB = ids.slice(breakIndexes[0], breakIndexes[1])
    const idsC = ids.slice(breakIndexes[1])

    return (
        <Chart
            data={chartData}
            fref={fref}
            id="blocks"
            size={[550, 470]}
            padding={[80, 120, 40, 80]}
            theme={customTheme}
        >
            <HeatMap
                data={rawData}
                keys={ids}
                scaleColor={{
                    variant: 'threshold',
                    colors: ['#ffffff', '#fee5d9', '#fcae91', '#fb6a4a', '#cb181d'],
                    domain: [0, 50, 80, 100],
                }}
            >
                <MilestoneMotion initialOn={'map'} initial={'invisible'}>
                    <HeatMapCells />
                </MilestoneMotion>
                <Surface style={{ stroke: '#222222', strokeWidth: 1, fill: '#ffffff00' }} />
                <Axis variant={'left'} label={'Replicate 1'} />
                <Axis variant={'top'}>
                    <AxisTicks
                        variant={'top'}
                        labelStyle={{ textAnchor: 'start', alignmentBaseline: 'middle' }}
                    />
                    <AxisLabel variant={'top'}>Replicate 2</AxisLabel>
                </Axis>
                <Legend
                    variant={'color'}
                    horizontal={false}
                    position={[360, 70]}
                    size={[60, 180]}
                    positionUnits={'absolute'}
                    sizeUnits={'absolute'}
                    anchor={[0, 0]}
                >
                    <LegendTitle position={[0, 8]} size={[60, 24]} padding={[0, 8, 0, 8]}>
                        R2 (%)
                    </LegendTitle>
                    <LegendColorScale
                        variant={'right'}
                        size={[9, 120]}
                        padding={[0, 8, 0, 8]}
                        position={[0, 30]}
                        gradientId={'grad-blocks'}
                    />
                </Legend>
                <MilestoneMotion
                    initialOn={'blockA'}
                    initial={'invisible'}
                    exitOn={'blockB'}
                    exit={'invisible'}
                >
                    <HeatMapHighlight
                        style={{ fill: '#222222', opacity: 0.8 }}
                        ids={idsA}
                        keys={idsA}
                        interactive={false}
                    />
                </MilestoneMotion>
                <MilestoneMotion
                    initialOn={'blockB'}
                    initial={'invisible'}
                    exitOn={'blockC'}
                    exit={'invisible'}
                >
                    <HeatMapHighlight
                        style={{ fill: '#222222', opacity: 0.8 }}
                        ids={idsB}
                        keys={idsB}
                        interactive={false}
                    />
                </MilestoneMotion>
                <MilestoneMotion
                    initialOn={'blockC'}
                    initial={'invisible'}
                    exitOn={'final'}
                    exit={'invisible'}
                >
                    <HeatMapHighlight
                        style={{ fill: '#222222', opacity: 0.8 }}
                        ids={idsC}
                        keys={idsC}
                        interactive={false}
                    />
                </MilestoneMotion>
                <MilestoneMotion initialOn={'final'} initial={'invisible'}>
                    <HeatMapHighlight style={{ fill: '#222222', opacity: 0.6 }} />
                </MilestoneMotion>
            </HeatMap>
        </Chart>
    )
}
