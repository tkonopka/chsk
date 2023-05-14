import {
    Axis,
    Chart,
    GridLines,
    Legend,
    mergeThemes,
    RecordWithId,
    roundDecimalPlaces,
    ThemeSpec,
    Tooltip,
    TooltipDataItem,
    Typography,
} from '@chsk/core'
import { Violin, Violins } from '@chsk/band'
import { Paragraph } from '@chsk/annotation'
import { buttonTheme } from '@chsk/themes'
import { alphabetGreek, generateMixedPopulation, generateUniformPopulation } from '../utils'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'

const ids = alphabetGreek.slice(0, 6)
export const generateViolinData = () => {
    const means = generateUniformPopulation(6, 25, 80)
    const sds = generateUniformPopulation(6, 1, 10)
    const n = generateUniformPopulation(6, 500, 1000)
    const bimodal = generateUniformPopulation(2, 0, 6).map(v => Math.floor(v))
    return ids.map((id, i) => {
        const result: RecordWithId = { id }
        let values = generateMixedPopulation([n[i]], [means[i]], [sds[i]])
        if (bimodal.indexOf(i) >= 0) {
            const newN: number = n[i] * 0.8
            const newMean = means[i] > 50 ? means[i] - 4 * sds[i] : means[i] + 3 * sds[i]
            values = values.concat(generateMixedPopulation([newN], [newMean], [sds[i]]))
        }
        result[id] = values
            .filter(v => v >= 0)
            .filter(v => v <= 100)
            .map(v => roundDecimalPlaces(v, 4))
        return result
    })
}

const customTheme: ThemeSpec = mergeThemes([
    buttonTheme,
    {
        line: {
            baseline: {
                stroke: '#222222',
                strokeWidth: 2,
            },
        },
        path: {
            violin: {
                stroke: '#222222',
                strokeWidth: 1,
                fillOpacity: 1,
            },
        },
        text: {
            title: {
                fontSize: '16px',
            },
            paragraph: {
                textAnchor: 'start',
                fill: '#444444',
            },
        },
    },
])

const customLabelFormat = (x: TooltipDataItem) => {
    return x.id + ', n=' + ('n' in x ? x['n'] : '?')
}

export const ViolinChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    return (
        <Chart
            id="violins"
            fref={fref}
            data={chartData}
            size={[600, 400]}
            padding={[170, 120, 30, 70]}
            theme={customTheme}
        >
            <Violin
                variant={'layered'}
                data={rawData}
                keys={ids}
                autoRescale={true}
                horizontal={true}
                breaks={25}
                scaleIndex={{
                    variant: 'band',
                    paddingOuter: 0.3,
                }}
                scaleValue={{
                    variant: 'linear',
                    domain: [0, 100],
                }}
            >
                <GridLines variant={'y'} values={6} />
                <GridLines variant={'x'} />
                <Axis variant={'left'} label={''} />
                <Axis variant={'top'} label={'score (a.u.)'} />
                <GridLines variant={'x'} values={[0]} className={'baseline'} />
                <Violins style={{ stroke: '#222222' }} />
                <Legend
                    position={[1, 0.5]}
                    positionUnits={'relative'}
                    offset={[20, 0]}
                    anchor={[0, 0.5]}
                    padding={[0, 0, 0, 0]}
                    r={9}
                    itemSize={[100, 20]}
                    itemPadding={[2, 2, 2, 2]}
                />
                <Typography variant={'title'} position={[-50, -150]}>
                    Violins
                </Typography>
                <Paragraph size={[480, 18]} position={[-50, -125]} align={0}>
                    Violin charts summarize value distributions. In contrast to box plots, violins
                    can reveal subtle patterns such as bi-modality. However, violin shapes can be
                    sensitive to outliers.
                </Paragraph>
                <DownloadButtons position={[420, 210]} data image />
                <Tooltip itemSize={[120, 24]} labelFormat={customLabelFormat} />
            </Violin>
        </Chart>
    )
}
