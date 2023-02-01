import { DimensionsProvider, LEFT, TOP, X, Y } from '../general'
import { ScalesProvider } from '../scales'
import { BaseViewProps } from './types'
import { OriginalDataProvider, ProcessedDataProvider } from './contexts'
import { TooltipProvider } from '../tooltips'
import { useRef } from 'react'
import { Surface } from './Surface'

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
    const ref = useRef<SVGSVGElement>(null)
    const translate =
        'translate(' + (position[X] + padding[LEFT]) + ',' + (position[Y] + padding[TOP]) + ')'
    const role = variant === 'default' ? 'view' : 'view-' + variant
    return (
        <g
            role={setRole ? role : undefined}
            transform={translate}
            style={style}
            className={className}
        >
            <DimensionsProvider size={size} padding={padding} containerRef={ref}>
                <g role={setRole ? 'view-dimensions' : undefined} ref={ref}>
                    <Surface variant={'view'} style={{ opacity: 0 }} setRole={false} />
                </g>
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
