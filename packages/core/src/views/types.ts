import { PaddingSpec, SizeSpec } from '../general'
import { ScaleSpec } from '../scales'
import { ReactNode } from 'react'

export type DataSpec = undefined | null | Array<Record<string, unknown>>

export type DataContextProps = {
    /** data */
    data: DataSpec
}

export interface ContainerProps {
    /** x coordinate */
    x?: number
    /** y coordinate */
    y?: number
    /** width and size */
    size?: SizeSpec
    /** padding **/
    padding?: PaddingSpec
    /** children components */
    children?: ReactNode
}

export interface ViewProps extends ContainerProps {
    /** data array **/
    data: DataSpec
    /** scale for horizontal axis */
    scaleX: ScaleSpec
    /** scale for vertical axis */
    scaleY: ScaleSpec
}
