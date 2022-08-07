import { ScatterProps } from './types'

export const Scatter = ({
    position,
    size,
    padding,
    data,
    scaleX,
    scaleY,
    children,
}: ScatterProps) => {
    return <g>{children}</g>
}
