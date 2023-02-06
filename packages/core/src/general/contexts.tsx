import { createContext, ReactNode, useContext, useMemo, useRef } from 'react'
import { DimensionsContextProps, DimensionsProviderProps } from './types'
import { getInnerSize } from './utils'
import { TOP, LEFT, X, Y } from './constants'
import { getTranslate } from './dimensions'

export const DimensionsContext = createContext({
    size: [0, 0],
    margin: [0, 0, 0, 0],
} as DimensionsContextProps)

export const DimensionsProvider = ({
    size,
    padding,
    role,
    children,
}: DimensionsProviderProps & { children: ReactNode }) => {
    const ref = useRef<SVGSVGElement>(null)
    const value: DimensionsContextProps = useMemo(
        () => ({ size: getInnerSize(size, padding), margin: padding, ref }),
        [size, padding, ref]
    )
    return (
        <DimensionsContext.Provider value={value}>
            <g key={'ref'} role={role ? 'dimensions-reference' : undefined} ref={ref}>
                <rect
                    x={padding[LEFT]}
                    y={padding[TOP]}
                    width={value.size[X]}
                    height={value.size[Y]}
                    style={{ opacity: 0 }}
                />
            </g>
            <g key={'content'} role={role} transform={getTranslate(padding[LEFT], padding[TOP])}>
                {children}
            </g>
        </DimensionsContext.Provider>
    )
}

export const useDimensions = () => useContext(DimensionsContext)
