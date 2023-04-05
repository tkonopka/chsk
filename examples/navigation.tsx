import {
    ButtonProps,
    centerAlign,
    getAlignPosition,
    getAnchoredOrigin,
    getClassName,
    getTranslate,
    NumericPositionSpec,
    Typography,
    zeroPadding,
    zeroPosition,
} from '@chsk/core'
import { defaultCleanSvgConfig, Download } from '@chsk/annotation'
import { iconPaths } from './iconPaths'

// custom configuration for saving svg files
// - does not export transparent rectangles used for calculating tooltip coordinates
// - does not export icons/buttons used to download data/images
const customCleanSvgConfig = JSON.parse(JSON.stringify(defaultCleanSvgConfig))
customCleanSvgConfig.skipRoles = ['dimensions-reference', 'view-controller', 'downloads']

// displays two text links - a data download and an image download
export const DownloadButtons = ({
    position,
    offset = 55,
    data = false,
    image = false,
}: {
    position: NumericPositionSpec
    offset?: number
    data?: boolean
    image?: boolean
}) => {
    const positionData: NumericPositionSpec = [offset, -10]
    const positionImage: NumericPositionSpec = [offset + (data ? 20 : 0), -10]
    return (
        <g role={'downloads'} transform={getTranslate(position[0], position[1])}>
            <Typography key={'download'} variant={'button'}>
                download:
            </Typography>
            {data ? (
                <Download key={'data'} variant={'data'} filename={'chart.json'}>
                    <IconButton position={positionData} variant={'dataset'} />
                </Download>
            ) : null}
            {image ? (
                <Download
                    key={'image'}
                    variant={'image'}
                    cleanSvgConfig={customCleanSvgConfig}
                    filename={'chart.svg'}
                >
                    <IconButton position={positionImage} variant={'image'} />
                </Download>
            ) : null}
        </g>
    )
}

export const IconButton = ({
    variant = 'default',
    position = zeroPosition,
    size = [20, 20],
    padding = zeroPadding,
    anchor = centerAlign,
    align = centerAlign,
    offset = zeroPosition,
    selected = false,
    style,
    className,
    setRole = true,
    ...props
}: ButtonProps) => {
    const corner = getAnchoredOrigin(position, size, anchor)
    const [x, y] = getAlignPosition(corner, size, align, padding)
    const buttonVariant =
        'button' + (selected ? ' selected' : '') + (variant === 'default' ? '' : ' ' + variant)
    const compositeClassName = getClassName(buttonVariant, className)
    const d = variant in iconPaths ? iconPaths[variant] : ''
    return (
        <g
            key={'button-' + JSON.stringify(position) + '-' + selected}
            role={setRole ? 'button-' + variant : undefined}
            transform={getTranslate(x + offset[0], y + offset[1])}
            className={compositeClassName}
            {...props}
        >
            <rect
                key={'bg-' + selected}
                x={0}
                y={0}
                width={20}
                height={20}
                rx={3}
                ry={3}
                className={compositeClassName?.replace('button ', 'button bg ')}
            />
            <path key={'icon'} d={d} style={style} className={compositeClassName} />
        </g>
    )
}
