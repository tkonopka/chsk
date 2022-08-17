import { PositionSpec, SideSizeSpec, SizeSpec, SizeUnit } from '../general'
import { ScaleProps } from '../scales'
import { ReactNode } from 'react'

export type WithId = {
    id: string
}

export type OriginalDataContextProps = {
    /** data */
    data: Array<Record<string, unknown>>
}

export type ProcessedDataContextProps = {
    /** data */
    data: Array<unknown>
    /** map from series ids to indexes */
    seriesIndexes: Record<string, number>
    /** list of keys */
    keys: string[]
    /** list of labels */
    /** labels: string[] */
}

/** alignment values in [0, 1] for x and y axes */
export type AnchorSpec = [number, number]

export interface ContainerProps {
    /** position as an array [x, y] */
    position?: PositionSpec
    /** size as an array [width, height] */
    size?: SizeSpec
    /** absolute or relative units for position and size measurements */
    units?: SizeUnit
    /** anchor point of container relative to position */
    anchor?: AnchorSpec
    /** padding (absolute values) **/
    padding?: SideSizeSpec
    /** children components */
    children?: ReactNode
}

export interface ViewProps extends ContainerProps {
    /** data array **/
    data?: Array<Record<string, unknown>>
    /** scale for horizontal axis */
    scaleX?: ScaleProps
    /** scale for vertical axis */
    scaleY?: ScaleProps
}
