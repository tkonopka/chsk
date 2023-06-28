import { createElement } from 'react'
import { StripeProps } from './types'
import {
    getAbsoluteCoordinate,
    numberPair,
    positionUnitPair,
    NumericPositionSpec,
    Rectangle,
    useDimensions,
    useScales,
    X,
    Y,
} from '@chsk/core'

export const Stripe = ({
    variant = 'x',
    domain,
    domainUnits = 'view',
    expansion = [0, 0],
    shift = [0, 0],
    shiftUnit = 'step',
    component = Rectangle,
    ...props
}: StripeProps) => {
    const { scales } = useScales()
    const { size } = useDimensions()
    const isX = variant === 'x'
    const scale = isX ? scales.x : scales.y
    const scaleSize = isX ? size[X] : size[Y]
    const shiftMultiplier = shiftUnit === 'step' ? scale.step() : scale.bandwidth()

    const units = positionUnitPair(domainUnits)
    const coordinates: NumericPositionSpec = [
        getAbsoluteCoordinate(domain[0], units[0], scaleSize, scale) + shift[0] * shiftMultiplier,
        getAbsoluteCoordinate(domain[1], units[1], scaleSize, scale) + shift[1] * shiftMultiplier,
    ]
    const [e1, e2] = numberPair(expansion)

    const rectProps = isX
        ? {
              x: coordinates[0],
              width: coordinates[1] - coordinates[0],
              y: -e1,
              height: size[Y] + e1 + e2,
          }
        : {
              x: -e1,
              width: size[X] + e1 + e2,
              y: coordinates[0],
              height: coordinates[1] - coordinates[0],
          }

    return createElement(component, { variant: 'stripe', ...rectProps, ...props })
}
