import { BOTTOM, LEFT, RIGHT, TOP, url, useDimensions, X, Y } from '../general'
import { ViewClipProps } from './types'
import { useThemedProps } from '../themes'
import { defaultSurfaceProps } from './defaults'

export const UnthemedViewClip = ({
    id,
    expansion = defaultSurfaceProps.expansion,
    children,
}: ViewClipProps) => {
    const { size } = useDimensions()
    return (
        <>
            <clipPath key={'clipPath'} id={id}>
                <rect
                    x={-expansion[LEFT]}
                    y={-expansion[TOP]}
                    width={size[X] + expansion[LEFT] + expansion[RIGHT]}
                    height={size[Y] + expansion[TOP] + expansion[BOTTOM]}
                />
            </clipPath>
            <g key={'content'} clipPath={url(id)}>
                {children}
            </g>
        </>
    )
}

export const ViewClip = (props: ViewClipProps) => (
    <UnthemedViewClip {...useThemedProps(props, 'ViewClip')} />
)
