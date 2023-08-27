import { useEffect, useState } from 'react'
import { Chart, ThemeSpec, mergeTheme, range, Axis, Typography, interval } from '@chsk/core'
import {
    Dendrogram,
    DendrogramTree,
    isDendrogramData,
    DendrogramSurface,
    DendrogramDataItem,
    DendrogramInteractiveDataItem,
} from '@chsk/band'
import { buttonTheme } from '@chsk/themes'
import { MilestoneStory } from '../types'
import { alphabetGreek, randomUniformValue, round2dp } from '../utils'
import { DownloadButtons } from '../navigation'

export const generateDendrogramData = () => {
    const keys = [...alphabetGreek].sort(() => (Math.random() > 0.5 ? 1 : -1))
    let pool = range(alphabetGreek.length).map(v => -v - 1)
    const merge = []
    const height = []
    while (pool.length > 1) {
        const poolSize = pool.length
        const end = Math.floor(randomUniformValue(0, poolSize))
        const start = end - 1
        if (start >= 0 && end >= 0) {
            const endIndex = pool[end]
            const startIndex = pool[start]
            merge.push([startIndex, endIndex])
            pool = pool.slice(0, start).concat(pool.slice(end, poolSize))
            pool[start] = merge.length
            height.push(round2dp(randomUniformValue(0, alphabetGreek.length)))
        }
    }
    height.sort((a, b) => a - b)
    return [{ id: 'data', merge, keys, height }]
}

const customTheme: ThemeSpec = mergeTheme(buttonTheme, {
    path: {
        dendrogram: {
            strokeWidth: 2,
            pointerEvents: 'none',
        },
    },
    rect: {
        dendrogramSurface: {
            fill: '#cccccc',
            cursor: 'pointer',
        },
    },
    text: {
        tickLabel: {
            pointerEvents: 'none',
        },
    },
    AxisTicks: {
        bottom: {
            labelDistance: 6,
            labelAngle: -90,
            labelStyle: { dominantBaseline: 'middle', textAnchor: 'end' },
            tickSize: 0,
        },
    },
})

const getSubTreeIndexes = (data: DendrogramDataItem, index: number, result: number[]) => {
    if (index < 0) {
        result.push(-index - 1)
    } else {
        getSubTreeIndexes(data, data.merge[index - 1]?.[0] as number, result)
        getSubTreeIndexes(data, data.merge[index - 1]?.[1] as number, result)
    }
}

const flipDomain = (domain: string[], data: DendrogramDataItem, level: number) => {
    const pair = data.merge[level] as [number, number]
    const leftIndexes: number[] = []
    const rightIndexes: number[] = []
    getSubTreeIndexes(data, pair[0], leftIndexes)
    getSubTreeIndexes(data, pair[1], rightIndexes)
    const keys = data.keys
    const leftTransformed = leftIndexes.map(i => domain.indexOf(keys[i] as string))
    const rightTransformed = rightIndexes.map(i => domain.indexOf(keys[i] as string))
    let leftInterval = interval(leftTransformed)
    let rightInterval = interval(rightTransformed)
    if (rightInterval[0] < leftInterval[0]) {
        const temp: [number, number] = [rightInterval[0], rightInterval[1]]
        rightInterval = leftInterval
        leftInterval = temp
    }
    const a = domain.slice(0, leftInterval[0])
    const b = domain.slice(leftInterval[0], leftInterval[1] + 1)
    const c = domain.slice(rightInterval[0], rightInterval[1] + 1)
    const d = domain.slice(rightInterval[1] + 1, domain.length)
    const result = a.concat(c).concat(b).concat(d)
    return result
}

export const DendrogramChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    const [domain, setDomain] = useState<string[] | undefined>(undefined)
    if (!isDendrogramData(rawData)) return null

    const handleClick = (data?: DendrogramInteractiveDataItem) => {
        if (!data) return
        setDomain(domain => flipDomain(domain ?? data.data.keys, data.data, data.level))
    }

    // resets the domain when a new dataset/hierarchy is loaded
    useEffect(() => {
        setDomain(rawData[0]?.keys)
    }, [rawData])

    return (
        <Chart
            data={chartData}
            fref={fref}
            id="wide-dendrogram"
            size={[600, 300]}
            padding={[90, 40, 60, 40]}
            theme={customTheme}
        >
            <Dendrogram data={rawData} scaleIndex={{ variant: 'band', domain }}>
                <Typography variant={'title'} position={[0, -50]}>
                    Hierarchical clustering
                </Typography>
                <DendrogramSurface
                    interactive={true}
                    expansion={[0.5, 0.5, 2.8, 0.5]}
                    handlers={{ onClick: handleClick }}
                />
                <DendrogramTree />
                <Axis variant={'bottom'} />
                <DownloadButtons position={[420, -50]} image data />
            </Dendrogram>
        </Chart>
    )
}
