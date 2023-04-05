import { useMemo } from 'react'
import { cloneDeep, merge } from 'lodash'
import { useTheme } from './context'
import { ThemedComponent, WithVariant } from './types'

export const useThemedProps = <Props extends WithVariant>(props: Props, key: ThemedComponent) => {
    const theme = useTheme()
    return useMemo(() => {
        return merge(cloneDeep(theme[key][String(props.variant ?? 'default')]), props)
    }, [theme, props, key])
}
