import { GalleryMeta, GalleryStory } from '../gallery'
import { generateVerticalFlowData, VerticalFlowChart } from './VerticalFlowChart'
import { generateHorizontalFlowData, HorizontalFlowChart } from './HorizontalFlowChart'
import { generateTreeFlowData, TreeFlowChart } from './TreeFlowChart'

export default {
    ...GalleryMeta,
    title: 'Gallery/Flowcharts',
}

export const VerticalFlowchart: GalleryStory = {
    name: 'vertical',
    args: {
        generator: generateVerticalFlowData,
        chart: VerticalFlowChart,
        steps: ['title', 'A', 'B', 'C', 'buttons'],
    },
}

export const HorizontalFlowchart: GalleryStory = {
    name: 'vertical',
    args: {
        generator: generateHorizontalFlowData,
        chart: HorizontalFlowChart,
        steps: ['start', 'branch1', 'branch2a', 'branch2b', 'buttons'],
    },
}

export const TreeFlowchart: GalleryStory = {
    name: 'tree',
    args: {
        generator: generateTreeFlowData,
        chart: TreeFlowChart,
        steps: ['start', 'filter', 'A', 'B', 'A1', 'A2', 'B1', 'B2'],
    },
}
