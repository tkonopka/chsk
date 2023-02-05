import { UpSetMembershipProps } from './types'
import { Circle, getClassName, getMinMax, Line, X, Y } from '@chsk/core'
import { createElement } from 'react'

export const UpSetMembership = ({
    positions,
    r,
    symbol = Circle,
    line = Line,
    symbolStyle,
    lineStyle,
    className,
    setRole = false,
}: UpSetMembershipProps) => {
    const xCoordinates = getMinMax(positions.map(coords => coords[X]))
    const yCoordinates = getMinMax(positions.map(coords => coords[Y]))
    const drawLine = xCoordinates[0] != xCoordinates[1] || yCoordinates[0] != yCoordinates[1]
    const compositeClassName = getClassName('upSetMembership', className)
    const lineElement = createElement(line, {
        key: 'line',
        x1: xCoordinates[0],
        x2: xCoordinates[1],
        y1: yCoordinates[0],
        y2: yCoordinates[1],
        style: lineStyle,
        className: compositeClassName,
        setRole,
    })
    const symbolElements = positions.map((position, index) =>
        createElement(symbol, {
            key: 'symbol-' + index,
            cx: position[0],
            cy: position[1],
            r,
            style: symbolStyle,
            className: compositeClassName,
            setRole,
        })
    )

    return (
        <g role={'upset-membership'}>
            {drawLine ? lineElement : null}
            {symbolElements}
        </g>
    )
}
