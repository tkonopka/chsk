import { render, screen } from '@testing-library/react'
import { Chart, View, Typography } from '@chask/core'
import { chartProps, viewProps } from './props'
import { Download } from '../src'

describe('Download', () => {
    it('download a dataset', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Download variant={'data'} filename={'result.json'}>
                        <Typography position={[0, 0]}>Data</Typography>
                    </Download>
                </View>
            </Chart>
        )
        const result = screen.getByRole('download-data')
        expect(result).toBeDefined()
        // fireEvent.click triggers the download action, but unsure how to use this in the test
        // fireEvent.click(result)
    })

    it('download an image', () => {
        render(
            <Chart {...chartProps}>
                <View {...viewProps}>
                    <Download variant={'image'} filename={'result.svg'}>
                        <Typography position={[0, 0]}>Image</Typography>
                    </Download>
                </View>
            </Chart>
        )
        const result = screen.getByRole('download-image')
        expect(result).toBeDefined()
        // fireEvent.click triggers the download action, but unsure how to use this in the test
        //fireEvent.click(result)
    })
})
