import { Chart, Legend, LegendItemProps, LegendTitle, View } from '../../src'
import { render, screen } from '@testing-library/react'
import { chartProps } from '../props'
import { scaleCategorical, viewSeriesIndexesKeys } from './legends.props'
import { getNumberAttr } from '../utils'

describe('LegendTitle', () => {
    const legendTitleProps: Pick<LegendItemProps, 'position' | 'size' | 'padding'> = {
        position: [0, 0],
        size: [200, 40],
        padding: [4, 4, 4, 4],
    }

    it('creates a legend title (variant right)', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <Legend variant={'list'}>
                        <LegendTitle variant={'right'} {...legendTitleProps}>
                            title
                        </LegendTitle>
                    </Legend>
                </View>
            </Chart>
        )
        const legendTitle = screen.getAllByRole('legend-title')
        expect(legendTitle).toBeDefined()
        const title = screen.getByRole('legend').querySelector('text')
        expect(getNumberAttr(title, 'x')).toEqual(4)
        expect(getNumberAttr(title, 'y')).toEqual(4)
    })

    it('creates a legend title (variant left)', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <Legend variant={'list'}>
                        <LegendTitle variant={'left'} {...legendTitleProps}>
                            title
                        </LegendTitle>
                    </Legend>
                </View>
            </Chart>
        )
        const title = screen.getByRole('legend').querySelector('text')
        expect(getNumberAttr(title, 'x')).toEqual(196)
        expect(getNumberAttr(title, 'y')).toEqual(4)
    })

    it('creates a legend title (variant top)', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <Legend variant={'list'}>
                        <LegendTitle variant={'top'} {...legendTitleProps}>
                            title
                        </LegendTitle>
                    </Legend>
                </View>
            </Chart>
        )
        const title = screen.getByRole('legend').querySelector('text')
        // title should be centered in a width size of [200, 40]
        expect(getNumberAttr(title, 'x')).toEqual(100)
        expect(getNumberAttr(title, 'y')).toEqual(4)
    })

    it('creates a legend title (variant bottom)', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <Legend variant={'list'}>
                        <LegendTitle variant={'bottom'} {...legendTitleProps}>
                            title
                        </LegendTitle>
                    </Legend>
                </View>
            </Chart>
        )
        const title = screen.getByRole('legend').querySelector('text')
        // title should be centered in a width/size of [200, 40]
        expect(getNumberAttr(title, 'x')).toEqual(100)
        expect(getNumberAttr(title, 'y')).toEqual(4)
    })

    it('creates a legend title with offset', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <Legend variant={'list'}>
                        <LegendTitle variant={'right'} {...legendTitleProps} offset={[10, 0]}>
                            title
                        </LegendTitle>
                    </Legend>
                </View>
            </Chart>
        )
        // position of text should be shifted from [4,4] by [10, 0]
        const title = screen.getByRole('legend').querySelector('text')
        expect(getNumberAttr(title, 'x')).toEqual(14)
        expect(getNumberAttr(title, 'y')).toEqual(4)
    })
})
