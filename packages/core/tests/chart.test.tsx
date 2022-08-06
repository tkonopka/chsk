import { render, screen } from '@testing-library/react'
import { Chart } from '../src'
import { chartProps } from './props'

describe('Chart', () => {
    it('ignores unrecognized style codes', () => {
        render(<Chart {...chartProps} styles={['text', 'zzz']} />)
        expect(screen.getByRole('chart-content')).toBeDefined()
    })
})
