import { GalleryMeta, GalleryStory } from '../gallery'
import { generateRandomWalksData, RandomWalksChart } from './RandomWalksChart'
import { generateManyRandomWalksData, ManyRandomWalksChart } from './ManyRandomWalksChart'
import { generateOverlayData, LineOverlayChart } from './LineOverlayChart'
import { generateSurvivalData, SurvivalChart } from './SurvivalChart'
import { generateTimeSeriesData, TimeSeriesChart } from './TimeSeriesChart'
import { generateInnerPanelLineData, InnerPanelLineChart } from './InnerPanelLineChart'
import { generateConvolutionSeriesData, ConvolutionSeriesChart } from './ConvolutionSeriesChart'
import { generateForecastData, ForecastChart } from './ForecastChart'

export default {
    ...GalleryMeta,
    title: 'Gallery/Line charts',
}

export const TwoLines: GalleryStory = {
    name: 'two lines',
    args: {
        generator: generateRandomWalksData,
        chart: RandomWalksChart,
        steps: ['alpha', 'beta'],
    },
}

export const ManyLines: GalleryStory = {
    name: 'many lines',
    args: {
        generator: generateManyRandomWalksData,
        chart: ManyRandomWalksChart,
        comment: (
            <div>
                Click on legend item to toggle visibility of one line, or double-click to toggle
                multiple lines at once.
            </div>
        ),
    },
}

export const Survival: GalleryStory = {
    name: 'survival',
    args: {
        generator: generateSurvivalData,
        chart: SurvivalChart,
        steps: ['control', 'treated'],
        comment: (
            <div>
                When automatic label placement seems unsatisfactory, draggable labels can help
                finding alternative solutions.
            </div>
        ),
    },
}

export const TimeSeries: GalleryStory = {
    name: 'time series',
    args: {
        generator: generateTimeSeriesData,
        chart: TimeSeriesChart,
    },
}

export const MovingAverages: GalleryStory = {
    name: 'moving averages',
    args: {
        generator: generateConvolutionSeriesData,
        chart: ConvolutionSeriesChart,
    },
}

export const Inset: GalleryStory = {
    name: 'inset',
    args: {
        generator: generateInnerPanelLineData,
        chart: InnerPanelLineChart,
        steps: ['axes', 'data', 'box', 'inner'],
    },
}

export const Forecast: GalleryStory = {
    name: 'forecast',
    args: {
        generator: generateForecastData,
        chart: ForecastChart,
    },
}

export const Overlays: GalleryStory = {
    name: 'overlays',
    args: {
        generator: generateOverlayData,
        chart: LineOverlayChart,
    },
}
