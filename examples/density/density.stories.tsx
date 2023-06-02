import { GalleryMeta, GalleryStory } from '../gallery'
import { generateCirclesDensityData, CirclesDensityChart } from './CirclesDensityChart'

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
