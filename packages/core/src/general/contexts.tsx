import { createContext, ReactNode, useContext, useMemo, useRef } from 'react'
import { DimensionsContextProps, DimensionsProviderProps } from './types'
import { getInnerSize } from './utils'
import { X, Y } from './constants'

export const DimensionsContext = createContext({
    size: [0, 0],
    padding: [0, 0, 0, 0],
    innerSize: [0, 0],
} as DimensionsContextProps)

export const DimensionsProvider = ({
    size,
    padding,
    setRole = true,
    children,
}: DimensionsProviderProps & { setRole?: boolean; children: ReactNode }) => {
    const ref = useRef<SVGSVGElement>(null)
    const value: DimensionsContextProps = useMemo(
        () => ({ size, padding, containerRef: ref, innerSize: getInnerSize(size, padding) }),
        [size, padding, ref]
    )
    return (
        <DimensionsContext.Provider value={value}>
            <g role={setRole ? 'dimensions-reference' : undefined} ref={ref}>
                <rect x={0} y={0} width={size[X]} height={size[Y]} style={{ opacity: 0 }} />
            </g>
            {children}
        </DimensionsContext.Provider>
    )
}

export const useDimensions = () => useContext(DimensionsContext)
