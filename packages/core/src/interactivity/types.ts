import { FC, MouseEvent, ReactNode } from 'react'
import {
    CssProps,
    FourSideSizeSpec,
    ItemListProps,
    LocationProps,
    NumericPositionSpec,
    PositionSpec,
    PositionUnits,
    SvgElementProps,
    SvgElementVariantProps,
    WithId,
} from '../general'

// settings for wrappers that create multiple related components
// The name 'ComponentProps' may cause confusion with React's ComponentProps and may need adjustment in future
export interface ComponentProps<Props> {
    /** function used to draw individual components */
    component?: FC<Props>
    /** props passed to each component */
    componentProps?: Partial<Props>
}

// handling events on svg elements
export interface InteractivityProps {
    /** handler for mouse enter event */
    onMouseEnter?: (event: MouseEvent) => void
    /** handler for mouse leave event */
    onMouseLeave?: (event: MouseEvent) => void
    /** handler for mouse move event */
    onMouseMove?: (event: MouseEvent) => void
    /** handler for click event */
    onClick?: (event: MouseEvent) => void
    /** handler for double-click event */
    onDoubleClick?: (event: MouseEvent) => void
}

export interface DataInteractivityHandlers<DataSpec extends WithId> {
    /** handler for mouse enter event */
    onMouseEnter?: (data: DataSpec | undefined, event: MouseEvent) => void
    /** handler for mouse leave event */
    onMouseLeave?: (data: DataSpec | undefined, event: MouseEvent) => void
    /** handler for mouse move event */
    onMouseMove?: (data: DataSpec | undefined, event: MouseEvent) => void
    /** handler for click event */
    onClick?: (data: DataSpec | undefined, event: MouseEvent) => void
    /** handler for double-click event */
    onDoubleClick?: (data: DataSpec | undefined, event: MouseEvent) => void
}

export interface DataInteractivityModifiers {
    /** style modifier upon mouse enter event */
    onMouseEnter?: CssProps
    /** style modifier upon mouse leave event */
    onMouseLeave?: CssProps
    /** style modifier upon mouse move event */
    onMouseMove?: CssProps
    /** style modifier upon click */
    onClick?: CssProps
    /** style modifier upon double click */
    onDoubleClick?: CssProps
}

// handling events in a data-dependent way (e.g. by points in scatter plot)
export interface DataInteractivityProps<
    DataSpec extends WithId,
    ComponentProps extends SvgElementVariantProps & InteractivityProps
> {
    /** handlers for events */
    handlers?: DataInteractivityHandlers<DataSpec>
    /** style modifiers */
    modifiers?: DataInteractivityModifiers
    /** function binding data to interactivity handlers */
    dataComponent?: FC<DataComponentProps<DataSpec, ComponentProps>>
}

// this interface is named Simple-*Data*-Component but it does not actually use a data type
// the name is meant to evoke that it is a simpler interface compared to DataComponentProps
export interface SimpleDataComponentProps<
    ComponentProps extends SvgElementVariantProps & InteractivityProps
> {
    /** function to create a chart component */
    component: FC<ComponentProps>
    /** props passed to the component */
    props: ComponentProps
}

export interface DataComponentProps<
    DataSpec extends WithId,
    ComponentProps extends SvgElementVariantProps & InteractivityProps
> extends SimpleDataComponentProps<ComponentProps>,
        Omit<DataInteractivityProps<DataSpec, ComponentProps>, 'dataComponent'> {
    /** data object */
    data?: DataSpec
}

export interface ButtonProps extends SvgElementVariantProps, LocationProps, InteractivityProps {
    /** state of button */
    selected?: boolean
    /** content */
    children?: ReactNode
}

export type ToolbarData<Value> = WithId & { value: Value }

export interface ToolbarProps<Value>
    extends SvgElementProps,
        Pick<ItemListProps, 'itemSize' | 'itemPadding' | 'itemAlign' | 'itemStyle' | 'horizontal'>,
        DataInteractivityProps<ToolbarData<Value>, ButtonProps> {
    /** position of top-left corner */
    position?: NumericPositionSpec
    /** items to appear in the toolbar */
    values: Value[]
    /** current selected item */
    value?: Value
    /** component to draw items */
    component: FC<ButtonProps>
}

export type DragData = {
    absolute: NumericPositionSpec
    relative: NumericPositionSpec
    view: NumericPositionSpec
}

export interface DraggableProps extends SvgElementVariantProps {
    /** variant */
    variant?: 'xy' | 'x' | 'y'
    /** guide position */
    position?: PositionSpec
    /** position units */
    positionUnits?: PositionUnits
    /** expansion of region receptive to mouse motion */
    expansion?: FourSideSizeSpec
    /** handler for drag start */
    onDragStart?: (data: DragData, event: MouseEvent) => void
    /** handler for drag change */
    onDrag?: (data: DragData, event: MouseEvent) => void
    /** handler for drag end */
    onDragEnd?: (data: DragData, event: MouseEvent) => void
    /** timeout between drag start and click */
    timeout?: number
    /** content */
    children?: ReactNode
}
