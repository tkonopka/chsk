import {
    Axis,
    Chart,
    GridLines,
    Legend,
    mergeThemes,
    Tooltip,
    AxisTooltip,
    Typography,
    TooltipData,
    Surface,
    NumericPositionSpec,
} from '@chsk/core'
import { isScatterData, Scatter, ScatterCrosshair, ScatterPoints } from '@chsk/xy'
import { buttonTheme, faintTicksTheme } from '@chsk/themes'

import { generateXYValues } from './generators'
import { generateMixedPopulation, randomNormalValue, round3dp } from '../utils'
import { MilestoneStory } from '../types'

export const generateAxisTooltipScatterData = () => {
    return [
        {
            id: 'alpha',
            data: generateXYValues(
                generateMixedPopulation([120], [0], [1]).map(round3dp),
                ['y'],
                [x => round3dp(0.2 * x + randomNormalValue(0, 1.5))]
            ),
        },
        {
            id: 'beta',
            data: generateXYValues(
                generateMixedPopulation([120], [2], [1]).map(round3dp),
                ['y'],
                [x => round3dp(0.8 * x + randomNormalValue(0, 1.5))]
            ),
        },
    ]
}

const customTheme = mergeThemes([
    buttonTheme,
    faintTicksTheme,
    {
        circle: {
            custom: {
                opacity: 0.8,
            },
            'custom:hover': {
                cursor: 'pointer',
            },
        },
        rect: {
            'tooltip.surface': {
                fill: '#404040',
                strokeWidth: 1,
                stroke: '#222222',
                opacity: 0.9,
            },
        },
        text: {
            tooltipTitle: {
                fill: '#ffffff',
            },
        },
    },
])

export const AxisTooltipScatterChart = ({ fref, chartData, rawData }: MilestoneStory) => {
    if (!isScatterData(rawData)) return null
    return (
        <Chart
            data={chartData}
            fref={fref}
            id="axis-tooltip"
            size={[640, 480]}
            padding={[60, 40, 60, 100]}
            theme={customTheme}
        >
            <Scatter
                x={'x'}
                y={'y'}
                valueSize={3.5}
                data={rawData}
                scaleX={{ variant: 'linear', nice: 5 }}
                scaleY={{ variant: 'linear', nice: 5 }}
            >
                <Typography position={[0, -20]} variant={'title'}>
                    Mild correlations
                </Typography>
                <Surface
                    variant={'inner'}
                    style={{ fill: '#fdfdfd', stroke: '#dddddd', strokeWidth: 0.5 }}
                />
                <GridLines
                    variant={'y'}
                    style={{ stroke: '#dddddd', strokeWidth: 0.5 }}
                    values={25}
                />
                <GridLines
                    variant={'y'}
                    style={{ stroke: '#dddddd', strokeWidth: 1.5 }}
                    values={5}
                />
                <GridLines
                    variant={'x'}
                    style={{ stroke: '#dddddd', strokeWidth: 0.5 }}
                    values={25}
                />
                <GridLines
                    variant={'x'}
                    style={{ stroke: '#dddddd', strokeWidth: 1.5 }}
                    values={5}
                />
                <Axis variant={'bottom'} label={'x values (a.u.)'} />
                <Axis variant={'left'} label={'y values (a.u.)'} />
                <ScatterPoints />
                <ScatterCrosshair
                    style={{ strokeDasharray: '5 3', strokeWidth: 2, stroke: '#000000' }}
                    symbolStyle={{ opacity: 1, stroke: '#000000', strokeWidth: 2 }}
                    minDistance={20}
                />
                <Legend
                    position={[1, 1]}
                    positionUnits={'relative'}
                    translate={[-8, -8]}
                    padding={[1, 1, 1, 1]}
                    size={[110, 86]}
                    sizeUnits={'absolute'}
                    anchor={[1, 1]}
                    r={10}
                    itemSize={[108, 26]}
                    itemPadding={[4, 8, 4, 8]}
                    title={'Populations'}
                    style={{ strokeWidth: 1, stroke: '#222222', fill: '#ffffff', fillOpacity: 1 }}
                />
                <Tooltip
                    translate={[15, -15]}
                    anchor={[0, 1]}
                    padding={[4, 0, 4, 0]}
                    itemSize={[80, 26]}
                    itemPadding={[4, 8, 4, 8]}
                    labelFormat={null}
                    titleFormat={customTooltipTitle}
                />
                <AxisTooltip
                    variant={'left'}
                    itemSize={[55, 26]}
                    labelFormat={null}
                    titleFormat={customLeftTitle}
                />
                <AxisTooltip
                    variant={'bottom'}
                    itemSize={[55, 26]}
                    labelFormat={null}
                    titleFormat={customBottomTitle}
                />
            </Scatter>
        </Chart>
    )
}

const customTooltipTitle = (x: TooltipData) => {
    const d0 = x?.data?.[0]
    if (!d0) return ''
    return d0.id + ': ' + ('index' in d0 ? d0['index'] : '')
}

const customLeftTitle = (x: TooltipData) => {
    const d0 = x?.data?.[0]
    if (!d0) return ''
    const point = 'point' in d0 ? (d0['point'] as NumericPositionSpec) : [0, 0]
    return String(point[1])
}
const customBottomTitle = (x: TooltipData) => {
    const d0 = x?.data?.[0]
    if (!d0) return ''
    const point = 'point' in d0 ? (d0['point'] as NumericPositionSpec) : [0, 0]
    return String(point[0])
}
