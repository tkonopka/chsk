import { render, screen } from '@testing-library/react'
import { Chart, View, Button, Toolbar } from '../../src'
import { chartProps } from '../props'

describe('Toolbar', () => {
    it('creates a toolbar', () => {
        render(
            <Chart {...chartProps}>
                <View>
                    <Toolbar values={['a', 'b']} component={Button} />
                </View>
            </Chart>
        )
        expect(screen.getByRole('toolbar')).toBeDefined()
        expect(screen.queryAllByRole('button')).toHaveLength(2)
    })
})
