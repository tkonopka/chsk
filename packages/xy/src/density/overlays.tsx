import { DensityCrosshairProps, DensityInteractiveDataItem } from './types'
import { addColor, Circle, NumericPositionSpec, SimpleDataComponent, X, Y } from '@chsk/core'
import { createElement } from 'react'

export const createDensitySymbol = ({
    activeData,
    coordinates,
    dataComponent = SimpleDataComponent,
    symbol = Circle,
    symbolR,
    symbolStyle,
    symbolClassName,
    setRole,
}: Pick<
    DensityCrosshairProps,
    'symbol' | 'dataComponent' | 'symbolStyle' | 'symbolClassName' | 'symbolR' | 'setRole'
> & {
    activeData?: DensityInteractiveDataItem
    coordinates: NumericPositionSpec
}) => {
    if (activeData === undefined) return null
    return createElement(dataComponent, {
        key: 'active-' + activeData.bins[X] + '-' + activeData.bins[Y],
        component: symbol,
        props: {
            variant: 'active',
            cx: coordinates[X],
            cy: coordinates[Y],
            r: symbolR,
            className: symbolClassName,
            style: addColor(symbolStyle, activeData.color),
            setRole,
        },
    })
}
