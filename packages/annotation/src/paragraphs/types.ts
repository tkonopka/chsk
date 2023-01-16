import { SizeSpec, TypographyProps } from '@chsk/core'

export interface ParagraphProps extends Omit<TypographyProps, 'variant'> {
    /** size of individual lines (width, height) */
    size: SizeSpec
    /** vertical alignment */
    align?: number
    /** separator string used to split text into lines */
    separator?: string
    /** base letter width profiles */
    letterBaseWidths?: 'serif' | 'sans'
    /** letter widths */
    letterWidths?: Record<string, number>
}
