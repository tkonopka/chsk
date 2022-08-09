import { PositionSpec, SideSizeSpec, SizeSpec } from '../general'
import { ScaleSpec } from '../scales'
import { ReactNode } from 'react'

export type DataContextProps = {
    /** data */
    data: Array<Record<string, unknown>>
}

export type AnchorSpec = [number, number]

export interface ContainerProps {
    /** position as an array [x, y] */
    position?: PositionSpec
    /** position relative to current container size */
    positionRelative?: boolean
    /** size as an array [width, height] */
    size?: SizeSpec
    /** anchor point of container relative to position */
    anchor?: AnchorSpec
    /** padding **/
    padding?: SideSizeSpec
    /** children components */
    children?: ReactNode
}

export interface ViewProps extends ContainerProps {
    /** data array **/
    data: Array<Record<string, unknown>>
    /** scale for horizontal axis */
    scaleX: ScaleSpec
    /** scale for vertical axis */
    scaleY: ScaleSpec
}
