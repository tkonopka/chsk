import { FC } from 'react'
import {
    DataInteractivityProps,
    LinearScaleSpec,
    NumericPositionSpec,
    ProcessedDataContextProps,
    RectangleProps,
    SizeSpec,
    TimeScaleSpec,
    WithId,
} from '@chsk/core'
import { BandProps, BandsProps } from '../bands'

export type ScheduleDataItem = WithId & {
    data: Array<Record<string, unknown>>
}

export type ScheduleProcessedSummary = {
    key: string
    start: number
    end: number
}

export type ScheduleProcessedDataItem = WithId & {
    index: number
    data: ScheduleProcessedSummary[]
    domain: Array<[number, number]>
}

export type SchedulePreparedSummary = ScheduleProcessedSummary & {
    bandStart: number
    bandWidth: number
    position: NumericPositionSpec
    size: SizeSpec
}

export type SchedulePreparedDataItem = WithId & {
    index: number
    data: SchedulePreparedSummary[]
}

export type SchedulePreparedDataContextProps = ProcessedDataContextProps & {
    /** data */
    data: Array<SchedulePreparedDataItem>
}

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

export interface SchedulesProps
    extends BandsProps,
        DataInteractivityProps<ScheduleInteractiveDataItem, RectangleProps> {
    /** component used to schedule interval box */
    component?: FC<RectangleProps>
}
