import { BlurFilterProps } from './types'

export const BlurFilter = ({ id, blurStdDeviation = 5 }: BlurFilterProps) => {
    return (
        <filter id={id}>
            <feGaussianBlur stdDeviation={blurStdDeviation} />
        </filter>
    )
}
