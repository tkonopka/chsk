import { DimensionsProvider } from '../general'
import { getScales, ScalesProvider } from '../scales'
import { ViewProps } from './types'
import { OriginalDataProvider } from './contexts'
import { useView } from './hooks'

export const View = ({
    position = [0, 0],
    positionRelative = false,
    padding = [0, 0, 0, 0],
    anchor = [0, 0],
    size,
    data = [],
    scaleX,
    scaleY,
    children,
}: ViewProps) => {
    const { dimsProps, translate } = useView({ position, positionRelative, size, padding, anchor })
    const scales = getScales({ ...dimsProps, scaleX, scaleY })
    return (
        <DimensionsProvider {...dimsProps}>
            <OriginalDataProvider data={data}>
                <ScalesProvider scales={scales}>
                    <g role="view" transform={translate}>
                        {children}
                    </g>
                </ScalesProvider>
            </OriginalDataProvider>
        </DimensionsProvider>
    )
}

//<ProcessedDataProvider data={data}>
//</ProcessedDataProvider>
