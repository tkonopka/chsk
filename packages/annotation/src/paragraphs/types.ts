import { SizeSpec, TypographyProps } from '@chsk/core'

export interface ParagraphProps extends TypographyProps {
    /** size of individual lines (width, height) */
    size: SizeSpec
    /** vertical alignment */
    align?: number
    /** base letter width profiles */
    letterBaseWidths?: 'serif' | 'sans'
    /** letter widths */
    letterWidths?: Record<string, number>
}
