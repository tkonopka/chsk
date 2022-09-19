import { PositionSpec, PositionUnits, SvgElementVariantProps } from '@chask/core'

export interface BlockArrowProps extends SvgElementVariantProps {
    /** start position */
    start: PositionSpec
    /** end position */
    end: PositionSpec
    /** units for start and end positions */
    units?: PositionUnits
    /** toggling arrow heads at the start and end positions */
    heads?: [boolean, boolean]
    /** width/thickness of arrow stem */
    stemWidth?: number
    /** width of arrowhead (orthogonal to arrow axis) */
    headWidth?: number
    /** length of arrowhead (along arrow axis) */
    headLength?: number
}
