import { DimensionsProvider, LEFT, TOP, X, Y } from '../general'
import { ScalesProvider } from '../scales'
import { BaseViewProps } from './types'
import { OriginalDataProvider, ProcessedDataProvider } from './contexts'

export const BaseView = ({
    position,
    size,
    padding = [0, 0, 0, 0],
    originalData,
    processedData,
    seriesIndexes,
    keys,
    scales,
    role = 'view',
    children,
}: BaseViewProps) => {
    const translate =
        'translate(' + (position[X] + padding[LEFT]) + ',' + (position[Y] + padding[TOP]) + ')'
    return (
        <DimensionsProvider size={size} padding={padding}>
            <OriginalDataProvider data={originalData}>
                <ScalesProvider scales={scales}>
                    <ProcessedDataProvider
                        data={processedData}
                        seriesIndexes={seriesIndexes}
                        keys={keys}
                    >
                        <g role={role} transform={translate}>
                            {children}
                        </g>
                    </ProcessedDataProvider>
                </ScalesProvider>
            </OriginalDataProvider>
        </DimensionsProvider>
    )
}
