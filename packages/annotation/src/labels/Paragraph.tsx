import { domAnimation, m, LazyMotion } from 'framer-motion'
import { getClassName, X, Y } from '@chsk/core'
import { getTextContent, getLetterProfile, splitText } from './utils'
import { ParagraphProps } from './types'
import sans from './arial.json'
import serif from './times-new-roman.json'

export const Paragraph = ({
    position = [0, 0],
    size = [100, 22],
    align = 0.5,
    angle,
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
    const compositeClassName = getClassName('paragraph', className)
    const config = { x, y, rotate: angle, originX: '0px', originY: '0px' }
    const content = lines.map((line, index) => (
        <text
            key={'paragraph-' + index}
            y={offsets[index]}
            className={compositeClassName}
            style={style}
        >
            {line}
        </text>
    ))
    return (
        <LazyMotion features={domAnimation}>
            <m.g role={setRole ? 'paragraph' : undefined} initial={config} animate={config}>
                {content}
            </m.g>
        </LazyMotion>
    )
}
