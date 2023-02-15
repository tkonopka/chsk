import { domAnimation, m, LazyMotion } from 'framer-motion'
import { ParagraphProps } from './types'
import { getClassName, getTextContent, X, Y } from '@chsk/core'
import sans from './arial.json'
import serif from './times-new-roman.json'
import { getLetterProfile, splitText } from './utils'

export const Paragraph = ({
    position = [0, 0],
    size = [100, 22],
    align = 0.5,
    rotate,
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
    const config = { x, y, rotate, originX: '0px', originY: '0px' }
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
