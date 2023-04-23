import { Chart, Axis, AxisLine, AxisLabel, AxisTicks } from '@chsk/core'
import { Bars } from '@chsk/band'
import { UpSet, UpSetGrid, UpSetBar, UpSetMemberships } from '../../src'
import { commonUpSetProps } from '../decorators'

export default {
    title: 'Addons/Matrix/UpSets/UpSetBar',
    component: UpSetBar,
}

export const Horizontal = {
    render: () => (
        <Chart
            size={[400, 300]}
            padding={[170, 40, 40, 80]}
            style={{
                display: 'inline-block',
            }}
        >
            <UpSet {...commonUpSetProps} horizontal={true}>
                <Axis variant="left" />
                <UpSetGrid
                    symbolStyle={{
                        fill: '#ccc',
                    }}
                />
                <UpSetMemberships
                    lineStyle={{
                        strokeWidth: 3,
                    }}
                />
                <UpSetBar size={150} padding={[0, 0, 10, 0]}>
                    <Axis variant="left">
                        <AxisTicks variant="left" />
                        <AxisLine
                            variant="left"
                            style={{
                                visibility: 'visible',
                            }}
                        />
                        <AxisLabel variant="left">Intersection size</AxisLabel>
                    </Axis>
                    <Axis variant="bottom">
                        <AxisLine
                            variant="bottom"
                            style={{
                                visibility: 'visible',
                            }}
                        />
                    </Axis>
                    <Bars />
                </UpSetBar>
            </UpSet>
        </Chart>
    ),

    name: 'horizontal',
}

export const Vertical = {
    render: () => (
        <Chart
            size={[400, 300]}
            padding={[60, 200, 40, 60]}
            style={{
                display: 'inline-block',
            }}
        >
            <UpSet {...commonUpSetProps} horizontal={false}>
                <Axis variant="top">
                    <AxisTicks
                        variant="top"
                        labelAngle={-70}
                        labelStyle={{
                            dominantBaseline: 'middle',
                            textAnchor: 'start',
                        }}
                    />
                </Axis>
                <UpSetGrid
                    symbolStyle={{
                        fill: '#ccc',
                    }}
                />
                <UpSetMemberships
                    lineStyle={{
                        strokeWidth: 3,
                    }}
                />
                <UpSetBar size={180} padding={[0, 0, 0, 10]}>
                    <Axis variant="left">
                        <AxisLine
                            variant="left"
                            style={{
                                visibility: 'visible',
                            }}
                        />
                    </Axis>
                    <Axis variant="top">
                        <AxisTicks variant="top" />
                        <AxisLine
                            variant="top"
                            style={{
                                visibility: 'visible',
                            }}
                        />
                        <AxisLabel variant="top">Intersection size</AxisLabel>
                    </Axis>
                    <Bars />
                </UpSetBar>
            </UpSet>
        </Chart>
    ),

    name: 'vertical',
}
