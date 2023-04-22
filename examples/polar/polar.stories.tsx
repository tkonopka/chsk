import { GalleryMeta, GalleryStory } from '../gallery'
import { generatePieData, PieChart } from './PieChart'
import { generateDoughnutData, DoughnutChart } from './DoughnutChart'
import { generateSemicircleDoughnutData, SemicircleDoughnutChart } from './SemicircleDoughnutChart'
import { generateGaugesData, PolarGaugesChart } from './PolarGaugesChart'

export default {
    ...GalleryMeta,
    title: 'Gallery/Polar charts',
}

export const Pie: GalleryStory = {
    name: 'pie',
    args: {
        generator: generatePieData,
        chart: PieChart,
        steps: ['alpha', 'beta', 'gamma', 'delta', 'epsilon'],
    },
}

export const Doughnut: GalleryStory = {
    name: 'doughnut',
    args: {
        generator: generateDoughnutData,
        chart: DoughnutChart,
    },
}

export const Semicircle: GalleryStory = {
    name: 'semicircle',
    args: {
        generator: generateSemicircleDoughnutData,
        chart: SemicircleDoughnutChart,
    },
}

export const Gauges: GalleryStory = {
    name: 'gauges',
    args: {
        generator: generateGaugesData,
        chart: PolarGaugesChart,
    },
}
