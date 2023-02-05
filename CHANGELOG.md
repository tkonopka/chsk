# Changelog

## [Unreleased]

### Added

-   [packages/core]: prop `anchor` for `Label`
-   [packages/core]: prop `baseTheme` for `Chart` to enable resetting the entire
    theme
-   [packages/themes]: theme pieces for text, lines, and ticks
-   [packages/annotation]: symbols for horizontal and vertical golden rectangles
-   [packages/core]: object `containerRef` in dimensions context
-   [examples]: dot chart using band package
-   [packages/band]: support for variant 'layered' in 'Bar'
-   [packages/core]: hook `useTooltip` and context provider `TooltipProvider`
-   [packages/core]: components `Tooltip`, `TooltipTitle`, `TooltipItemList`,
    `TooltipItem`
-   [packages/core]: component `SimpleDataComponent`
-   [packages/xy]: component `ScatterCrosshair`
-   [examples]: bar chart with ACGT sequence logo
-   [packages/core]: support for prop `interactive` in `Legend`
-   [packages/core]: support for threshold color scales
-   [packages/core]: support for fill and stroke animation in `Rectangle`
-   [examples]: bar chart with rectangles appearing as colored by positive / negative values
-   [packages/annotation]: component `Paragraph` displaying wrapped text
-   [examples]: dashboard-like toolbar with widgets displaying percentages
-   [examples]: bar chart displaying fractions with counters and custom labels
-   [packages/core]: documentation page for `Counter`
-   [examples]: scatter chart with a genome manhattan layout
-   [examples]: example of line chart with data and forecast
-   [packages/core]: prop `labelTranslate` in `AxisTicks` to provide full control of label positions next to axis ticks
-   [examples]: horizontal stacked bar chart with counters
-   [examples]: horizontal bar chart with custom ticks positioned above bars
-   [examples]: heatmap with lower-triangular structure
-   [packages/matrix]: prop `cells` in `HeatMapCells` and capability to draw specific selected cells
-   [packages/annotation]: component `FlowPath`
-   [examples]: line chart with many lines and two-column legend
-   [examples]: heatmap/table with custom symbol and counter
-   [packages/core]: prop `format` for `Counter` component
-   [packages/core]: prop `stretch` to the `Chart` component
-   [examples]: examples of venn charts
-   [packages/set]: venn charts with two and three sets
-   [examples]: horizontal and vertical upset charts
-   [packages/matrix]: upset charts
-   [examples]: horizontal and vertical schedule charts
-   [packages/core]: tests for scales and motion
-   [packages/band]: components `Schedule` and `Schedules` for schedule / Gantt charts
-   [examples]: line charts with time scales
-   [packages/core]: support for time scales

### Changed

-   [packages/core]: removed constants `WIDTH` and `HEIGHT`
-   [packages/core]: replaced `composeClassName` by `getClassName`
-   [pacakges/core]: reorganized tests into subdirectories
-   [pacakges/core]: merged some src directories
-   [packages/core]: moved several symbol shapes to the annotation package
-   [packages/core]: updated props on `View` and `BaseView` to better match
    conventions on other components
-   [packages/core]: modified default styles for some components appearing
    in legends
-   [packages/themes]: changes styles in some themes to be more compatible with inkscape svg
-   [packages/core]: changed implementation of `Typography` and `Label` to allow animations of rotated text
-   [packages/annotation]: improved `cleanSvg` to simplify scaleX, scaleY, and rotate transformations
-   [packages/annotation]: changed encoding of svg into text files to include newline characters
-   [packages/annotation]: changed encoding of svg into text files to round values for attributes `cx`, `cy`, `r` to 3 decimal places
-   [packages/core]: modified default styles for text with class name `counter`
-   [packages/core]: exported functions `getTransitionValue` and `getMotionValue`
-   [packages/core]: replaced prop `units` in container components (e.g. `View`) with `positionUnits` and `sizeUnits`
-   [documentation]: edited miscellaneous documentation pages

## v0.1.0

### Added

-   packages: core, annotation, band, matrix, themes, xy
