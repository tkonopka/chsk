# Changelog

## Unreleased

### Highlights

### Added

-   [annotation] symbol components `Pentagon` and `Star`

### Changed

## v0.4.0

### Highlights

-   New components `Violin` and `Violins` for summarizing numeric distributions
-   New components `ScatterSelectedLabels` for placing
    non-overlapping labels on scatter charts
-   Miscellaneous new components, including `Grid` and `GridItem` for
    view layouts and `Connector` for supporting labels.
-   Expanded support for milestone animations, in particular for animations
    that change props
-   Expanded feature set for continuous scales to support a custom
    bandwidth, enabling band-like charts with two continuous axes
-   Upgraded documentation site to storybook v7

### Added

-   [annotation] support for custom components in `Stripe` and `GridStripes`
-   [core] support for axis labels and axis tick labels with ReactNode type
-   [band] support for nonlinear scales for strip, quantile, schedule, and
    violin charts
-   [examples] stacked bar chart with a time scale
-   [core] support for specifying bandwidth for continuous scales, e.g. linear
    scales and time scales
-   [examples] chart with rectangles on a time scale
-   [examples] chart with violins
-   [band] components `Violin` and `Violins` to create violin plots
-   [core] prop `closed` in `Path` to ensure a path is closed
-   [examples] heat map with sparse data and a grid
-   [xy] props `k` in `Scatter` to provide explicit keys for data points
-   [examples] chart with histogram with draggable controls
-   [core] prop `disabledStyle` in legend components to control appearance of
    disabled legend items
-   [examples] bar chart with labels using connectors
-   [xy] prop `visible` in `ScatterCrosshair` to toggle visibility of
    horizontal and vertical crosshair lines
-   [xy] capabilities in `ScatterCrosshair` to find data points based on x-
    and y-coordinate distance
-   [core] component `Draggable` to enable dragging chart elements
-   [annotation] component `Stripe` to create rectangles suitable for view
    backgrounds
-   [core] functions `numberPair` and `unitPair` to simplify conversion of
    ambiguous data types to array-based types
-   [annotation] component `Connector` to draw various types of lines,
    especially for connecting data points to labels
-   [xy] component `ScatterSelectedLabels` to display labels linked to data
    points
-   [xy] prop `variant` for `ScatterLabel` to place labels next to data points
    identified according to euclidean distance in xy dimensions, or euclidean
    distance along only one of the axes
-   [core] mathematical utility functions: `norm`, `angleTheta`, `clip`
-   [repository] set up lerna caching
-   [examples] scatter chart with several point labels
-   [xy] support for style modifiers in `ScatterCrosshair` to change cursor
    when hovering near a data point
-   [annotation] filter `BlurFilter`
-   [core] support for `MilestoneMotion` animation without children, i.e. using
    only `onEnter` and `onExit` functions
-   [core] support for custom functions `onEnter` and `onExit` in `MilestoneMotion`
-   [documentation] tables with prop names and typings for commonly used core
    props
-   [core] components `Grid` and `GridItem` to arrange complex content in a
    grid layout
-   [all] keywords to all `package.json` files

### Changed

-   [band] changed components with prefix `Distribution` (back) to using
    prefix `Quantile`. This is more accurate/specific as to what the
    components represent and avoids confusion with `Violin` components that
    also describe distributions but use slightly different data types
-   [band] fixed bug in calculation of domains in strip and distribution
    charts, which forced inclusion of '1' in domain in cases with missing data
-   [core] renamed some math functions for brevity, e.g. `getMax` into `max`
    and `getMinMax` into `interval`
-   [core] consolidated math functions into a single location
-   [core] fixed propagation of style props in `LegendColorScale`
-   [core] changed handling of ticks with zero size in `AxisTicks`; such tick
    lines are now omitted altogether from the output
-   [xy] fixed bug leading to NaN in regressions with short data series
-   [core] extended type for `format` in `Counter` to simplify counters using
    `tspan` elements
-   [annotation] changed variant names in `BluntMarker` and `ArrowMarker` to
    lowercase for consistency with other components
-   [xy] changed meaning of prop `variant` in `ScatterCrosshair` so that it
    now changes calculations, not visual output
-   [core] removed type `XY` in favor of existing `NumericPositionSpec`
-   [annotation] changed role and class strings in `GridStripes` to improve
    consistency with other components
-   [core] fixed expanding chart size when `stretch=true`
-   [xy] removed `signals.tsx` from exports because functions are only used
    internally in xy package
-   [core] fixed internal keys in `GridLines` to avoid lines switching
    position during panning
-   [xy] discontinued support for single-value position in `ScatterLabel` in
    favor of using a new prop `variant`
