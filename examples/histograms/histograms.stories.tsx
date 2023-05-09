import { GalleryMeta, GalleryStory } from '../gallery'
import { generateLineHistogramData, LineHistogramChart } from './LineHistogramChart'
import { generateManyLinesHistogramData, ManyLinesHistogramChart } from './ManyLinesHistogramChart'
import {
    generateOverlappingHistogramData,
    OverlappingHistogramChart,
} from './OverlappingHistogramChart'
import {
    generateMultipleViewsHistogramData,
    MultipleViewsHistogramChart,
} from './MultipleViewsHistogramChart'
import { generateHistogramScatterData, HistogramScatterChart } from './HistogramScatterChart'

export default {
    ...GalleryMeta,
    title: 'Gallery/Histograms',
}

export const Annotations: GalleryStory = {
    name: 'annotations',
    args: {
        generator: generateLineHistogramData,
        chart: LineHistogramChart,
        steps: ['axes', 'data', 'primary-label', 'secondary-label'],
    },
}

export const ManyDistributions: GalleryStory = {
    name: 'many distributions',
    args: {
        generator: generateManyLinesHistogramData,
        chart: ManyLinesHistogramChart,
        steps: ['axes', 'data', 'legend'],
    },
}

export const MouseInteractions: GalleryStory = {
    name: 'mouse interactions',
    args: {
        generator: generateOverlappingHistogramData,
        chart: OverlappingHistogramChart,
        comment: <div>Mouse interactions with entire histogram or with individual bins.</div>,
    },
}

export const MultipleViews: GalleryStory = {
    name: 'multiple views',
    args: {
        generator: generateMultipleViewsHistogramData,
        chart: MultipleViewsHistogramChart,
        steps: ['subtitle', 'small', 'medium', 'large'],
    },
}

export const Controls: GalleryStory = {
    name: 'user controls',
    args: {
        generator: generateHistogramScatterData,
        chart: HistogramScatterChart,
        comment: (
            <div>
                This dataset combines points from two distributions. Regressions lead to different
                slopes depending on inclusion criteria. Use the controls on the histogram to change
                the criteria.
            </div>
        ),
    },
}
