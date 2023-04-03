import { Chart, ThemeSpec, mergeTheme, Tooltip, TooltipDataItem, Typography } from '@chsk/core'
import { isPieData, Origin, Pie, Slices, SliceLabels } from '@chsk/polar'
import { buttonTheme } from '@chsk/themes'
import { alphabetGreek, generateUniformPopulation } from '../utils'
import { MilestoneStory } from '../types'
import { DownloadButtons } from '../navigation'

const ids = alphabetGreek.slice(0, 4)

export const generateSemicircleDoughnutData = () => {
    const sizes = generateUniformPopulation(ids.length, 2, 120).map(Math.round)
    const total = sizes.reduce((acc, v) => acc + v, 0)
    const result = [{ id: '_', data: total }].concat(ids.map((id, i) => ({ id, data: sizes[i] })))
    return result
}

const customTheme: ThemeSpec = mergeTheme(buttonTheme, {
    text: {
        centerTitle: {
            textAnchor: 'middle',
        },
        total: {
            fill: '#444444',
            fontWeight: 600,
            fontSize: '18px',
        },
        sliceLabel: {
            pointerEvents: 'none',
            fill: '#f4f4f4',
            fontSize: '13px',
        },
        sliceTitle: {
            fontWeight: 600,
        },
    },
})

// tooltip label display numeric value and a percentage
const customTooltipLabelFormat = (x: TooltipDataItem) => {
    const proportion = 'proportion' in x ? Number(x['proportion']) : 0
    return x.data + ' (' + Math.round(proportion * 100) + '%)'
}

export const SemicircleDoughnutChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isPieData(rawData)) return null
    const ids = rawData.map(item => item.id).filter(id => id !== '_')
    const total = rawData.reduce((acc, item) => acc + item.data, 0) / 2
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="semicircle"
            size={[480, 280]}
            padding={[60, 60, 30, 60]}
            theme={customTheme}
        >
            <Pie
                data={rawData}
                angle={90}
                angleUnit={'degree'}
                angleAlign={0}
                scaleColor={{
                    variant: 'categorical',
                    colors: ['#888888', '#fd8d3c', '#f16913', '#d94801', '#8c2d04'],
                }}
                scaleY={{
                    variant: 'linear',
                    domain: [0, 1],
                }}
                rInner={0.4}
            >
                <Origin>
                    <Slices ids={ids} style={{ stroke: '#000000', strokeWidth: 1 }} />
                    <g transform={'translate(0, -7)'}>
                        <SliceLabels
                            ids={ids}
                            minAngle={15}
                            format={x => x.id}
                            className={'sliceTitle'}
                        />
                    </g>
                    <g transform={'translate(0, 7)'}>
                        <SliceLabels
                            ids={ids}
                            minAngle={15}
                            format={x => String(Math.round(x.data))}
                        />
                    </g>
                    <Typography variant={'center-title'} position={[0, -26]}>
                        Total
                    </Typography>
                    <Typography variant={'total'} position={[0, -6]}>
                        {total}
                    </Typography>
                </Origin>
                <DownloadButtons position={[320, -20]} data image />
                <Tooltip
                    offset={[0, -20]}
                    itemSize={[100, 24]}
                    titleFormat={x => x.data?.[0].id}
                    labelFormat={customTooltipLabelFormat}
                />
            </Pie>
        </Chart>
    )
}
