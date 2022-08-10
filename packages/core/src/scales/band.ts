import { BandAxisScale, BandScaleSpec } from './types'

// a scale function similar to D3's createBandScale
export const createBandScale = ({
    domain,
    size,
    padding = 0.1,
    paddingInner,
    paddingOuter,
    extraPadding = {},
}: Omit<BandScaleSpec, 'variant'> & {
    size: number
}): BandAxisScale => {
    const n = domain.length
    const innerPadding = Number(n > 1) * Math.max(0, Math.min(1, paddingInner ?? padding))
    const outerPadding = Math.max(0, paddingOuter ?? padding)
    const totalExtraPadding = Object.keys(extraPadding).reduce(
        (acc: number, k: string) => acc + extraPadding[k],
        0
    )
    const step = size / (2 * outerPadding + n - innerPadding + totalExtraPadding)
    const bandwidth = (1 - innerPadding) * step
    let position = outerPadding * step
    const positions: Record<string, number> = {}
    domain.forEach(item => {
        const extra = extraPadding[item] ?? 0
        positions[item] = position + extra
        position += step
    })

    // build output object
    // default function returns centers of the band
    const result = (x: string) => (positions[x] ?? 0) + bandwidth / 2
    // properties that mimic d3 functionality
    result.domain = () => domain
    result.bandwidth = () => bandwidth
    result.step = () => step
    result.ticks = () => domain
    // additional properties
    result.variant = 'band' as const

    return result
}
