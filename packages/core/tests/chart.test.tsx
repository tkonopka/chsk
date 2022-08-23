import { render, screen } from '@testing-library/react'
import { Chart } from '../src'
import { chartProps } from './props'

describe('Chart', () => {
    it('creates a chart with default props', () => {
        render(<Chart />)
        expect(screen.getByRole('chart-content')).toBeDefined()
    })
})
