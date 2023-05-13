import { Scales, useScales } from '@chsk/core'
import { ProcessedDataContextProps, useProcessedData } from '@chsk/core'

export const GetScales = ({ value }: { value: Scales }) => {
    const { scales } = useScales()
    value.x = scales.x
    value.y = scales.y
    value.size = scales.size
    value.color = scales.color
    return null
}

export const GetProcessedData = ({ value }: { value: ProcessedDataContextProps }) => {
    const processedData = useProcessedData()
    value.data = processedData.data
    value.keys = processedData.keys
    value.seriesIndexes = processedData.seriesIndexes
    return null
}
