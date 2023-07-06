import { ReactNode, Ref } from 'react'
import {
    SvgElementProps,
    SvgElementVariantProps,
    WithId,
    ContainerProps,
    SizeSpec,
    AnimationSpec,
    TransitionSpec,
} from '../general'
import { StyleProps } from '../themes'

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
    /** content */
    children: ReactNode
}

export interface MilestoneMotionProps extends Pick<SvgElementVariantProps, 'variant' | 'setRole'> {
    /** enter configuration */
    enter?: AnimationSpec | string
    /** milestone on which to start animation */
    enterOn?: string
    /** transition used for enter animation */
    enterTransition?: TransitionSpec | string | null
    /** function executed when enter is triggered */
    onEnter?: () => void
    /** exit configuration */
    exit?: AnimationSpec | string
    /** milestone on which to activate exit animation */
    exitOn?: string
    /** transition for exit animation */
    exitTransition?: TransitionSpec | string | null
    /** function executed when exit is toggled */
    onExit?: () => void
    /** content */
    children?: ReactNode
    /** base configuration */
    config?: AnimationSpec | string
    /** default visibility setting */
    visible?: boolean
}

export interface MilestoneMotionThemedProps
    extends Pick<
        MilestoneMotionProps,
        'enter' | 'exit' | 'config' | 'enterTransition' | 'exitTransition'
    > {
    enter: AnimationSpec | string
    exit: AnimationSpec | string
    config: AnimationSpec | string
    enterTransition: TransitionSpec | string | null
    exitTransition: TransitionSpec | string | null
}