-   [annotation] changed `cleanSvg` into `transformSvg` to give a more neutral
    note to the function; changed typings and prop names to similarly replace
    'clean' into 'transform'
-   [annotation] renamed prop `offset` with `distance` in `BoxedTitle` for
    consistency with convention used by axes whereby offset is always an array
    and distance is orthogonal distance
-   [xy] expanded API for `ScatterLabel` to use `LabelProps` and a
    custom component to draw; `ScatterLabel` can now use, e.g. `BoxedLabel`
-   [xy] replaced prop `ids` with `id` in `ScatterLabel` because the component
    is meant to create a single label for a single data series
-   [core] enabled transfer of prop `variant` from `Axis` to its children; this
    removes requirement for `AxisLabel`, `AxisLine`, and `AxisTicks` to
    specify the variant prop
-   [core] added missing key fields in `Axis`
-   [core] renamed prop `initialOn` in `MilestoneMotion` with `enterOn` for
    readability and for compatibility with new `onEnter` prop
-   [core] renamed prop `initial` in `MilestoneMotion` with `enter` for
    readability and for compatibility with new onEnter prop
-   [core] stopped including variant in role string in components related to
    axes
-   [documentation] upgraded storybook to v7
-   [core] fixed bug with handlers in `DataComponent` and
    `TooltipDataComponent` leading to some missed and some redundant function
    calls
-   [documentation] miscellaneous edits, including fixes to styling

## v0.3.0

### Highlights

-   Zoom and pan capabilities for all chart types
-   New package `@chsk/polar` for pie and doughnut charts
-   New components in existing packages, including for animated text, bars with
    whiskers, and curved arrows
-   Reduced bundle sizes by omitting external modules
-   Optimized svg exports by omitting redundant css
-   Streamlined typings for increased prop consistency across components,
    especially for container placement

### Contributors

@falsepopsky @tkonopka

### Added

-   [band] prop `variant` for `BandSurface` to fine-tune the size of
    background rectangles
-   [examples] venn diagrams with custom text at intersections
-   [set] support for data subsets when drawing set intersection labels
-   [core] component `Style` to create themed css for arbitrary ancestors
-   [annotation] conversion of rgba colors to hex in svg exports
-   [themes] theme piece `buttonTheme` with styles for buttons
-   [core] component `Toolbar` to create generic toolbars with buttons
-   [core] component `ViewClip` to restrict content to the bounding box of a view
-   [core] component `ViewController` to manage axes in arbitrary views
-   [core] component `Button` implementing a generic click-able button
-   [core] support for element-specific transitions, notably for `Rectangle`
-   [band] support for fade-in and edge animations in `BandHighlight`
-   [core] default animation states and theming support for `MilestoneMotion`
-   [annotation] component `FlowTypography` to reveal text character-by-character
-   [annotation] filter `BackgroundColorFilter`
-   [core] prop `component` in `Counter` to support bespoke displays, for
    example, as a combination of svg `text` and `tspan` elements
-   [polar] examples with pie and doughnut chart
-   [polar] package for charts with polar coordinate systems
-   [band] components `BarAndWhisker` and `LineAndWhiskers` to summarize
    distributions
-   [xy] calculations of mean and standard deviation for histograms
-   [examples] flowchart in the shape of a tree
-   [annotation] css style shaking; svg code produced by `cleanSvg` now
    contains only style definitions that are relevant to a specific chart
    (previously, the output contained all css styles defined in a theme)
-   [examples] histograms with several distributions
-   [examples] quantile chart with bar-and-error-bar components instead of
    box-and-whisker components
-   [examples] schedule chart with arrows
-   [themes] object `darkTheme` for charts on a dark background
-   [core] component `BluntMarker`
-   [annotation] component `ArcArrow`
-   [matrix] support for fade-in and edge animations in `HeatMapHighlight`
-   [annotation] component `GridStripes`

### Changed

-   [polar] removed unnecessary prop `variant` from components `Slice` and
    `Slices`
-   [core] renamed prop in `AxisLabel` from `anchor` to `align` for more
    consistency with props in typography components
-   [core] changed props in `Axis` and `AxisLabel`: prop `offset` is always an array, and prop `distance` is orthogonal distance from view boundary
-   [set] changed default color interpolation in venn diagrams to lab space
-   [core] fixed support for props `align`, `anchor`, and `offset` in labels
-   [set] fixed bug in Venn diagram which flipped long/short arcs in some cases
-   [core] changed types and parsing for color schemes to reduce bundle size.
    The new color scale specs do not accept strings with d3 color scale
    names (e.g. 'Blues'), but rather accept color arrays, color nested
    arrays, or interpolator functions. Charts still use d3-scale-chromatic
    to manage colors, but it is no longer necessary to include the entire
    d3-scale-chromatic in the dist bundle.
