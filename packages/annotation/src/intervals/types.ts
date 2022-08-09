import { SvgElementProps, ContainerProps } from '@chask/core'

export interface IntervalLabelProps extends SvgElementProps, ContainerProps {
    /** position of center of label */
    position: [number, number]
    /** additional translation */
    translate?: [number, number]
}
