import { useMemo } from 'react'
import { cloneProps } from '../general/utils'
import { merge } from 'lodash'
import { useTheme } from './context'
import { ThemedComponent, WithVariant } from './types'

export const useThemedProps = <Props extends WithVariant>(props: Props, key: ThemedComponent) => {
    const theme = useTheme()
    return useMemo(() => {
        return merge(cloneProps(theme[key][String(props.variant ?? 'default')]), props)
    }, [theme, props, key])
}
