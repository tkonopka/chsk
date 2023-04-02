import { createElement } from 'react'
import { getTranslate, NumericPositionSpec, X, Y, zeroPadding, zeroPosition } from '../general'
import { ToolbarProps } from './types'
import { DataComponent } from './DataComponent'
import { Button } from './Button'
import { getClassName } from '../themes'

export const Toolbar = <Value,>({
    values,
    value,
    //
    position = zeroPosition,
    itemSize = [24, 24],
    itemPadding = zeroPadding,
    itemAlign = zeroPosition,
    itemStyle,
    horizontal = false,
    //
    dataComponent = DataComponent,
    component = Button,
    handlers,
    modifiers,
    //
    className,
    setRole = true,
    style,
}: ToolbarProps<Value>) => {
    const multipliers = horizontal ? [1, 0] : [0, 1]
    const content = values.map((v: Value, i: number) => {
        const itemPosition: NumericPositionSpec = [
            itemSize[X] * multipliers[X] * i,
            itemSize[Y] * multipliers[Y] * i,
        ]
        return createElement(dataComponent, {
            key: 'button-' + v,
            component,
            data: {
                id: String(v),
                value: v,
            },
            props: {
                variant: String(v),
                selected: v === value,
                position: itemPosition,
                size: itemSize,
                padding: itemPadding,
                anchor: zeroPosition,
                align: itemAlign,
                className: className,
                style: itemStyle,
                setRole,
            },
            handlers,
            modifiers,
        })
    })

    return (
        <g
            role={setRole ? 'toolbar' : undefined}
            transform={getTranslate(position[X], position[Y])}
            className={getClassName('toolbar', className)}
            style={style}
        >
            {content}
        </g>
    )
}
