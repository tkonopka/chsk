import { useChartData, useRawData } from '@chask/core'
import { DownloadProps } from './types'

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

const downloadSvgToFile = (id: string, filename: string) => {
    const svg = document.getElementById(id)?.outerHTML
    if (!svg || !svg.startsWith('<svg')) {
        return
    }
    downloadToFile(svg, filename)
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
    className,
    setRole,
    children,
}: Omit<DownloadProps, 'variant'>) => {
    const chartData = useChartData().data
    return (
        <g
            role={setRole ? 'download-image' : undefined}
            className={className}
            onClick={() => downloadSvgToFile(chartData.id, filename)}
        >
            {children}
        </g>
    )
}

export const Download = ({
    variant,
    filename,
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
        <ImageDownload filename={filename} className={className} setRole={setRole}>
            {children}
        </ImageDownload>
    )
}
