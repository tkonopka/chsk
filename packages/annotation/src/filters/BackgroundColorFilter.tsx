import { BackgroundColorFilterProps } from './types'
import { TOP, BOTTOM, LEFT, RIGHT } from '@chsk/core'

export const BackgroundColorFilter = ({
    id,
    expansion = [0, 0, 0, 0],
    floodColor = '#000000',
    floodOpacity = 1,
}: BackgroundColorFilterProps) => {
    return (
        <filter
            id={id}
            x={-expansion[LEFT]}
            y={-expansion[TOP]}
            width={1 + expansion[LEFT] + expansion[RIGHT]}
            height={1 + expansion[TOP] + expansion[BOTTOM]}
        >
            <feFlood floodColor={floodColor} floodOpacity={floodOpacity} />
            <feComposite operator="over" in="SourceGraphic" />
        </filter>
    )
}
