import { DimensionsProvider } from '../general'
import { createScales, ScalesProvider } from '../scales'
import { ViewProps } from './types'
import { OriginalDataProvider } from './contexts'
import { useView } from './hooks'

export const View = ({
    position = [0, 0],
    size = [1, 1],
    units = 'relative',
    anchor = [0, 0],
    padding = [0, 0, 0, 0],
    data = [],
    scaleX,
    scaleY,
    children,
}: ViewProps) => {
    const { dimsProps, translate } = useView({ position, size, units, anchor, padding })
    const scales = createScales({ ...dimsProps, scaleX, scaleY })
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