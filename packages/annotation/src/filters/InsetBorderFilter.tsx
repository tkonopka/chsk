import { InsetBorderFilterProps } from './types'

export const InsetBorderFilter = ({
    id,
    r = 1,
    erodeR = 0,
    floodColor = '#000000',
    floodOpacity = 0.5,
}: InsetBorderFilterProps) => {
    return (
        <filter id={id}>
            <feMorphology in="SourceGraphic" operator="erode" radius={r} result={id + '-in'} />
            <feMorphology
                in="SourceGraphic"
                operator="erode"
                radius={erodeR}
                result={id + '-erode'}
            />
            <feFlood floodColor={floodColor} floodOpacity={floodOpacity} result={id + '-color'} />
            <feComposite
                operator="out"
                in={id + '-erode'}
                in2={id + '-in'}
                result={id + '-boundary'}
            />
            <feComposite
                operator="in"
                in={id + '-color'}
                in2={id + '-boundary'}
                result={id + '-mask'}
            />
            <feComposite operator="over" in={id + '-mask'} in2="SourceGraphic" />
        </filter>
    )
}
