import { cloneDeep, merge } from 'lodash'
import { useTheme } from './context'
import { ThemedComponent, WithVariant } from './types'

export const themedProps = <Props extends WithVariant>(props: Props, key: ThemedComponent) => {
    const theme = useTheme()
    return merge(cloneDeep(theme[key][String(props.variant ?? 'default')]), props)
}
