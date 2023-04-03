# Changelog

## [Unreleased]

### Added

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

### Added

-   packages: core, annotation, band, matrix, themes, xy
