import { ReactNode, Ref } from 'react'
import {
    SvgElementProps,
    SvgElementVariantProps,
    WithId,
    ContainerProps,
    SizeSpec,
} from '../general'
import { AnimationProps, TransitionProps, StyleProps } from '../themes'

/** Chart */

export type ChartDataContextProps = WithId &
    Record<string, unknown> & {
        disabledKeys?: Set<string>
        milestones?: Set<string>
    }

export type ChartDataProviderValue = {
    data: ChartDataContextProps
    setData?: (d: ChartDataContextProps) => unknown
}

export type ChartDataProviderProps = {
    value: ChartDataProviderValue
    children: ReactNode
}

export interface ChartRef {
    updateData: (d: Omit<ChartDataContextProps, 'id'>) => void
    toggleMilestone: (milestone: string) => void
}

export interface ChartProps
    extends SvgElementProps,
        Omit<StyleProps, 'ancestor'>,
        Omit<ContainerProps, 'position' | 'positionUnits'> {
    /** identifier for the chart */
    id?: string
    /** automatically change chart size to fill parent container */
    stretch?: boolean
    /** adjustment to svg size during stretch */
    stretchExpansion?: SizeSpec
    /** chart settings, e.g. milestones */
    data?: Omit<ChartDataContextProps, 'id'>
    /** forwarded ref */
    fref?: Ref<ChartRef>
}

/** Milestones */

export interface OpacityMotionProps {
    /** role string */
    role?: string
    /** flag to indicate first render */
    firstRender: boolean
    /** flag to indicate visibility, used for exit animation */
    visible?: boolean
    /** children components */
    children: ReactNode
}

export type AnimationSpec = undefined | null | string | AnimationProps
export type TransitionSpec = undefined | null | string | TransitionProps

export interface MilestoneMotionProps extends Pick<SvgElementVariantProps, 'variant' | 'setRole'> {
    /** enter configuration */
    enter?: AnimationSpec
    /** milestone on which to initialize animation */
    enterOn?: string
    /** function executed when enter is triggered */
    onEnter?: () => void
    /** exit configuration */
    exit?: AnimationSpec
    /** milestone on which to activate exit animation */
    exitOn?: string
    /** function executed when exit is toggled */
    onExit?: () => void
    /** children components */
    children?: ReactNode
    /** base configuration */
    config?: AnimationSpec
    /** transition settings */
    transition?: TransitionSpec
    /** default visibility setting */
    visible?: boolean
}

export interface MilestoneMotionThemedProps
    extends Pick<MilestoneMotionProps, 'enter' | 'exit' | 'config' | 'transition'> {
    enter: AnimationSpec
    exit: AnimationSpec
    config: AnimationSpec
    transition: TransitionSpec
}
