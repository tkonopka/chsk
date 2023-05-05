import { GalleryMeta, GalleryStory } from '../gallery'
import { generateSequentialHeatMapData, SequentialHeatMapChart } from './SequentialHeatMapChart'
import { generateDivergingHeatMapData, DivergingHeatMapChart } from './DivergingHeatMapChart'
import { generateBlockHeatMapData, BlockHeatMapChart } from './BlockHeatMapChart'
import { generateTriangularHeatMapData, TriangularHeatMapChart } from './TriangularHeatMapChart'
import {
    generateCategoricalStripHeatMapData,
    CategoricalStripHeatMapChart,
} from './CategoricalStripHeatMapChart'
import {
    generateDualContinuousHeatMapData,
    DualContinuousHeatMapChart,
} from './DualContinuousHeatMapChart'
import { generateFlagsHeatMapData, FlagsHeatMapChart } from './FlagsHeatMapChart'
import { generateSizeBlockHeatMapData, SizeBlockHeatMapChart } from './SizeBlockHeatMapChart'

export default {
    ...GalleryMeta,
    title: 'Gallery/Heat maps',
}

export const Sequential: GalleryStory = {
    name: 'sequential',
    args: {
        generator: generateSequentialHeatMapData,
        chart: SequentialHeatMapChart,
        comment: (
            <div>
                <p>Check out the toolbar to explore the map at different zoom levels.</p>
                <p>This example also has a draggable legend.</p>
            </div>
        ),
    },
}

export const Diverging: GalleryStory = {
    name: 'diverging',
    args: {
        generator: generateDivergingHeatMapData,
        chart: DivergingHeatMapChart,
    },
}

export const Block: GalleryStory = {
    name: 'block',
    args: {
        generator: generateBlockHeatMapData,
        chart: BlockHeatMapChart,
        steps: ['map', 'blockA', 'blockB', 'blockC', 'final'],
    },
}

export const Triangular: GalleryStory = {
    name: 'triangular',
    args: {
        generator: generateTriangularHeatMapData,
        chart: TriangularHeatMapChart,
    },
}

export const Categorical: GalleryStory = {
    name: 'categorical strip',
    args: {
        generator: generateCategoricalStripHeatMapData,
        chart: CategoricalStripHeatMapChart,
        steps: ['top', 'categorical', 'measurements', 'heatmap'],
    },
}

export const DualContinuous: GalleryStory = {
    name: 'dual continuous',
    args: {
        generator: generateDualContinuousHeatMapData,
        chart: DualContinuousHeatMapChart,
        steps: ['top', 'categorical', 'measurements', 'vowels', 'consonants'],
    },
}

export const BooleanFlags: GalleryStory = {
    name: 'boolean flags',
    args: {
        generator: generateFlagsHeatMapData,
        chart: FlagsHeatMapChart,
        steps: ['samples', 'flags', 'heatmap'],
    },
}

export const SizeBubbles: GalleryStory = {
    name: 'size bubbles',
    args: {
        generator: generateSizeBlockHeatMapData,
        chart: SizeBlockHeatMapChart,
    },
}
