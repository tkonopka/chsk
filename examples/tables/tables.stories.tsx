import { GalleryMeta, GalleryStory } from '../gallery'
import { generateConfusionTableData, ConfusionTableChart } from './ConfusionTableChart'
import { generateHeatTableData, HeatTableChart } from './HeatTableChart'
import { generateSingleValuesData, SingleValuesChart } from './SingleValuesChart'

export default {
    ...GalleryMeta,
    title: 'Gallery/Tables',
}

export const ConfusionMatrix: GalleryStory = {
    name: 'confusion matrix',
    args: {
        generator: generateConfusionTableData,
        chart: ConfusionTableChart,
    },
}

export const Survey: GalleryStory = {
    name: 'survey',
    args: {
        generator: generateHeatTableData,
        chart: HeatTableChart,
        steps: ['title', 'subtitle', 'grid', 'A', 'B', 'C', 'D', 'E', 'F', 'download'],
    },
}

export const SingleValues: GalleryStory = {
    name: 'single values',
    args: {
        generator: generateSingleValuesData,
        chart: SingleValuesChart,
        comment: (
            <div>
                This example consists of custom-made widgets, each displaying a single percentage.
                Dynamic colors draw attention to entries with low values.
            </div>
        ),
    },
}
