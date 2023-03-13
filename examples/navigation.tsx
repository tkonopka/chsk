import { NumericPositionSpec, Typography } from '@chsk/core'
import { defaultCleanSvgConfig, Download } from '@chsk/annotation'

// path from svg 'dataset' icon (source: google fonts https://fonts.google.com/icons; size 20, weight 300)
const pathDataset =
    'M6.208 13.792h2.584v-2.584H6.208Zm5 0h2.584v-2.584h-2.584Zm-5-5h2.584V6.208H6.208Zm5 0h2.584V6.208h-2.584ZM4.75 16.583q-.562 0-.948-.385-.385-.386-.385-.948V4.75q0-.562.385-.948.386-.385.948-.385h10.5q.562 0 .948.385.385.386.385.948v10.5q0 .562-.385.948-.386.385-.948.385Zm0-1.083h10.5q.083 0 .167-.083.083-.084.083-.167V4.75q0-.083-.083-.167-.084-.083-.167-.083H4.75q-.083 0-.167.083-.083.084-.083.167v10.5q0 .083.083.167.084.083.167.083Zm-.25-11v11-11Z'

// paths from svg 'image' icon (source: google fonts https://fonts.google.com/icons; size 20, weight 300)
const pathImage =
    'M4.75 16.583q-.562 0-.948-.395-.385-.396-.385-.938V4.75q0-.542.385-.937.386-.396.948-.396h10.5q.562 0 .948.396.385.395.385.937v10.5q0 .542-.385.938-.386.395-.948.395Zm0-1.083h10.5q.083 0 .167-.083.083-.084.083-.167V4.75q0-.083-.083-.167-.084-.083-.167-.083H4.75q-.083 0-.167.083-.083.084-.083.167v10.5q0 .083.083.167.084.083.167.083Zm1.375-1.708h7.813l-2.605-3.48-2.104 2.709-1.291-1.646ZM4.5 15.5v-11 11Z'

// custom configuration for saving svg files
// - does not export transparent rectangles used for calculating tooltip coordinates
// - does not export icons/buttons used to download data/images
const customCleanSvgConfig = JSON.parse(JSON.stringify(defaultCleanSvgConfig))
customCleanSvgConfig.skipRoles = ['dimensions-reference', 'downloads']

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
    // translation for entire group
    const translate = 'translate(' + position[0] + ',' + position[1] + ')'

    // translations for buttons
    let x = offset
    const translateData = 'translate(' + x + ',-10)'
    if (data) x += 20
    const translateImage = 'translate(' + x + ',-10)'

    return (
        <g role={'downloads'} transform={translate}>
            <Typography key={'downloads-title'} variant={'download'}>
                download:
            </Typography>
            {data ? (
                <Download key={'downloads-data'} variant={'data'} filename={'chart.json'}>
                    <g transform={translateData} className={'download'}>
                        <rect
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            style={{ fillOpacity: 0, cursor: 'pointer' }}
                        />
                        <path d={pathDataset} className={'download'} />
                    </g>
                </Download>
            ) : null}
            {image ? (
                <Download
                    key={'downloads-image'}
                    variant={'image'}
                    cleanSvgConfig={customCleanSvgConfig}
                    filename={'chart.svg'}
                >
                    <g transform={translateImage} className={'download'}>
                        <rect
                            x={0}
                            y={0}
                            width={20}
                            height={20}
                            style={{ fillOpacity: 0, cursor: 'pointer' }}
                        />
                        <path d={pathImage} className={'download'} />
                    </g>
                </Download>
            ) : null}
        </g>
    )
}
