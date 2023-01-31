import { DimensionsProvider, LEFT, TOP, X, Y } from '../general'
import { ScalesProvider } from '../scales'
import { BaseViewProps } from './types'
import { OriginalDataProvider, ProcessedDataProvider } from './contexts'
import { TooltipProvider } from '../tooltips'

export const BaseView = ({
    position,
    size,
    padding,
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
        <g role={role} transform={translate}>
            <DimensionsProvider size={size} padding={padding}>
                <OriginalDataProvider data={originalData}>
                    <ScalesProvider scales={scales}>
                        <ProcessedDataProvider
                            data={processedData}
                            seriesIndexes={seriesIndexes}
                            keys={keys}
                        >
                            <TooltipProvider>{children}</TooltipProvider>
                        </ProcessedDataProvider>
                    </ScalesProvider>
                </OriginalDataProvider>
            </DimensionsProvider>
        </g>
    )
}
