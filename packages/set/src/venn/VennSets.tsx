import { addColor, TooltipDataComponent, Path } from '@chsk/core'
import { VennSetsProps } from './types'
import { createElement } from 'react'
import { isVennPreparedData } from './predicates'
import { useVennPreparedData } from './contexts'

export const VennSets = ({
    component = Path,
    componentProps,
    className,
    style,
    setRole = true,
    dataComponent = TooltipDataComponent,
    ...props
}: VennSetsProps) => {
    const preparedData = useVennPreparedData()
    const data = preparedData.data
    if (!isVennPreparedData(data)) return null

    const commonProps = { variant: 'set', ...componentProps, className, setRole }
    const result = data.map(item => {
        return createElement(dataComponent, {
            key: 's-' + item.id,
            component,
            data: item,
            props: {
                ...commonProps,
                d: item.d,
                style: addColor(style, item.color),
            },
            ...props,
        })
    })

    return <>{result}</>
}
