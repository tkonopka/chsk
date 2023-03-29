import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from 'react'
import { ScalesProps, ScalesContextValue, LinearScaleProps, ScalesPropsDispatchProp } from './types'
import {
    defaultCategoricalScale,
    defaultCategoricalScaleSpec,
    defaultLinearScaleSpec,
    defaultScaleX,
    defaultScaleY,
    defaultSizeScale,
    defaultSizeScaleSpec,
} from './defaults'
import { createAxisScale } from './axes'
import { createColorScale } from './colors'

export const ScalesContext = createContext({
    scales: {
        x: defaultScaleX,
        y: defaultScaleY,
        color: defaultCategoricalScale,
        size: defaultScaleX,
    },
    scaleProps: {
        x: defaultLinearScaleSpec as LinearScaleProps,
        y: defaultLinearScaleSpec as LinearScaleProps,
        color: defaultCategoricalScaleSpec,
        size: defaultSizeScaleSpec,
    },
    setScaleProps: () => null,
} as ScalesContextValue)

export const ScalesProvider = ({
    value,
    children,
}: {
    value: ScalesContextValue
    children: ReactNode
}) => {
    return <ScalesContext.Provider value={value}>{children}</ScalesContext.Provider>
}

export const useScales = () => useContext(ScalesContext)

/** hook to convert scale props into scale functions, plus other objects to update props from children */
export const useCreateScales = (props: ScalesProps): ScalesContextValue => {
    // inProps are props passed through the function arguments
    const [inProps, setInProps] = useState(props)
    // scaleProps are the effective props, either from function arguments or from subsequent updates
    const [scaleProps, setScaleProps] = useState(props)

    // use string-based representation for props to check equality and avoid re-computes
    // this is string-based to allow some flexibility for outside users
    // this way, outside uses don't have to be too careful about object memoization
    const dep = JSON.stringify(props)

    useEffect(() => {
        if (dep !== JSON.stringify(inProps)) {
            setScaleProps(props)
            setInProps(props)
        }
    }, [dep])

    const scales = useMemo(
        () => ({
            x: createAxisScale(scaleProps.x, 'x'),
            y: createAxisScale(scaleProps.y, 'y'),
            color: scaleProps.color ? createColorScale(scaleProps.color) : defaultCategoricalScale,
            size: scaleProps.size ? createAxisScale(scaleProps.size) : defaultSizeScale,
        }),
        [scaleProps]
    )

    // wrapper for setScaleProps allows passing null to reset props
    const updateScaleProps = useCallback(
        (value: ScalesPropsDispatchProp) => {
            setScaleProps(value === null ? inProps : value)
        },
        [setScaleProps, inProps]
    )

    return { scales, scaleProps, setScaleProps: updateScaleProps }
}
