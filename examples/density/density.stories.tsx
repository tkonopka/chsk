import { GalleryMeta, GalleryStory } from '../gallery'
import { generateCirclesDensityData, CirclesDensityChart } from './CirclesDensityChart'
import { generateGradientsDensityData, GradientsDensityChart } from './GradientsDensityChart'

export default {
    ...GalleryMeta,
    title: 'Gallery/Density maps',
}

export const Circles: GalleryStory = {
    name: 'circles',
    args: {
        generator: generateCirclesDensityData,
        chart: CirclesDensityChart,
    },
}

export const Gradients: GalleryStory = {
    name: 'gradients',
    args: {
        generator: generateGradientsDensityData,
        chart: GradientsDensityChart,
    },
}
