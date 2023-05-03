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
    ...props
}: StripeProps) => {
    const { scales } = useScales()
    const { size } = useDimensions()
    const isX = variant === 'x'
    const scale = isX ? scales.x : scales.y
    const bandwidth = scale.bandwidth()

    const units = positionUnitPair(domainUnits)
    const coordinates: NumericPositionSpec = [
        getAbsoluteCoordinate(domain[0], units[0], isX ? size[X] : size[Y], scale) +
            shift[0] * bandwidth,
        getAbsoluteCoordinate(domain[1], units[1], isX ? size[X] : size[Y], scale) +
            shift[1] * bandwidth,
    ]
    const [e1, e2] = numberPair(expansion)

    const result = isX ? (
        <Rectangle
            variant={'stripe'}
            x={coordinates[0]}
            width={coordinates[1] - coordinates[0]}
            y={-e1}
            height={size[Y] + e1 + e2}
            {...props}
        />
    ) : (
        <Rectangle
            variant={'stripe'}
            x={-e1}
            width={size[X] + e1 + e2}
            y={coordinates[0]}
            height={coordinates[1] - coordinates[0]}
            {...props}
        />
    )

    return result
}
