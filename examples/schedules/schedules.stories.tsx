import { GalleryMeta, GalleryStory } from '../gallery'
import { generateScheduleProjectData, ScheduleProjectChart } from './ScheduleProjectChart'
import { generateScheduleWeekData, ScheduleWeekChart } from './ScheduleWeekChart'
import { generateSurveyData, SurveyChart } from './SurveyChart'
import { generateChangesData, ChangesChart } from './ChangesChart'

export default {
    ...GalleryMeta,
    title: 'Gallery/Schedule charts',
}

export const Project: GalleryStory = {
    name: 'project',
    args: {
        generator: generateScheduleProjectData,
        chart: ScheduleProjectChart,
        steps: ['axis', 'A', 'B', 'C', 'D'],
    },
}

export const Week: GalleryStory = {
    name: 'week',
    args: {
        generator: generateScheduleWeekData,
        chart: ScheduleWeekChart,
    },
}

export const Survey: GalleryStory = {
    name: 'survey',
    args: {
        generator: generateSurveyData,
        chart: SurveyChart,
        comment: (
            <div>
                The design of this example is inspired by{' '}
                <a href="https://observablehq.com/@observablehq/plot-diverging-stacked-bar">
                    this blog post
                </a>
                .
            </div>
        ),
    },
}

export const Arrows: GalleryStory = {
    name: 'arrows',
    args: {
        generator: generateChangesData,
        chart: ChangesChart,
        comment: (
            <div>
                The design of this example is inspired by blog posts{' '}
                <a href="https://junkcharts.typepad.com/junk_charts/2023/03/all-about-connecticut.html">
                    here
                </a>{' '}
                and{' '}
                <a href="https://ctmirror.org/2023/01/29/ct-demographics-numbers-charts/">here</a>.
            </div>
        ),
    },
}