-   [examples] merged example with line chart with area gradient into example
    with time series
-   [core] replaced prop `labelOffset` in tick components with `labelDistance`,
    and `labelTranslate` with `labelOffset; now all 'offset' props should be
    arrays with [x, y] coordinates
-   [core] replaced prop `translate` with `offset` to improve naming
    consistency (using nouns more than verbs); moved the `offset` prop into
    `ContainerProps`
-   [themes] removed theme piece download in favor of piece for buttons
-   [examples] added some icons for view controllers
-   [core] changed implementation of some scales, notably to support `invert`
-   [core] removed type `LinearScaleProps`
-   [core] changed API for the `useScales` hook to prepare support for
    user-driven adjustments to chart scales, e.g. brush
-   [core] changed motion configuration format in themes to support multiple
    transition variants. The default motion configuration now should be
    specified under a 'default' key.
-   [core] removed exports of some milestone utilities
-   [core] moved milestone presets into themes
-   [annotation] fixed bug in `FlowPath` causing end markers to appear too soon
-   [annotation] changed filter component names so that `Filter` is the suffix
    rather than prefix, for consistency with other naming convensions e.g. for
    boxed labels
-   [core] changed `Counter` animations to spring for consistency with other
    components
-   [core] renamed `useView` hook to `useContainer`
-   [all] changed view props so that `position`, `positionUnits`, `size`,
    `sizeUnits`, `padding`, and `anchor` are now nested in a single
    `container` prop. This simplifies internal code and docs for add-on views.
-   [core] renamed prop `rotate` to `angle` in typography components
-   [core] fixed ResizeObserver management (#3)
-   [core] upgrade d3-shape to v3.2.0
-   [annotation] removed redundant 'px' suffixes in svg exports to reduce size
    of output
-   [annotation] replaced 'rgb(...)' colors by hex strings in svg exports to
    reduce size of output
-   [core] removed redundant role attributes (in grid lines and ticks) to
    reduce size of svg export
-   [core] avoided setting role as 'default' in shapes and text elements
-   [band] renamed prop `medianStyle` to `middleStyle` to allow distributions
    to display means rather than medians
-   [band] renamed components with prefix `Quantile` to `Distribution`
-   [core] augmented interface `CompleteThemeSpec` to support styling `tspan`
    components
-   [annotation] fixed bug with svg cleaning that caused some attributes
    with undefined values being retained in output
-   [themes] simplified theme piece `downloadTheme`
-   [band] changed numeric interpretation of prop `paddingInternal` to
    simplify overlaying multiple views on top of each other
-   [band] added prop `variant' to `Quantile`and`Strip` to enable grouped /
    layered charts
-   [band] changed interpretation of prop `variant` in `Strip`; point
    arrangements now set via new prop `jitter`
-   [all] changed rollup config to reduce bundle sizes by excluding
    framer-motion
-   [core] changed a typing on cart context props to simplify tests
-   [core] changed prop `role` in `MilestoneMotion` to `setRole` for
    consistency with other components, and to enable setting a role by default
-   [core] changed fill opacity for path components in `defaultTheme`
-   [annotation] fixed bug with `BlockArrow` rotation
-   [core] simplified typescript type for tick label format in `AxisTicks`
-   [core] adjusted the default theme to disable pointer events on decorative items, e.g. grid lines
-   [band] updated `BandSurface` to respond to mouse events and use a
    customizable 'dataComponent'
-   [themes] refactored organization of the objects in src, stories, and tests
-   [core] moved `ArrowMarker` and `BluntMarker` to the annotation package
-   [matrix] changed default animation in `HeatMapHighlight` to simple fade-in
-   [documentation] edited miscellaneous documentation pages

## v0.2.0

### Highlights

-   Tooltips for all chart types
-   New package `@chsk/set` for set membership diagrams
-   New components in existing packages, including animated flowchart arrows,
    cross-hairs for scatter charts, and error bars for scatter charts
-   Style modifiers activated upon mouse interactions

### Added

-   [examples] bar chart with a grouped tooltip
-   [examples] scatter chart with points with error bars
-   [band] custom tooltip component `QuantileTooltip` to display quantile
    details in a table
-   [xy] support for error bars with `ScatterErrors`
-   [examples] random walks with moving averages
-   [xy] basic signal-processing props (convolution, downsampling) for curves,
    areas, and intervals
