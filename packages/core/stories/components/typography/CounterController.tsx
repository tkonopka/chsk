import { useState } from 'react'
import { Chart, Surface, View, Counter, CounterProps } from '../../../src'

const randomUniformValue = (min: number, max: number) => {
    return min + Math.random() * (max - min)
}

export const CounterController = ({
    position = [0, 0],
    nDecimalPlaces = 0,
    component,
    format = (v: number) => String(v),
    valueTransition,
}: Pick<
    CounterProps,
    'position' | 'format' | 'nDecimalPlaces' | 'component' | 'valueTransition'
>) => {
    const [value, setValue] = useState(randomUniformValue(0, 100))
    const updateValue = () => {
        setValue(randomUniformValue(0, 100))
    }
    return (
        <>
            <div>
                <button onClick={() => updateValue()}>Update value</button>
            </div>
            <Chart
                size={[400, 300]}
                padding={[40, 40, 40, 40]}
                style={{ margin: '0.5em', border: 'solid 1px #aa3333' }}
            >
                <Surface variant={'inner'} />
                <View>
                    <Counter
                        position={position}
                        format={format}
                        style={{ fontSize: 32 }}
                        nDecimalPlaces={nDecimalPlaces}
                        component={component}
                        valueTransition={valueTransition}
                    >
                        {value}
                    </Counter>
                </View>
            </Chart>
        </>
    )
}
