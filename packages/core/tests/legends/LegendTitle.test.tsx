import { Chart, Legend, LegendItemProps, LegendTitle, View } from '../../src'
import { render, screen } from '@testing-library/react'
import { chartProps } from '../props'
import { scaleCategorical, viewSeriesIndexesKeys } from './Legend.test'

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
        const title = screen.getByRole('legend').querySelector('text')?.closest('g')
        expect(title?.getAttribute('style')).toContain('4px')
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
        const title = screen.getByRole('legend').querySelector('text')?.closest('g')
        expect(title?.getAttribute('style')).toContain('196px')
        expect(title?.getAttribute('style')).toContain('4px')
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
        const title = screen.getByRole('legend').querySelector('text')?.closest('g')
        // title should be centered in a width size of [200, 40]
        expect(title?.getAttribute('style')).toContain('100px')
        expect(title?.getAttribute('style')).toContain('4px')
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
        const title = screen.getByRole('legend').querySelector('text')?.closest('g')
        // title should be centered in a width/size of [200, 40]
        expect(title?.getAttribute('style')).toContain('100px')
        expect(title?.getAttribute('style')).toContain('4px')
    })
})
