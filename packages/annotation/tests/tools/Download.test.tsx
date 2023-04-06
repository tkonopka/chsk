import { fireEvent, render, screen } from '@testing-library/react'
import { Chart, View, Typography } from '@chsk/core'
import { chartProps, viewProps } from '../props'
import { Download } from '../../src'

describe('Download', () => {
    // mocks createObjectURL, makes download attempts run without creating any files
    window.URL.createObjectURL = jest.fn()

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
        // trigger the download action
        fireEvent.click(result)
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
        // trigger the download action
        fireEvent.click(result)
    })
})
