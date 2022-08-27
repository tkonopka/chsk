import { PositionSpec, FourSideSizeSpec, SizeSpec, SizeUnit, NumericPositionSpec } from '../general'
import { ColorScaleProps, ContinuousScaleProps, ScaleProps, ScalesContextProps } from '../scales'
import { ReactNode } from 'react'

export type WithId = {
    id: string
}

export type RecordWithId = WithId & Record<string, unknown>

export type OriginalDataContextProps = {
    /** data */
    data: Array<RecordWithId>
}

export type ProcessedDataContextProps = {
    /** data */
    data: Array<RecordWithId>
    /** map from series ids to indexes */
    seriesIndexes: Record<string, number>
    /** list of keys */
    keys: string[]
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
    padding?: FourSideSizeSpec
    /** children components */
    children?: ReactNode
}

export type ViewSeriesKeys = {
    /** prepared map from series ids to integers */
    seriesIndexes: Record<string, number>
    /** array of keys for a view */
    keys: string[]
}

export interface ViewProps extends ContainerProps {
    /** data array **/
    data?: Array<RecordWithId> | ViewSeriesKeys
    /** automatically adjust scales if/when data subsets become disabled */
    autoRescale?: boolean
    /** scale for horizontal axis */
    scaleX?: ScaleProps
    /** scale for vertical axis */
    scaleY?: ScaleProps
    /** scale for color */
    scaleColor?: ColorScaleProps
    /** scale for size */
    scaleSize?: ContinuousScaleProps
}

export interface BaseViewProps extends Pick<ProcessedDataContextProps, 'seriesIndexes' | 'keys'> {
    /** position as an array [x, y] */
    position: NumericPositionSpec
    /** size as an array [width, height] */
    size: SizeSpec
    /** padding (absolute values) **/
    padding: FourSideSizeSpec
    /** original dataset */
    originalData: Array<RecordWithId>
    /** processed dataset */
    processedData: Array<RecordWithId>
    /** scales */
    scales: ScalesContextProps
    /** role */
    role: string
    /** children components */
    children?: ReactNode
}
