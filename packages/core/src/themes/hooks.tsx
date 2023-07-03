import { useTheme } from './context'
import { fillProps } from './utils'
import { ThemedComponent } from './types'
import { WithVariant } from '../general/types'

export const useThemedProps = <Props extends WithVariant>(props: Props, key: ThemedComponent) => {
    const theme = useTheme()
    return fillProps(props, theme[key][String(props.variant ?? 'default')])
}
