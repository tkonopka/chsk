import { GalleryMeta, GalleryStory } from '../gallery'
import { generateGroupedData, GroupedVerticalBarChart } from './GroupedVerticalBarChart'
import { GroupedHorizontalBarChart } from './GroupedHorizontalBarChart'
import { generateStackedData, StackedVerticalBarChart } from './StackedVerticalBarChart'
import { StackedHorizontalBarChart } from './StackedHorizontalBarChart'
import { generateDivergingBarData, DivergingBarChart } from './DivergingBarChart'
import { GroupedTooltipBarChart } from './GroupedTooltipBarChart'
import { generateMultiViewsData, MultipleViewsBarChart } from './MultipleViewsBarChart'
import { generateCustomGroupsBarData, CustomGroupsBarChart } from './CustomGroupsBarChart'
import { generateValueColorsBarData, ValueColorsBarChart } from './ValueColorsBarChart'
import { generateFractionsBarData, FractionsBarChart } from './FractionsBarChart'
import {
    generateFractionsVerticalBarData,
    FractionsVerticalBarChart,
} from './FractionsVerticalBarChart'
import { generateFractionShadowsBarData, FractionShadowsBarChart } from './FractionShadowsBarChart'
import {
    generateFractionGradientsBarData,
    FractionGradientsBarChart,
} from './FractionGradientsBarChart'
import { generateBandLabelsData, BandLabelsChart } from './BandLabelsChart'
import {
    generateQuestionMultipleChoicesData,
    QuestionMultipleChoicesChart,
} from './QuestionMultipleChoicesChart'
import { generateQuestionTwoChoicesData, QuestionTwoChoicesChart } from './QuestionTwoChoicesChart'
import { generateArrowsData, ArrowsBarChart } from './ArrowsBarChart'
import { generateSequenceLogoBarData, SequenceLogoBarChart } from './SequenceLogoBarChart'

export default {
    ...GalleryMeta,
    title: 'Gallery/Bar charts',
}

export const GroupedVertical: GalleryStory = {
    name: 'grouped, vertical',
    args: {
        generator: generateGroupedData,
        chart: GroupedVerticalBarChart,
    },
}

export const GroupedHorizontal: GalleryStory = {
    name: 'grouped, horizontal',
    args: {
        generator: generateGroupedData,
        chart: GroupedHorizontalBarChart,
        steps: ['grid', 'bars-before', 'bars-after', 'percentages'],
        comment: <div>This example is non-interactive. (The legends are not clickable.)</div>,
    },
}

export const GroupedDiverging: GalleryStory = {
    name: 'grouped, diverging',
    args: {
        generator: generateDivergingBarData,
        chart: DivergingBarChart,
    },
}

export const GroupedTooltip: GalleryStory = {
    name: 'grouped, tooltip',
    args: {
        generator: generateGroupedData,
        chart: GroupedTooltipBarChart,
    },
}

export const StackedVertical: GalleryStory = {
    name: 'stacked, vertical',
    args: {
        generator: generateStackedData,
        chart: StackedVerticalBarChart,
    },
}

export const StackedHorizontal: GalleryStory = {
    name: 'stacked, horizontal',
    args: {
        generator: generateStackedData,
        chart: StackedHorizontalBarChart,
    },
}

export const CustomGroups: GalleryStory = {
    name: 'custom groups',
    args: {
        generator: generateCustomGroupsBarData,
        chart: CustomGroupsBarChart,
        steps: ['axes', 'A', 'B', 'C'],
    },
}

export const ValueColors: GalleryStory = {
    name: 'value colors',
    args: {
        generator: generateValueColorsBarData,
        chart: ValueColorsBarChart,
    },
}

export const QuestionMC: GalleryStory = {
    name: 'question, multiple choice',
    args: {
        generator: generateQuestionMultipleChoicesData,
        chart: QuestionMultipleChoicesChart,
    },
}

export const QuestionBinary: GalleryStory = {
    name: 'question, binary choices',
    args: {
        generator: generateQuestionTwoChoicesData,
        chart: QuestionTwoChoicesChart,
    },
}

export const Fractions: GalleryStory = {
    name: 'fractions, horizontal',
    args: {
        generator: generateFractionsBarData,
        chart: FractionsBarChart,
        steps: ['title', 'A', 'B', 'C'],
    },
}

export const FractionsVertical: GalleryStory = {
    name: 'fractions, vertical',
    args: {
        generator: generateFractionsVerticalBarData,
        chart: FractionsVerticalBarChart,
    },
}

export const Shadows: GalleryStory = {
    name: 'shadows',
    args: {
        generator: generateFractionShadowsBarData,
        chart: FractionShadowsBarChart,
        steps: ['title', 'description', 'A', 'B', 'C'],
    },
}

export const Gradients: GalleryStory = {
    name: 'gradients',
    args: {
        generator: generateFractionGradientsBarData,
        chart: FractionGradientsBarChart,
    },
}

export const Arrows: GalleryStory = {
    name: 'arrows',
    args: {
        generator: generateArrowsData,
        chart: ArrowsBarChart,
        steps: ['axes', 'data'],
    },
}

export const SequenceLogo: GalleryStory = {
    name: 'sequence logo',
    args: {
        generator: generateSequenceLogoBarData,
        chart: SequenceLogoBarChart,
        steps: ['axes', 'data'],
        comment: (
            <div>
                Sequence logo charts use letter-shaped components of various sizes to display
                numerical values. Another unusual property is that elements are arranged so that the
                largest elements are always on top.
            </div>
        ),
    },
}

export const MultipleViews: GalleryStory = {
    name: 'multiple views',
    args: {
        generator: generateMultiViewsData,
        chart: MultipleViewsBarChart,
        comment: (
            <div>
                This example uses a custom component to coordinate `BandSurface` across multiple bar
                views.
            </div>
        ),
    },
}

export const BandLabels: GalleryStory = {
    name: 'band labels',
    args: {
        generator: generateBandLabelsData,
        chart: BandLabelsChart,
    },
}
