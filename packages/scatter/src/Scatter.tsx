import { ScatterProps } from './types'

export const Scatter = ({
    x = 0,
    y = 0,
    size,
    padding,
    data,
    scaleX,
    scaleY,
    children,
}: ScatterProps) => {
    return <g>{children}</g>
}
