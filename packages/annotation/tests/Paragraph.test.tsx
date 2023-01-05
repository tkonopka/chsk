import { Paragraph } from '../src/paragraphs'
import { splitText } from '../src/paragraphs/utils'
import sans from '../src/paragraphs/arial.json'
import { render, screen } from '@testing-library/react'
import { Chart } from '@chsk/core'
import { chartProps } from './props'

describe('splitText', () => {
    it('handles empty text', () => {
        const result = splitText('', sans, 100)
        expect(result).toHaveLength(0)
    })

    it('splits text along newlines', () => {
        const result = splitText('abc\ndef\nghi', sans, 100, '\n')
        expect(result).toHaveLength(3)
        expect(result[0]).toBe('abc')
    })

    it('splits text along a specified character', () => {
        const result = splitText('abc\ndefQghi', sans, 100, 'Q')
        expect(result).toHaveLength(2)
        expect(result[0]).toBe('abc def')
        expect(result[1]).toBe('ghi')
    })

    it('splits standard text into lines', () => {
        const a = sans['a'] ?? 1
        const space = sans[' '] ?? 1
        const threshold = 2 * space + 7 * a
        const result = splitText('aaa aaa bbb bbb', sans, threshold)
        expect(result).toHaveLength(2)
        expect(result[0]).toBe('aaa aaa')
        expect(result[1]).toBe('bbb bbb')
    })

    it('splits text, leaving very long words on their own lines', () => {
        const a = sans['a'] ?? 1
        const space = sans[' '] ?? 1
        const threshold = 2 * space + 5 * a
        const result = splitText('aaa aaaaaaaaaa bbb', sans, threshold)
        expect(result).toHaveLength(3)
        expect(result[0]).toBe('aaa')
        expect(result[1]).toBe('aaaaaaaaaa')
        expect(result[2]).toBe('bbb')
    })

    it('handles characters that are not in the base profile', () => {
        const result = splitText('[]+=a', sans, 100)
        expect(result).toHaveLength(1)
    })

    it('handles incomplete letter width definitions', () => {
        const widths = { a: 10 }
        const result = splitText('aaa aaa bbb aaa', widths, 70)
        expect(result).toHaveLength(2)
    })
})

describe('Paragraph', () => {
    it('creates a paragraph with multiple lines', () => {
        const a = sans['a'] ?? 1
        render(
            <Chart {...chartProps}>
                <Paragraph position={[0, 0]} size={[a * 8, 20]}>
                    aaa aaa bbb
                </Paragraph>
            </Chart>
        )
        const result = screen.getAllByRole('paragraph')
        const text = result[0].querySelectorAll('text')
        expect(text).toHaveLength(2)
        expect(text[0]?.textContent).toBe('aaa aaa')
        expect(text[1]?.textContent).toBe('bbb')
    })

    it('avoids drawing text when there are no children', () => {
        render(
            <Chart {...chartProps}>
                <Paragraph position={[0, 0]} size={[60, 20]} />
            </Chart>
        )
        const result = screen.queryAllByRole('paragraph')
        expect(result).toBeDefined()
        expect(result[0].querySelectorAll('text')).toHaveLength(0)
    })

    it('accepts children as react elements', () => {
        render(
            <Chart {...chartProps}>
                <Paragraph position={[0, 0]} size={[200, 20]}>
                    <span>aaa bbb</span>
                </Paragraph>
            </Chart>
        )
        const result = screen.queryAllByRole('paragraph')
        expect(result).toBeDefined()
        expect(result[0].querySelectorAll('text')).toHaveLength(1)
    })

    it('uses a specified character to create line breaks', () => {
        render(
            <Chart {...chartProps}>
                <Paragraph position={[0, 0]} size={[200, 20]} separator={' '}>
                    aaa bbb ccc
                </Paragraph>
            </Chart>
        )
        const result = screen.queryAllByRole('paragraph')
        expect(result[0].querySelectorAll('text')).toHaveLength(3)
    })
})
