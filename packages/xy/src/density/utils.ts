import { ColorScale } from '@chsk/core'
import { lab, rgb } from 'd3-color'

export const floor = Math.floor

export const avgLab = (values: number[], scale: ColorScale) => {
    const n = values.length
    let l = 0,
        a = 0,
        b = 0
    let i = 0
    while (i < n) {
        const v = values[i]
        let j = 1
        while (i + j < n && values[i + j] == v) j += 1
        const vColor = lab(scale(v))
        l += j * vColor.l
        a += j * vColor.a
        b += j * vColor.b
        i += j
    }
    return lab(l / n, a / n, b / n).formatHex()
}

export const avgRgb = (values: number[], scale: ColorScale) => {
    const n = values.length
    let r = 0,
        g = 0,
        b = 0
    let i = 0
    while (i < n) {
        const v = values[i]
        let j = 1
        while (i + j < n && values[i + j] == v) j += 1
        const vColor = rgb(scale(v))
        r += j * vColor.r
        g += j * vColor.g
        b += j * vColor.b
        i += j
    }
    return rgb(r / n, g / n, b / n).formatHex()
}
