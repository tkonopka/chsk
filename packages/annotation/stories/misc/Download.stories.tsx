import { Chart } from '@chsk/core'
import { Bar, Bars } from '@chsk/band'
import { Download, BoxedLabel } from '../../src'
import { barProps } from '../decorators'

export default {
    title: 'Addons/Annotation/Misc/Download',
    component: Download,
}

export const DataDownload = {
    render: () => (
        <Chart
            id={'downloadData'}
            size={[400, 300]}
            padding={[40, 40, 20, 40]}
            style={{
                display: 'inline-block',
            }}
        >
            <Bar {...barProps}>
                <Bars />
                <Download variant={'data'} filename={'example.json'}>
                    <BoxedLabel
                        position={[0, -24]}
                        size={[200, 24]}
                        anchor={[0, 0]}
                        style={{
                            cursor: 'pointer',
                        }}
                        boxStyle={{
                            fill: '#f2f2f2',
                            strokeWidth: 1,
                        }}
                    >
                        click this box to download data
                    </BoxedLabel>
                </Download>
            </Bar>
        </Chart>
    ),

    name: 'data download',
}

export const ImageDownload = {
    render: () => (
        <Chart
            id={'downloadImage'}
            size={[400, 300]}
            padding={[40, 40, 20, 40]}
            style={{
                display: 'inline-block',
            }}
        >
            <Bar {...barProps}>
                <Bars />
                <Download variant={'image'} filename={'example.svg'}>
                    <BoxedLabel
                        position={[0, -24]}
                        size={[200, 24]}
                        anchor={[0, 0]}
                        style={{ cursor: 'pointer' }}
                        boxStyle={{ fill: '#f2f2f2', strokeWidth: 1 }}
                    >
                        click this box to download image
                    </BoxedLabel>
                </Download>
            </Bar>
        </Chart>
    ),

    name: 'image download',
}
