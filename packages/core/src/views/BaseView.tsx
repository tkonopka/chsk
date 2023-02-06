import { DimensionsProvider, LEFT, TOP, X, Y } from '../general'
import { ScalesProvider } from '../scales'
import { BaseViewProps } from './types'
import { OriginalDataProvider, ProcessedDataProvider } from './contexts'
import { TooltipProvider } from '../tooltips'

export const BaseView = ({
    variant = 'default',
    position,
    size,
    padding,
    originalData,
    processedData,
    seriesIndexes,
    keys,
    scales,
    className,
    setRole = true,
    style,
    children,
}: BaseViewProps) => {
    const translate =
        'translate(' + (position[X] + padding[LEFT]) + ',' + (position[Y] + padding[TOP]) + ')'
    return (
        <g
            role={setRole ? 'view-' + variant : undefined}
            transform={translate}
            style={style}
            className={className}
        >
            <DimensionsProvider size={size} padding={padding} setRole={setRole}>
                <g role={setRole ? 'view-content' : undefined}>
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
                </g>
            </DimensionsProvider>
        </g>
    )
}
