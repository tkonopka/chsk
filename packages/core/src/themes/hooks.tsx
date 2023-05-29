import { useMemo } from 'react'
import { cloneProps } from '../general/utils'
import { useTheme } from './context'
import { fillProps } from './utils'
import { ThemedComponent, WithVariant } from './types'

export const useThemedProps = <Props extends WithVariant>(props: Props, key: ThemedComponent) => {
    const theme = useTheme()
    return useMemo(() => {
        return fillProps(props, cloneProps(theme[key][String(props.variant ?? 'default')]))
    }, [theme, props, key])
}
