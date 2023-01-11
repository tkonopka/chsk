# Changelog

## [Unreleased]

### Added

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

-   [packages/annotation]: changed encoding of svg into text files to include newline characters
-   [packages/annotation]: changed encoding of svg into text files to round values for attributes `cx`, `cy`, `r` to 3 decimal places
-   [packages/core]: modified default styles for text with class name `counter`
-   [packages/core]: exported functions `getTransitionValue` and `getMotionValue`
-   [packages/core]: replaced prop `units` in container components (e.g. `View`) with `positionUnits` and `sizeUnits`
-   [documentation]: edited miscellaneous documentation pages

## v0.1.0

### Added

-   packages: core, annotation, band, matrix, themes, xy
