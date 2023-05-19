import {
    GridLinesProps,
    LineProps,
    NumericPositionSpec,
    PositionSpec,
    PositionUnits,
    RectangleProps,
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

export interface StripeProps extends SvgElementVariantProps, Pick<GridLinesProps, 'expansion'> {
    /** variant */
    variant: 'x' | 'y'
    /** domain interval */
    domain: PositionSpec
    /** units for domain */
    domainUnits?: PositionUnits
    /** shifts for domain boundaries (multiples of bandwidth) */
    shift?: NumericPositionSpec
    /** component used to draw individual stripes */
    component?: FC<RectangleProps>
}

export interface GridStripesProps extends GridLinesProps, Pick<StripeProps, 'component'> {
    /** toggle intervals used for stripes */
    parity?: 'even' | 'odd'
}
