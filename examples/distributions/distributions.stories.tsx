import { GalleryMeta, GalleryStory } from '../gallery'
import { generateQuantileGroupsData, QuantileGroupsChart } from './QuantileGroupsChart'
import { generateStripAndBoxData, StripAndBoxChart } from './StripAndBoxChart'
import {
    generateManyDistributionsData,
    ManyDistributionsStripChart,
} from './ManyDistributionsStripChart'
import { generateWaterfallStripData, WaterfallStripChart } from './WaterfallStripChart'
import { generateBarStripData, BarStripChart } from './BarStripChart'

export default {
    ...GalleryMeta,
    title: 'Gallery/Distribution charts',
}

export const QuantileGroups: GalleryStory = {
    name: 'quantiles',
    args: {
        generator: generateQuantileGroupsData,
        chart: QuantileGroupsChart,
    },
}

export const StripsAndBox: GalleryStory = {
    name: 'strips and quantiles',
    args: {
        generator: generateStripAndBoxData,
        chart: StripAndBoxChart,
        steps: ['axes', 'strips', 'quantiles', 'strips', 'strips'],
    },
}

export const ManyDistributions: GalleryStory = {
    name: 'many distributions',
    args: {
        generator: generateManyDistributionsData,
        chart: ManyDistributionsStripChart,
    },
}

export const Waterfall: GalleryStory = {
    name: 'waterfall',
    args: {
        generator: generateWaterfallStripData,
        chart: WaterfallStripChart,
    },
}

export const BarAndWhisker: GalleryStory = {
    name: 'bar and whiskers',
    args: {
        generator: generateBarStripData,
        chart: BarStripChart,
        steps: ['points', 'boxes', 'bars', 'barsonly'],
        comment: (
            <div>
                This example summarizes data with strip, box-and-whisker, and bar-and-whiskers
                representations. Click through the milestone animation to toggle between them.
            </div>
        ),
    },
}
