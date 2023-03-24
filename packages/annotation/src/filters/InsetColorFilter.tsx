import { InsetColorFilterProps } from './types'

export const InsetColorFilter = ({
    id,
    erodeR = 0,
    floodColor = '#000000',
    floodOpacity = 0.5,
}: InsetColorFilterProps) => {
    return (
        <filter id={id}>
            <feMorphology operator="erode" radius={erodeR} result={id + '-erode'} />
            <feFlood floodColor={floodColor} floodOpacity={floodOpacity} result={id + '-color'} />
            <feComposite
                operator="in"
                in={id + '-color'}
                in2={id + '-erode'}
                result={id + '-mask'}
            />
            <feComposite operator="over" in={id + '-mask'} in2="SourceGraphic" />
        </filter>
    )
}
