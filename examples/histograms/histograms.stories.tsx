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
