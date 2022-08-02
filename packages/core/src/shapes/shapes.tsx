import { getCircleStyles } from './circles'
import { getRectStyles } from './rects'

export const getShapeStyles = (id: string) => {
    return getCircleStyles(id).concat(getRectStyles(id))
}
