import { GalleryMeta, GalleryStory } from '../gallery'
import { generateDendrogramData, DendrogramChart } from './DendrogramChart'

export default {
    ...GalleryMeta,
    title: 'Gallery/Hierarchies',
}

export const Dendrogram: GalleryStory = {
    name: 'dendrogram',
    args: {
        generator: generateDendrogramData,
        chart: DendrogramChart,
        comment: (
            <div>
                Hierarchical structures can be represented in many equivalent ways. Click on the
                parts of the dendrogram to flip branches.
            </div>
        ),
    },
}
