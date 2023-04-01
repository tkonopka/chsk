import { MouseEvent, RefObject } from 'react'

export const getEventXY = (event: MouseEvent, ref: RefObject<SVGSVGElement>) => {
    const clientRect = ref?.current?.getBoundingClientRect()
    if (clientRect === undefined) return {}
    const x = Math.round(event.clientX - clientRect?.x)
    const y = Math.round(event.clientY - clientRect?.y)
    return { x, y }
}
