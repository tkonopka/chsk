import {
    GridLinesProps,
    LineProps,
    NumericPositionSpec,
    PositionSpec,
    PositionUnits,
    RectangleProps,
    SizeSpec,
    SizeUnits,
    SvgElementVariantProps,
} from '@chsk/core'
import { FC } from 'react'

export interface ConnectorProps extends LineProps {
    /** variant */
    variant: 'line' | 'hl' | 'lh' | 'vl' | 'lv'
    /** smoothing parameter */
    beta?: number
    /** position of elbow in segmented lines */
    elbow?: number
    /** unit for elbow position */
    elbowUnit?: 'absolute' | 'relative'
}

export interface StripeProps
    extends SvgElementVariantProps,
        Pick<GridLinesProps, 'expansion' | 'shiftUnit'> {
    /** variant */
    variant: 'x' | 'y'
    /** domain interval */
    domain: PositionSpec
    /** units for domain */
    domainUnits?: PositionUnits
    /** shifts for domain boundaries */
    shift?: NumericPositionSpec
    /** component used to draw individual stripes */
    component?: FC<RectangleProps>
}

export interface GridStripesProps extends GridLinesProps, Pick<StripeProps, 'component'> {
    /** toggle intervals used for stripes */
    parity?: 'even' | 'odd'
}

export interface ViewfinderProps extends RectangleProps {
    /** variant */
    variant?:
        | 'corners'
        | 'top-left'
        | 'top-right'
        | 'bottom-left'
        | 'bottom-right'
        | 'top-left-bottom-right'
        | 'top-right-bottom-left'
    /** lengths of corner lines */
    lengths?: SizeSpec
    /** units for corner lines */
    lengthsUnits?: SizeUnits
}
