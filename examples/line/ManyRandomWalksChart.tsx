import {
    Chart,
    Axis,
    GridLines,
    Surface,
    Typography,
    Legend,
    LegendTitle,
    LegendItemList,
    ThemeSpec,
} from '@chsk/core'
import { isScatterData, Scatter, ScatterCurve } from '@chsk/xy'
import { generateRandomWalk } from './generators'
import { MilestoneStory } from '../types'
import { alphabetGreek } from '../utils'
import * as d3 from 'd3-scale-chromatic'

const interpolate = d3.interpolateOranges
const n = alphabetGreek.length
const greekColors = Array(alphabetGreek.length)
    .fill(0)
    .map((x, i) => interpolate((i + 1) / (n + 2)))

export const generateManyRandomWalksData = () => {
    const result = alphabetGreek
        .map(() => {
            const data = generateRandomWalk(200)
            return { data, final: data[data.length - 1].y }
        })
        .sort((a, b) => Number(a.final) - Number(b.final))
    return result.map((item, index) => ({ id: alphabetGreek[index], ...item }))
}

const customTheme: ThemeSpec = {
    rect: {
        legendItem: {
            fillOpacity: 0,
        },
    },
    text: {
        legendTitle: {
            fontSize: '13px',
            fontWeight: 600,
        },
        legendItem: {
            fontSize: '13px',
        },
        subtitle: {
            fontSize: '15px',
            fontWeight: 300,
            fill: '#666',
        },
    },
}

export const ManyRandomWalksChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isScatterData(rawData)) return null
    // split the ids into two groups (for the legend)
    const ids = rawData.map(item => item.id)
    const idsA = ids.slice(0, ids.length / 2)
    const idsB = ids.slice(ids.length / 2, ids.length)
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="many-random-walks"
            size={[640, 400]}
            padding={[80, 210, 60, 60]}
            theme={customTheme}
        >
            <Surface variant={'outer'} style={{ fill: '#f6f6f6' }} />
            <Scatter
                data={rawData}
                x={'x'}
                y={'y'}
                scaleX={{
                    variant: 'linear',
                    domain: 'auto',
                    nice: true,
                }}
                scaleY={{
                    variant: 'linear',
                    domain: 'auto',
                    nice: true,
                }}
                scaleColor={{
                    variant: 'categorical',
                    colors: greekColors,
                }}
            >
                <Typography variant={'title'} position={[-48, -50]}>
                    Many random walks
                </Typography>
                <Typography variant={'subtitle'} position={[-48, -28]}>
                    All walks start at zero and progress due to chance alone.
                </Typography>
                <GridLines variant={'y'} style={{ stroke: '#bbbbbb' }} />
                <GridLines
                    variant={'y'}
                    values={[0]}
                    style={{ stroke: '#111111', strokeWidth: 2 }}
                />
                <Axis variant={'bottom'} label={'x values (a.u.)'} />
                <Axis variant={'left'} label={'y values (a.u.)'} />
                <ScatterCurve curve={'Natural'} style={{ strokeWidth: 2 }} />
                <Legend
                    position={[1, 0.5]}
                    positionUnits={'relative'}
                    size={[200, 234]}
                    sizeUnits={'absolute'}
                    horizontal={false}
                    anchor={[0, 0.5]}
                    padding={[0, 0, 0, 0]}
                    r={10.5}
                    itemSize={[180, 18]}
                    itemPadding={[2, 2, 2, 2]}
                >
                    <LegendTitle position={[30, -18]}>Random walks</LegendTitle>
                    <LegendItemList
                        variant={'right'}
                        position={[30, 0]}
                        horizontal={false}
                        key={'legend-list-A'}
                        items={idsA}
                        labels={idsA}
                        itemSize={[90, 18]}
                        itemPadding={[2, 2, 2, 2]}
                        r={Array(idsA.length).fill(9)}
                    />
                    <LegendItemList
                        variant={'right'}
                        position={[120, 0]}
                        horizontal={false}
                        key={'legend-list-B'}
                        items={idsB}
                        labels={idsB}
                        itemSize={[90, 18]}
                        itemPadding={[2, 2, 2, 2]}
                        r={Array(idsB.length).fill(9)}
                    />
                </Legend>
            </Scatter>
        </Chart>
    )
}
