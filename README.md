# chsk

[![documentation](https://github.com/tkonopka/chsk/actions/workflows/documentation.yaml/badge.svg)](https://tkonopka.github.io/chsk/) [![tests](https://github.com/tkonopka/chsk/actions/workflows/tests.yaml/badge.svg)](https://github.com/tkonopka/chsk/actions/workflows/tests.yaml) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Chsk is a library of React components for data visualization. It provides a toolkit for
creating static charts for offline publications, dynamic components for
dashboards, and animated stories for presentations.

-   [documentation](https://tkonopka.github.io/chsk/)
-   [gallery of examples](https://tkonopka.github.io/chsk/?path=/docs/gallery-overview--page)

## Features

The library provides React components for data visualization.

-   **Core components** include axes, legends, tooltips, typography elements,
    and geometric shapes.
-   **Data-specific components** include bar charts, line charts,
    scatter plots, pie/doughnut charts, strip charts, quantile/box plots,
    histograms, heat maps, set (Venn) diagrams, upset diagrams, and
    schedule (Gantt) charts.

Advanced features enable creating dynamic and bespoke content.

-   **Milestone animations** power step-by-step story-telling.
-   **Zoom and pan interactions** allow in-depth data exploration.
-   **Customizable components** combine in arbitrary ways to compose truly
    original designs.
-   **Annotation components** add decorations to base charts.
-   **Hooks** provide access to chart state and enable the implementation of custom components.
-   **Export utilities** save charts into optimised svg files.

## Example

The animation below shows a bar chart with custom spacing between groups of bars.

![Custom bar chart](/gifs/custom-bars-580x280.gif)

(The recording starts with an empty surface and parts of the chart enter
into view in stages. Later, the bars readjust to display new data.)

All data in the animation are synthetic. A live version of the chart is available [here](https://tkonopka.github.io/chsk/?path=/docs/gallery-bar-charts--custom-groups).

## Install

Package `@chsk/core` with library infrastructure is available from npm.

```
npm install @chsk/core
```

Add-on packages provide data-specific components. For example, package
`@chsk/band` supports bar charts.

```
npm install @chsk/band
```

Available packages are: `@chsk/annotation`, `@chsk/band`, `@chsk/matrix`,
`@chsk/polar`, `@chsk/set`, `@chsk/themes`, `@chsk/xy`.

## Credits

Thanks to all the maintainers and contributors of the packages listed in `packages.json`.

Key dependencies include [react](https://github.com/facebook/react) for managing state, [lodash](https://github.com/lodash/lodash) for general data processing, [d3](https://github.com/d3) for data processing related to visualization, and [framer-motion](https://github.com/framer/motion) for managing animations.

Special thanks also to charting libraries [recharts](https://github.com/recharts/recharts) and [nivo](https://github.com/plouc/nivo), which are important influences.

## Contributing

Contributions are welcome. Please see `CONTRIBUTING.md`.
