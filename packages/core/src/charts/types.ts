import { ReactNode, Ref } from 'react'
import { SvgElementProps, SvgElementVariantProps, WithId, ContainerProps } from '../general'
import {
    CompleteThemeSpec,
    AnimationProps,
    TransitionProps,
    SvgBaseComponent,
    ThemeSpec,
} from '../themes'

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
        Omit<ContainerProps, 'position' | 'positionUnits'> {
    /** identifier for the chart */
    id?: string
    /** adjust size to fill parent container */
    stretch?: boolean
    /** default theme */
    baseTheme?: CompleteThemeSpec
    /** theme adjustment **/
    theme?: ThemeSpec
    /** chart settings, e.g. milestones */
    data?: Omit<ChartDataContextProps, 'id'>
    /** svg components to include in <styles> tag **/
    styles?: Array<SvgBaseComponent>
    /** forwarded ref */
    fref?: Ref<ChartRef>
    /** children components */
    children?: ReactNode
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
    /** initial animation settings */
    initial?: AnimationSpec
    /** milestone on which to initialize animation */
    initialOn?: string
    /** exit animation settings */
    exit?: AnimationSpec
    /** milestone on which to activate exit animation */
    exitOn?: string
    /** children components */
    children: ReactNode
    /** base animation setting */
    animate?: AnimationSpec
    /** transition settings */
    transition?: TransitionSpec
    /** default visibility setting */
    visible?: boolean
}

export interface MilestoneMotionThemedProps
    extends Pick<MilestoneMotionProps, 'initial' | 'exit' | 'animate' | 'transition'> {
    initial: AnimationSpec
    exit: AnimationSpec
    animate: AnimationSpec
    transition: TransitionSpec
}
