import { GalleryMeta, GalleryStory } from '../gallery'
import { generateBubbleScatterData, BubbleScatterChart } from './BubbleScatterChart'
import { generateClusterScatterData, ClustersScatterChart } from './ClustersScatterChart'
import { generateAxisTooltipScatterData, AxisTooltipScatterChart } from './AxisTooltipScatterChart'
import { generateManhattanScatterData, ManhattanScatterChart } from './ManhattanScatterChart'
import { generateErrorsData, ErrorsChart } from './ErrorsChart'
import { generateLabelsData, LabelsChart } from './LabelsChart'
import { generateSimpsonData, SimpsonChart } from './SimpsonChart'
import { generateOutlierScatterData, OutlierScatterChart } from './OutlierScatterChart'
import {
    generateMultiViewsScatterData,
    MultipleViewsScatterChart,
} from './MultipleViewsScatterChart'
import { generateDotScatterData, DotScatterChart } from './DotScatterChart'

export default {
    ...GalleryMeta,
    title: 'Gallery/Scatter charts',
}

export const Bubbles: GalleryStory = {
    name: 'bubbles',
    args: {
        generator: generateBubbleScatterData,
        chart: BubbleScatterChart,
        steps: ['axes', 'data', 'legend'],
    },
}

export const Clusters: GalleryStory = {
    name: 'clusters',
    args: {
        generator: generateClusterScatterData,
        chart: ClustersScatterChart,
        steps: ['axes', 'legend', 'data'],
    },
}

export const AxisTooltips: GalleryStory = {
    name: 'tooltips on axes',
    args: {
        generator: generateAxisTooltipScatterData,
        chart: AxisTooltipScatterChart,
    },
}

export const Manhattan: GalleryStory = {
    name: 'manhattan',
    args: {
        generator: generateManhattanScatterData,
        chart: ManhattanScatterChart,
        steps: ['axes', 'data'],
        comment: (
            <div>
                Manhattan charts often have a large number of data points. This chart draws points
                with svg <code>circle</code> components rather than chsk
                <code>Circle</code> components. The replacement sacrifices animations of the points
                in order to prioritize responsiveness. The axes and the grid are still animated.
            </div>
        ),
    },
}

export const ErrorBars: GalleryStory = {
    name: 'error bars',
    args: {
        generator: generateErrorsData,
        chart: ErrorsChart,
        steps: ['axes', 'points', 'curve', 'legend'],
    },
}

export const Labels: GalleryStory = {
    name: 'labels',
    args: {
        generator: generateLabelsData,
        chart: LabelsChart,
    },
}

export const Regression: GalleryStory = {
    name: 'regression',
    args: {
        generator: generateSimpsonData,
        chart: SimpsonChart,
        steps: ['axes', 'A', 'B', 'C'],
    },
}

export const Outliers: GalleryStory = {
    name: 'outliers',
    args: {
        generator: generateOutlierScatterData,
        chart: OutlierScatterChart,
        steps: ['axes', 'data', 'regression1', 'arrow', 'outliers', 'regression2'],
    },
}

export const MultipleViews: GalleryStory = {
    name: 'multiple views',
    args: {
        generator: generateMultiViewsScatterData,
        chart: MultipleViewsScatterChart,
        steps: ['legend', 'A', 'B', 'C'],
    },
}

export const Dots: GalleryStory = {
    name: 'dots',
    args: {
        generator: generateDotScatterData,
        chart: DotScatterChart,
        steps: ['axes', 'data'],
        comment: (
            <div>
                Dot charts typically use one band (categorical) scale and one continuous scales.
                This example, however, is implemented with two continuous scales in order to take
                advantage of `ScatterCrosshair`. The appearance of the vertical axis as a
                categorical scale is achieved through custom tick labels.
            </div>
        ),
    },
}
