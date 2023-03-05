# Changelog

## [Unreleased]

### Added

-   [core] component `BluntMarker`
-   [annotation] component `ArcArrow`
-   [matrix] prop `cornerAnimation` in `HeatMapHighlight` to toggle between
    fade-in and corner animations
-   [annotation] component `GridStripes`

### Changed

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
