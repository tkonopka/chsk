import { ReactNode, Ref } from 'react'
import { SvgElementProps, WithId } from '../general'
import { CompleteThemeSpec, SvgBaseComponent, ThemeSpec } from '../themes'
import { ContainerProps } from '../views'
import { motionPresets, transitionPresets } from './presets'

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

/** settings for framer's 'transition' */
export type GTransitionProp = {
    duration?: number
    delay?: number
    stiffness?: number
}

/** selected settings for animating 'g' elements */
export type GAnimationProp = {
    opacity?: number
    x?: number
    y?: number
    fill?: string
    scale?: number
}
export type AnimationSpec = undefined | null | keyof typeof motionPresets | GAnimationProp
export type AnimationTransitionSpec =
    | undefined
    | null
    | keyof typeof transitionPresets
    | GTransitionProp

export interface MilestoneMotionProps extends Pick<SvgElementProps, 'setRole'> {
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
    transition?: AnimationTransitionSpec
    /** default visibility setting */
    visible?: boolean
}