-   [band] allow `BandSurface` to appear using tooltip context
-   [core] component `AxisTooltip`
-   [examples] bar chart with gradients within bars
-   [annotation] filters `FilterInsetShadow`, `FilterInsetColor`,
    `FilterInsetBoundary`
-   [core] support for style modifiers in `DataComponent` and `TooltipDataComponent`
-   [examples] bar chart with shadows
-   [matrix] support for tooltip in `HeatMapHighlight`
-   [annotation] factory `createConcentricSymbol` to create custom symbols
-   [annotation] interactivity props to `BlockArrow`
-   [core] component `TooltipDataComponent` to set tooltip data
-   [core] prop `anchor` for `Label`
-   [core] prop `baseTheme` for `Chart` to enable resetting the entire
    theme
-   [themes] theme pieces for text, lines, and ticks
-   [annotation] symbols for horizontal and vertical golden rectangles
-   [core] object `containerRef` in dimensions context
-   [examples] dot chart using band package
-   [band] support for variant 'layered' in 'Bar'
-   [core] hook `useTooltip` and context provider `TooltipProvider`
-   [core] components `Tooltip`, `TooltipTitle`, `TooltipItemList`,
    `TooltipItem`
-   [core] component `SimpleDataComponent`
-   [xy] component `ScatterCrosshair`
-   [examples] bar chart with ACGT sequence logo
-   [core] support for prop `interactive` in `Legend`
-   [core] support for threshold color scales
-   [core] support for fill and stroke animation in `Rectangle`
-   [examples] bar chart with rectangles appearing as colored by positive / negative values
-   [annotation] component `Paragraph` displaying wrapped text
-   [examples] dashboard-like toolbar with widgets displaying percentages
-   [examples] bar chart displaying fractions with counters and custom labels
-   [core] documentation page for `Counter`
-   [examples] scatter chart with a genome manhattan layout
-   [examples] example of line chart with data and forecast
-   [core] prop `labelTranslate` in `AxisTicks` to provide full control of label positions next to axis ticks
-   [examples] horizontal stacked bar chart with counters
-   [examples] horizontal bar chart with custom ticks positioned above bars
-   [examples] heatmap with lower-triangular structure
-   [matrix] prop `cells` in `HeatMapCells` and capability to draw specific selected cells
-   [annotation] component `FlowPath`
-   [examples] line chart with many lines and two-column legend
-   [examples] heatmap/table with custom symbol and counter
-   [core] prop `format` for `Counter` component
-   [core] prop `stretch` to the `Chart` component
-   [examples] examples of venn charts
-   [set] venn charts with two and three sets
-   [examples] horizontal and vertical upset charts
-   [matrix] upset charts
-   [examples] horizontal and vertical schedule charts
-   [core] tests for scales and motion
-   [band] components `Schedule` and `Schedules` for schedule / Gantt charts
-   [examples] line charts with time scales
-   [core] support for time scales

### Changed

-   [core] changed props for interactive components, now using `handlers` and
    `modifiers`
-   [band] changed the default `dataComponent` to `TooltipDataComponent` for
    `Bars`, `Schedules`
-   [core] removed constants `WIDTH` and `HEIGHT`
-   [core] replaced `composeClassName` by `getClassName`
-   [core] reorganized tests into subdirectories
-   [core] merged some src directories
-   [core] moved several symbol shapes to the annotation package
-   [core] updated props on `View` and `BaseView` to better match
    conventions on other components
-   [core] modified default styles for some components appearing
    in legends
-   [themes] changes styles in some themes to be more compatible with inkscape svg
-   [core] changed implementation of `Typography` and `Label` to allow animations of rotated text
-   [annotation] improved `cleanSvg` to simplify scaleX, scaleY, and rotate transformations
-   [annotation] changed encoding of svg into text files to include newline characters
-   [annotation] changed encoding of svg into text files to round values for attributes `cx`, `cy`, `r` to 3 decimal places
-   [core] modified default styles for text with class name `counter`
-   [core] exported functions `getTransitionValue` and `getMotionValue`
-   [core] replaced prop `units` in container components (e.g. `View`) with `positionUnits` and `sizeUnits`
-   [documentation] edited miscellaneous documentation pages

## v0.1.0

### Highlights

-   Core infrastructure and add-on packages available on npm

### Added

-   New package `@chsk/core` with library infrastructure
-   New package `@chsk/annotation` with miscellaneous components suitable for
    many chart types
-   New package `@chsk/band` for charts with one categorical axis and one
    continuous axis, e.g. bar charts
-   New package `@chsk/matrix` for charts with two categorical axes, e.g. heat
    maps
-   New package `@chsk/themes` with objects for adjusting chart styles
-   New package `@chsk/xy` for charts with two continuous axes, e.g. scatter
    charts
