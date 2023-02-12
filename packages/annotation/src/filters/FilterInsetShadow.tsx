import { FilterInsetShadowProps } from './types'

// Svg filter to create an inset shadow
// modified based on:
// https://css-tricks.com/adding-shadows-to-svg-icons-with-css-and-svg-filters/
export const FilterInsetShadow = ({
    id,
    blurStdDeviation = 5,
    floodColor = '#000000',
    floodOpacity = 0.9,
}: FilterInsetShadowProps) => {
    return (
        <filter id={id}>
            <feGaussianBlur stdDeviation={blurStdDeviation} result={id + '-blur'} />
            <feComposite
                operator="out"
                in="SourceGraphic"
                in2={id + '-blur'}
                result={id + '-inverse'}
            />
            <feFlood floodColor={floodColor} floodOpacity={floodOpacity} result={id + '-color'} />
            <feComposite
                operator="in"
                in={id + '-color'}
                in2={id + '-inverse'}
                result={id + '-shadow'}
            />
            <feComposite operator="over" in={id + '-shadow'} in2="SourceGraphic" />
        </filter>
    )
}
