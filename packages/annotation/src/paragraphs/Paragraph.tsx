import { ParagraphProps } from './types'
import { composeClassName, Typography, X, Y } from '@chsk/core'
import sans from './arial.json'
import serif from './times-new-roman.json'
import { getLetterProfile, getTextContent, splitText } from './utils'

export const Paragraph = ({
    position = [0, 0],
    size = [100, 22],
    align = 0.5,
    separator,
    letterBaseWidths = 'sans',
    letterWidths,
    className,
    style,
    setRole = true,
    children,
}: ParagraphProps) => {
    const letters = getLetterProfile(letterBaseWidths === 'sans' ? sans : serif, letterWidths)
    const lines = splitText(getTextContent(children), letters, size[X], separator)
    const offsets = Array(lines.length)
        .fill(0)
        .map((_, index) => index * size[Y])
    const maxOffset = offsets[offsets.length - 1]
    const [x, y] = [position[X], position[Y] - align * maxOffset]
    const compositeClassName = composeClassName(['paragraph', className])

    const content = lines.map((line, index) => (
        <Typography
            key={'paragraph-' + index}
            variant={'paragraph'}
            position={[x, y + offsets[index]]}
            className={className}
            style={style}
            setRole={setRole}
        >
            {line}
        </Typography>
    ))
    return (
        <g className={compositeClassName} role={setRole ? 'paragraph' : undefined}>
            {content}
        </g>
    )
}
