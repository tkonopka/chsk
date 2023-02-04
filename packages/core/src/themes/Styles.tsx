import { SvgBaseComponent, svgBaseComponents } from './types'
import { useTheme } from './context'
import { componentStyles } from './helpers'
import { useMemo } from 'react'

export const Styles = ({ chartId, styles }: { chartId: string; styles?: SvgBaseComponent[] }) => {
    const theme = useTheme()
    if (styles && styles.length === 0) return null
    const styleDefinitions = useMemo(() => {
        return (styles ?? svgBaseComponents)
            .map(component => componentStyles(chartId, component, theme))
            .flat()
            .filter(Boolean)
            .join('\n')
    }, [chartId, styles, theme])
    return <style>{styleDefinitions}</style>
}
