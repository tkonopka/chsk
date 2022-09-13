import { render, screen } from '@testing-library/react'
import {
    Chart,
    Legend,
    View,
    ColorScaleProps,
    LegendItem,
    Circle,
    LegendTitle,
    LegendItemProps,
} from '../src'
import { chartProps } from './props'
import { LegendSizeScale } from '../src/legends/LegendSizeScale'

const viewSeriesIndexesKeys = {
    seriesIndexes: { X: 0, Y: 1 },
    keys: ['alpha', 'beta', 'gamma'],
}

const scaleCategorical: ColorScaleProps = {
    variant: 'categorical',
    colors: 'Category10',
    domain: [], // empty domain by default, will be filled in by View
}

const scaleSequential: ColorScaleProps = {
    variant: 'sequential',
    colors: 'Blues',
    domain: [0, 100],
}

const getNumberAttr = (item: SVGElement | null, attribute: string) => {
    const raw = item ? item.getAttribute(attribute) : ''
    return Number(raw?.replace('px', ''))
}

const getTranslate = (item: SVGElement | null, variant: string) => {
    const raw: string = (item ? item.getAttribute('style') : '') ?? ''
    const prefix = 'translate' + variant
    const part = raw.split(' ').filter(p => p.startsWith(prefix))[0]
    const result = part.replace(prefix, '').replace('(', '').replace('px)', '').replace(';', '')
    return Number(result)
}

describe('Legend (list)', () => {
    it('creates a legend with categorical colors', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <Legend />
                </View>
            </Chart>
        )
        const legend = screen.getByRole('legend')
        expect(legend).toBeDefined()
        const items = screen.getAllByRole('legend-item')
        expect(items).toHaveLength(3)
        const labels = legend.querySelectorAll('text')
        expect(labels).toHaveLength(3)
    })

    it('creates legend items with role and class', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <Legend setRole={true} />
                </View>
            </Chart>
        )
        const items = screen.getAllByRole('legend-item')
        expect(items).toHaveLength(3)
        expect(items[0].getAttribute('role')).toContain('legend-item')
        expect(items[0].getAttribute('class')).toContain('legendItem')
    })

    it('creates legend items without role', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys}>
                    <Legend setRole={false} />
                </View>
            </Chart>
        )
        expect(screen.queryAllByRole('legend-item')).toHaveLength(0)
    })

    it('shifts legend content when a title is present', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys}>
                    <Legend horizontal={false} itemSize={[80, 20]} title={'custom title'} />
                </View>
            </Chart>
        )
        const items = screen.getAllByRole('legend-item')
        expect(items[0].getAttribute('transform')).toContain('translate(0,20)')
    })
})

