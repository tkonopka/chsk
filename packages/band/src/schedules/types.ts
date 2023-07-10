import {
    ComponentProps,
    DataInteractivityProps,
    LinearScaleSpec,
    NumericPositionSpec,
    RectangleProps,
    SizeSpec,
    TimeScaleSpec,
    WithId,
} from '@chsk/core'
import { BandPreparedDataItem, BandProcessedDataItem, BandProps, BandsProps } from '../bands'

export type ScheduleDataItem = WithId & {
    data: Array<Record<string, unknown>>
}

export type ScheduleProcessedSummary = {
    key: string
    start: number
    end: number
}

export type ScheduleProcessedDataItem = BandProcessedDataItem<ScheduleProcessedSummary>

export type SchedulePreparedSummary = ScheduleProcessedSummary & {
    bandStart: number
    bandWidth: number
    position: NumericPositionSpec
    size: SizeSpec
}

export type SchedulePreparedDataItem = BandPreparedDataItem<SchedulePreparedSummary>

export type ScheduleInteractiveDataItem = {
    id: string
    key: string
    start: number
    end: number
}

export interface ScheduleProps extends Omit<BandProps, 'scaleValue'> {
    /** data */
    data: Array<ScheduleDataItem>
    /** accessor for schedule interval start */
    intervalStart?: string
    /** accessor for schedule interval end */
    intervalEnd?: string
    /** accessor for schedule interval key */
    intervalKey?: string
    /** scale for axis with continuous values */
    scaleValue?: LinearScaleSpec | TimeScaleSpec
}

export type SchedulesProps = BandsProps &
    DataInteractivityProps<ScheduleInteractiveDataItem, RectangleProps> &
    ComponentProps<RectangleProps>
