import { DimensionsProvider, getTranslate, X, Y } from '../general'
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
    scalesContextValue,
    className,
    setRole = true,
    style,
    children,
}: BaseViewProps) => {
    return (
        <g
            role={setRole ? 'view-' + variant : undefined}
            transform={getTranslate(position[X], position[Y])}
            style={style}
            className={className}
        >
            <DimensionsProvider
                size={size}
                padding={padding}
                role={setRole ? 'view-content' : undefined}
            >
                <OriginalDataProvider data={originalData}>
                    <ScalesProvider value={scalesContextValue}>
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