describe('LegendItem', () => {
    const legendItemProps: Pick<LegendItemProps, 'position' | 'item' | 'label' | 'symbol'> = {
        position: [0, 0],
        item: 'alpha',
        label: 'alpha',
        symbol: Circle,
    }

    it('creates a legend item (variant right)', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <Legend variant={'list'}>
                        <LegendItem variant={'right'} {...legendItemProps} />
                    </Legend>
                </View>
            </Chart>
        )
        const item = screen.getByRole('legend-item')
        const symbol = item.querySelector('circle')
        const label = item.querySelector('text')
        const abc = getTranslate(label, 'Y')
        expect(getNumberAttr(symbol, 'cy')).toEqual(getTranslate(label, 'Y'))
        expect(getNumberAttr(symbol, 'cx')).toBeLessThan(getTranslate(label, 'X'))
    })

    it('creates a legend item (variant left)', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <Legend variant={'list'}>
                        <LegendItem variant={'left'} {...legendItemProps} />
                    </Legend>
                </View>
            </Chart>
        )
        const item = screen.getByRole('legend-item')
        const symbol = item.querySelector('circle')
        const label = item.querySelector('text')
        expect(getNumberAttr(symbol, 'cy')).toEqual(getTranslate(label, 'Y'))
        expect(getNumberAttr(symbol, 'cx')).toBeGreaterThan(getTranslate(label, 'X'))
    })

    it('creates a legend item (variant top)', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <Legend variant={'list'}>
                        <LegendItem variant={'top'} {...legendItemProps} />
                    </Legend>
                </View>
            </Chart>
        )
        const item = screen.getByRole('legend-item')
        const symbol = item.querySelector('circle')
        const label = item.querySelector('text')
        expect(getNumberAttr(symbol, 'cy')).toBeGreaterThan(getTranslate(label, 'Y'))
        expect(getNumberAttr(symbol, 'cx')).toEqual(getTranslate(label, 'X'))
    })

    it('creates a legend item (variant bottom)', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <Legend variant={'list'}>
                        <LegendItem variant={'bottom'} {...legendItemProps} />
                    </Legend>
                </View>
            </Chart>
        )
        const item = screen.getByRole('legend-item')
        const symbol = item.querySelector('circle')
        const label = item.querySelector('text')
        expect(getNumberAttr(symbol, 'cy')).toBeLessThan(getTranslate(label, 'Y'))
        expect(getNumberAttr(symbol, 'cx')).toEqual(getTranslate(label, 'X'))
    })
})

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
        const legendTitle = screen.getByRole('legend-title')
        expect(legendTitle).toBeDefined()
        const title = screen.getByRole('legend').querySelector('text')
        //expect(getNumberAttr(title, 'x')).toEqual(4)
        //expect(getNumberAttr(title, 'y')).toEqual(4)
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
        const title = screen.getByRole('legend').querySelector('text')
        //expect(getNumberAttr(title, 'x')).toEqual(196)
        //expect(getNumberAttr(title, 'y')).toEqual(4)
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
        const title = screen.getByRole('legend').querySelector('text')
        // title should be centered in a width size of [200, 40]
        //expect(getNumberAttr(title, 'x')).toEqual(100)
        //expect(getNumberAttr(title, 'y')).toEqual(4)
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
        const title = screen.getByRole('legend').querySelector('text')
        // title should be centered in a width/size of [200, 40]
        //expect(getNumberAttr(title, 'x')).toEqual(100)
        //expect(getNumberAttr(title, 'y')).toEqual(4)
        expect(title?.getAttribute('style')).toContain('100px')
        expect(title?.getAttribute('style')).toContain('4px')
    })
})

describe('Legend (color)', () => {
    it('creates a legend with a color scale', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleSequential}>
                    <Legend variant={'color'} />
                </View>
            </Chart>
        )
        const legend = screen.getByRole('legend')
        expect(legend).toBeDefined()
        const ticks = screen.getAllByRole('tick')
        expect(ticks.length).toBeGreaterThan(2)
    })

    it('skips work when color scale is categorical', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleCategorical}>
                    <Legend variant={'color'} />
                </View>
            </Chart>
        )
        const result = screen.queryByRole('legend-color-scale')
        expect(result).toBeNull()
    })
})

describe('Legend (size)', () => {
    it('creates a legend with a size scale', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleSequential}>
                    <Legend variant={'size'} />
                </View>
            </Chart>
        )
        expect(screen.getByRole('legend')).toBeDefined()
        expect(screen.getByRole('legend-size-scale')).toBeDefined()
    })

    it('creates a size scale (variant right)', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleSequential}>
                    <Legend variant={'size'}>
                        <LegendSizeScale position={[0, 0]} variant={'right'} />
                    </Legend>
                </View>
            </Chart>
        )
        expect(screen.getByRole('legend')).toBeDefined()
        expect(screen.getByRole('legend-size-scale')).toBeDefined()
    })

    it('creates a size scale (variant left)', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleSequential}>
                    <Legend variant={'size'}>
                        <LegendSizeScale position={[0, 0]} variant={'left'} />
                    </Legend>
                </View>
            </Chart>
        )
        expect(screen.getByRole('legend')).toBeDefined()
        expect(screen.getByRole('legend-size-scale')).toBeDefined()
    })

    it('creates a size scale (variant top)', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleSequential}>
                    <Legend variant={'size'}>
                        <LegendSizeScale position={[0, 0]} variant={'top'} />
                    </Legend>
                </View>
            </Chart>
        )
        expect(screen.getByRole('legend')).toBeDefined()
        expect(screen.getByRole('legend-size-scale')).toBeDefined()
    })

    it('creates a size scale (variant bottom)', () => {
        render(
            <Chart {...chartProps}>
                <View data={viewSeriesIndexesKeys} scaleColor={scaleSequential}>
                    <Legend variant={'size'}>
                        <LegendSizeScale position={[0, 0]} variant={'bottom'} />
                    </Legend>
                </View>
            </Chart>
        )
        expect(screen.getByRole('legend')).toBeDefined()
        expect(screen.getByRole('legend-size-scale')).toBeDefined()
    })
})
