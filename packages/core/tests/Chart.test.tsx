import { render, screen } from '@testing-library/react'
import { Chart, Grid } from '../src'

const scaleProps = {
    variant: 'linear' as const,
    min: 0,
    max: 100,
}
const chartProps = {
    width: 400,
    height: 300,
    margin: { top: 20, right: 20, bottom: 20, left: 20 },
    data: [],
    scaleX: scaleProps,
    scaleY: scaleProps,
}

describe('Chart', () => {
    it('ignores unrecognized style codes', () => {
        render(<Chart {...chartProps} styles={['text', 'zzz']} />)
        expect(screen.getByRole('chart-content')).toBeDefined()
    })
})
