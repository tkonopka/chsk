import { render, screen } from '@testing-library/react'
import { Chart, Button } from '../../src'
import { chartProps } from '../props'

describe('Button', () => {
    it('creates a button with text', () => {
        render(
            <Chart {...chartProps}>
                <Button variant={'abc'} position={[20, 20]} />
            </Chart>
        )
        const button = screen.getByRole('button-abc')
        expect(button.getAttribute('class')).toContain('button abc')
        expect(button.textContent).toEqual('abc')
        expect(button.querySelector('text')?.getAttribute('class')).toContain('button abc')
    })

    it('creates a button with custom content', () => {
        render(
            <Chart {...chartProps}>
                <Button variant={'abc'} position={[20, 20]}>
                    <rect x={0} y={0} width={40} height={50} />
                </Button>
            </Chart>
        )
        const button = screen.getByRole('button-abc')
        expect(button.getAttribute('class')).toContain('button abc')
        expect(button.querySelector('rect')).toBeDefined()
    })

    it('creates a button with selected state', () => {
        render(
            <Chart {...chartProps}>
                <Button variant={'A'} position={[20, 20]} selected />
                <Button variant={'B'} position={[20, 20]} selected className={'custom'} />
            </Chart>
        )
        const buttonA = screen.getByRole('button-A')
        expect(buttonA.getAttribute('class')).toContain('button selected A')
        const buttonB = screen.getByRole('button-B')
        expect(buttonB.getAttribute('class')).toContain('button selected B')
    })
})
