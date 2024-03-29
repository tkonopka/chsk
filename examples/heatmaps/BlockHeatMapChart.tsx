import { useState } from 'react'
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
    Tooltip,
} from '@chsk/core'
import {
    HeatMap,
    HeatMapCells,
    HeatMapRectangle,
    HeatMapHighlight,
    isHeatMapData,
} from '@chsk/matrix'
import { generateHeatMapMatrixUniform } from './generators'
import { alphabetGreek, round3dp } from '../utils'
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
            const rowI = result[i]
            const rowJ = result[j]
            if (!rowI || !rowJ) return
            if (i === j) {
                rowI[idA] = 100
                return
            }
            const multiplier = groupMultiplier(idA, idB)
            const value = round3dp(Number(rowI[idB]) + Math.random() * multiplier)
            rowI[idB] = value
            rowJ[idA] = value
        })
    })
    // set some cells to magic numbers to encode breaks between groups
    // (this is just for an example, not a complete cluster analysis)
    const row0 = result[0]
    const rowA = result[breakA]
    const rowB = result[breakB]
    if (row0) row0[ids[breakA] as string] = 20
    if (row0) row0[ids[breakB] as string] = 20
    if (rowA) rowA[ids[0] as string] = 20
    if (rowB) rowB[ids[0] as string] = 20
    return result
}

const customTheme = {
    rect: {
        legendColorScale: {
            stroke: '#222222',
            strokeWidth: 1,
        },
        heatmapHighlight: {
            opacity: 0.8,
            fill: '#222222',
        },
    },
    AxisLabel: {
        top: {
            distance: 60,
        },
        left: {
            distance: 70,
        },
    },
    AxisTicks: {
        top: {
            labelAngle: -45,
        },
    },
}

export const BlockHeatMapChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isHeatMapData(rawData)) return null

    // look for magic number '20' to detect block boundaries
    const breaks = ids.map(id => (rawData[0]?.[id] === 20 ? id : null)).filter(Boolean)
    const breakIndexes = [ids.indexOf(breaks[0] ?? 'alpha'), ids.indexOf(breaks[1] ?? 'alpha')]
    const idsA = ids.slice(0, breakIndexes[0])
    const idsB = ids.slice(breakIndexes[0], breakIndexes[1])
    const idsC = ids.slice(breakIndexes[1])

    const [blockIds, setBlockIds] = useState<string[]>(idsA)

    return (
        <Chart
            data={chartData}
            fref={fref}
            id="blocks"
            size={[570, 500]}
            padding={[80, 120, 70, 100]}
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
                <MilestoneMotion enterOn={'map'}>
                    <HeatMapCells component={HeatMapRectangle} />
                </MilestoneMotion>
                <Surface style={{ stroke: '#222222', strokeWidth: 1, fill: '#ffffff00' }} />
                <Axis variant={'left'} label={'Replicate 1'} />
                <Axis variant={'top'}>
                    <AxisTicks labelStyle={{ textAnchor: 'start', dominantBaseline: 'middle' }} />
                    <AxisLabel>Replicate 2</AxisLabel>
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
                    <LegendTitle position={[0, 8]} size={[60, 24]}>
                        R2 (%)
                    </LegendTitle>
                    <LegendColorScale
                        variant={'right'}
                        size={[9, 120]}
                        position={[0, 30]}
                        gradientId={'grad-blocks'}
                    />
                </Legend>
                <MilestoneMotion enterOn={'blockA'} exitOn={'final'}>
                    <HeatMapHighlight ids={blockIds} keys={blockIds} interactive={false} />
                </MilestoneMotion>
                <MilestoneMotion
                    enterOn={'blockA'}
                    onEnter={() => setBlockIds(idsA)}
                    onExit={() => setBlockIds(idsB)}
                />
                <MilestoneMotion
                    enterOn={'blockB'}
                    onEnter={() => setBlockIds(idsB)}
                    onExit={() => setBlockIds(idsA)} // on exit required to support backward in milestone navigation
                />
                <MilestoneMotion
                    enterOn={'blockC'}
                    onEnter={() => setBlockIds(idsC)}
                    onExit={() => setBlockIds(idsB)} // on exit required to support backward in milestone navigation
                />
                <MilestoneMotion enterOn={'final'}>
                    <HeatMapHighlight edgeAnimation={true} style={{ opacity: 0.6 }} />
                    <Tooltip
                        offset={[0, 18]}
                        anchor={[0.5, 0]}
                        padding={[4, 0, 4, 0]}
                        itemSize={[140, 26]}
                        itemPadding={[4, 8, 4, 8]}
                    />
                </MilestoneMotion>
            </HeatMap>
        </Chart>
    )
}
