import { addColor, TooltipDataComponent, Path } from '@chsk/core'
import { VennSetsProps } from './types'
import { createElement } from 'react'
import { isVennPreparedData } from './predicates'
import { useVennPreparedData } from './contexts'

export const VennSets = ({
    component = Path,
    className,
    style,
    dataComponent = TooltipDataComponent,
    ...props
}: VennSetsProps) => {
    const preparedData = useVennPreparedData()
    const data = preparedData.data
    if (!isVennPreparedData(data)) return null

    const result = data.map(item => {
        return createElement(dataComponent, {
            key: 'set-' + item.id,
            component,
            data: item,
            props: {
                d: item.d,
                className: className,
                style: addColor(style, item.color),
                variant: 'set',
                setRole: false,
            },
            ...props,
        })
    })

    return <>{result}</>
}
