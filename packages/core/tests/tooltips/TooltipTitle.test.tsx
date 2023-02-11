import { Chart, Tooltip, TooltipDataItem, TooltipItemProps, TooltipTitle, View } from '../../src'
import { render, screen } from '@testing-library/react'
import { chartProps } from '../props'
import { scaleCategorical, viewSeriesIndexesKeys, MockTooltipSetter } from './Tooltip.test'
import { getNumberAttr } from '../utils'

describe('TooltipTitle', () => {
    const tooltipTitleProps: Pick<TooltipItemProps, 'position' | 'size' | 'padding'> = {
        position: [0, 0],
        size: [100, 40],
        padding: [4, 4, 4, 4],
    }

    it('creates a tooltip title (variant right)', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <MockTooltipSetter x={10} y={10}>
                        <Tooltip>
                            <TooltipTitle variant={'right'} {...tooltipTitleProps}>
                                title
                            </TooltipTitle>
                        </Tooltip>
                    </MockTooltipSetter>
                </View>
            </Chart>
        )
        const tooltipTitle = screen.getAllByRole('tooltip-title')
        expect(tooltipTitle).toBeDefined()
        const title = screen.getByRole('tooltip').querySelector('text')
        expect(getNumberAttr(title, 'x')).toEqual(4)
        expect(getNumberAttr(title, 'y')).toEqual(4)
    })

    it('creates a tooltip title (variant left)', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <MockTooltipSetter x={10} y={10}>
                        <Tooltip>
                            <TooltipTitle variant={'left'} {...tooltipTitleProps}>
                                title
                            </TooltipTitle>
                        </Tooltip>
                    </MockTooltipSetter>
                </View>
            </Chart>
        )
        const title = screen.getByRole('tooltip').querySelector('text')
        expect(getNumberAttr(title, 'x')).toEqual(96)
        expect(getNumberAttr(title, 'y')).toEqual(4)
    })

    it('creates a tooltip title (variant top)', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <MockTooltipSetter x={10} y={10}>
                        <Tooltip>
                            <TooltipTitle variant={'top'} {...tooltipTitleProps}>
                                title
                            </TooltipTitle>
                        </Tooltip>
                    </MockTooltipSetter>
                </View>
            </Chart>
        )
        const title = screen.getByRole('tooltip').querySelector('text')
        // title should be centered in a box of size [100, 40]
        expect(getNumberAttr(title, 'x')).toEqual(50)
        expect(getNumberAttr(title, 'y')).toEqual(4)
    })

    it('creates a tooltip title (variant bottom)', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <MockTooltipSetter x={10} y={10}>
                        <Tooltip>
                            <TooltipTitle variant={'bottom'} {...tooltipTitleProps}>
                                title
                            </TooltipTitle>
                        </Tooltip>
                    </MockTooltipSetter>
                </View>
            </Chart>
        )
        const title = screen.getByRole('tooltip').querySelector('text')
        // title should be centered in a box of size [100, 40]
        expect(getNumberAttr(title, 'x')).toEqual(50)
        expect(getNumberAttr(title, 'y')).toEqual(4)
    })
})
