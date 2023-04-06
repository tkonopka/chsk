import {
    Chart,
    Axis,
    AxisLabel,
    AxisTicks,
    Legend,
    LegendTitle,
    LegendColorScale,
    Tooltip,
} from '@chsk/core'
import { HeatMap, HeatMapCells, HeatMapHighlight, isHeatMapData } from '@chsk/matrix'
import { interpolateReds } from 'd3-scale-chromatic'
import { generateHeatMapMatrixUniform } from './generators'
import { alphabetGreek, round3dp } from '../utils'
import { MilestoneStory } from '../types'

const ids = alphabetGreek
export const generateTriangularHeatMapData = () => {
    // completely random base matrix
    const result = generateHeatMapMatrixUniform(ids, ids, 0, 30, 0)
    // assign items into groups
    const breakA = 5 + Math.floor(5 * Math.random())
    const breakB = ids.length - 5 - Math.floor(5 * Math.random())
    const setA = new Set<string>(ids.slice(0, breakA))
    const setB = new Set<string>(ids.slice(breakA, breakB))
    const groupMultiplier = (idA: string, idB: string) => {
        if (setA.has(idA) && setA.has(idB)) return 70
        if (setB.has(idA) && setB.has(idB)) return 60
        return 0
    }
    // add blocks
    ids.forEach((idA, i) => {
        ids.forEach((idB, j) => {
            if (i < j) return
            const multiplier = groupMultiplier(idA, idB)
            const value = round3dp(Number(result[i][idB]) + Math.random() * multiplier)
            result[i][idB] = value
            result[j][idA] = value
        })
    })
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
        bottom: {
            offset: 60,
        },
        left: {
            offset: 70,
        },
    },
    AxisTicks: {
        bottom: {
            labelAngle: -45,
        },
    },
}

// precompute cell coordinates belonging to lower- and upper-triangular shapes
const lowerTriangularCells: [string, string][] = []
const upperTriangularCells: [string, string][] = []
alphabetGreek.map((a, i) => {
    alphabetGreek.map((b, j) => {
        if (i >= j) {
            lowerTriangularCells.push([a, b])
        } else {
            upperTriangularCells.push([a, b])
        }
    })
})

export const TriangularHeatMapChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isHeatMapData(rawData)) return null
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="triangular-heat"
            size={[560, 480]}
            padding={[50, 130, 80, 80]}
            theme={customTheme}
        >
            <HeatMap
                data={rawData}
                keys={ids}
                scaleColor={{
                    variant: 'sequential',
                    colors: interpolateReds,
                    domain: [0, 100],
                }}
            >
                <HeatMapCells cells={lowerTriangularCells} />
                <HeatMapHighlight style={{ fill: '#222222', opacity: 0.6 }} />
                <HeatMapCells
                    cells={upperTriangularCells}
                    scaleColor={{
                        variant: 'sequential',
                        colors: ['#ffffff', '#ffffff'],
                        domain: [0, 1],
                    }}
                    style={{ strokeWidth: 1, stroke: '#ffffff', fill: '#ffffff' }}
                />
                <Axis variant={'left'} label={'Replicate 1'} />
                <Axis variant={'bottom'}>
                    <AxisTicks
                        variant={'bottom'}
                        labelStyle={{ textAnchor: 'end', dominantBaseline: 'middle' }}
                    />
                    <AxisLabel variant={'bottom'}>Replicate 2</AxisLabel>
                </Axis>
                <Legend
                    variant={'color'}
                    horizontal={false}
                    position={[250, 10]}
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
                        gradientId={'grad-triangular'}
                    />
                </Legend>
                <Tooltip
                    offset={[15, -15]}
                    anchor={[0, 1]}
                    padding={[4, 0, 4, 0]}
                    itemSize={[115, 26]}
                    itemPadding={[4, 8, 4, 8]}
                />
            </HeatMap>
        </Chart>
    )
}
