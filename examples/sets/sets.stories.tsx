import { GalleryMeta, GalleryStory } from '../gallery'
import { generateHorizontalUpSetData, HorizontalUpSetChart } from './HorizontalUpSetChart'
import { generateVerticalUpSetData, VerticalUpSetChart } from './VerticalUpSetChart'
import { generateTwoSetData, TwoSetChart } from './TwoSetChart'
import { generateThreeSetData, ThreeSetChart } from './ThreeSetChart'
import { generateTextSetData, TextSetChart } from './TextSetChart'

export default {
    ...GalleryMeta,
    title: 'Gallery/Sets',
}

export const TwoSets: GalleryStory = {
    name: 'two sets',
    args: {
        generator: generateTwoSetData,
        chart: TwoSetChart,
    },
}

export const ThreeSets: GalleryStory = {
    name: 'three sets',
    args: {
        generator: generateThreeSetData,
        chart: ThreeSetChart,
        steps: ['title', 'sizes', 'intersections'],
    },
}

export const TextLabels: GalleryStory = {
    name: 'text labels',
    args: {
        generator: generateTextSetData,
        chart: TextSetChart,
        comment: (
            <div>This is a static chart; clicking the refresh button does not have any effect.</div>
        ),
    },
}

export const HorizontalUpset: GalleryStory = {
    name: 'horizontal upset',
    args: {
        generator: generateHorizontalUpSetData,
        chart: HorizontalUpSetChart,
        steps: ['axes', 'grid', 'bars'],
    },
}

export const VerticalUpset: GalleryStory = {
    name: 'vertical upset',
    args: {
        generator: generateVerticalUpSetData,
        chart: VerticalUpSetChart,
        steps: ['axes', 'grid', 'bars'],
    },
}
