import { SvgElementProps, ContainerProps, PositionSpec } from '@chask/core'

export interface ArrowLabelProps extends SvgElementProps, ContainerProps {
    /** position of center of label */
    points: PositionSpec[]
    /** additional translation */
    translate?: [number, number]
}
