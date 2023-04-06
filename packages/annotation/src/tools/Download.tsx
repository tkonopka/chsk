import { CompleteThemeSpec, useChartData, useRawData, useTheme } from '@chsk/core'
import { CleanSvgConfig, DownloadProps } from './types'
import { cleanSvg, defaultCleanSvgConfig } from './cleanSvg'

// modified from https://stackoverflow.com/questions/19721439/download-json-object-as-a-file-from-browser
const downloadToFile = (data: string, filename: string) => {
    const blob = new Blob([data], { type: 'text/json' })
    const link = document.createElement('a')
    link.download = filename
    link.href = window.URL.createObjectURL(blob)
    link.dataset.downloadurl = ['text/json', link.download, link.href].join(':')
    const event = new MouseEvent('click', { view: window, bubbles: true, cancelable: true })
    link.dispatchEvent(event)
    link.remove()
}

const downloadSvgToFile = (
    id: string,
    filename: string,
    config: CleanSvgConfig,
    theme: CompleteThemeSpec
) => {
    const svg = document.getElementById(id)
    if (!svg) return
    let result = cleanSvg(svg?.cloneNode(true) as HTMLElement, config, theme)?.outerHTML
    config.newlineTags.forEach(tag => {
        const closePattern = new RegExp('</' + tag + '><', 'g')
        const openPattern = new RegExp('><' + tag, 'g')
        // the close pattern can overlap with itself (e.g. </g></g>, so apply it twice to get all matches
        result = result
            .replace(closePattern, '</' + tag + '>\n<')
            .replace(closePattern, '</' + tag + '>\n<')
            .replace(openPattern, '>\n<' + tag)
    })
    downloadToFile(result, filename)
}

const DataDownload = ({
    filename,
    setRole,
    className,
    children,
}: Omit<DownloadProps, 'variant'>) => {
    const rawData = useRawData().data
    return (
        <g
            role={setRole ? 'download-data' : undefined}
            className={className}
            onClick={() => downloadToFile(JSON.stringify(rawData), filename)}
        >
            {children}
        </g>
    )
}

const ImageDownload = ({
    filename,
    cleanSvgConfig = defaultCleanSvgConfig,
    className,
    setRole,
    children,
}: Omit<DownloadProps, 'variant'>) => {
    const chartData = useChartData().data
    const theme = useTheme()
    return (
        <g
            role={setRole ? 'download-image' : undefined}
            className={className}
            onClick={() => downloadSvgToFile(chartData.id, filename, cleanSvgConfig, theme)}
        >
            {children}
        </g>
    )
}

export const Download = ({
    variant,
    filename,
    cleanSvgConfig = defaultCleanSvgConfig,
    className,
    setRole = true,
    children,
}: DownloadProps) => {
    if (variant === 'data')
        return (
            <DataDownload filename={filename} className={className} setRole={setRole}>
                {children}
            </DataDownload>
        )
    return (
        <ImageDownload
            filename={filename}
            cleanSvgConfig={cleanSvgConfig}
            className={className}
            setRole={setRole}
        >
            {children}
        </ImageDownload>
    )
}
