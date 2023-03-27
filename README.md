# chsk

[![documentation](https://github.com/tkonopka/chsk/actions/workflows/documentation.yaml/badge.svg)](https://tkonopka.github.io/chsk/) [![tests](https://github.com/tkonopka/chsk/actions/workflows/tests.yaml/badge.svg)](https://github.com/tkonopka/chsk/actions/workflows/tests.yaml) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Chsk is a data visualization library for React. It provides a toolkit for
creating static charts for offline publications, dynamic components for
dashboards, and animated stories for presentations.

-   [documentation](https://tkonopka.github.io/chsk/)
-   [gallery of examples](https://tkonopka.github.io/chsk/?path=/docs/gallery-overview--page)

## Features

The library provides React components for data visualization:

-   **Core components** include geometric shapes, text labels, axes,
    legends, and tooltips.
-   **Data-specific components** include bar charts, line charts,
    scatter plots, pie/doughnut charts, strip charts, quantile/box plots,
    histograms, heat maps, set/Venn diagrams, upset diagrams, and schedule/Gant charts.

Some features worth highlighting:

-   **Milestone animations** enable step-by-step story-telling.
-   **Low-level components** combine in arbitrary ways to compose truly
    original visualizations.
-   **Annotation components** add bespoke decorations to base charts.
-   **Hooks** provide access to chart state and enable the implementation of
    arbitrary custom components.
-   **Svg utilities** save charts into small, optimised svg files.

## Example

The animation below shows a bar chart with custom spacing between groups of bars.

![Custom bar chart](/gifs/custom-bars-580x280.gif)

(The recording starts with an empty surface and parts of the chart enter
into view in stages. Later, the bars readjust to display new data.)

All data in the animation are synthetic. A live version of the chart is available [here](https://tkonopka.github.io/chsk/?path=/docs/gallery-bar-charts--custom-groups).

## Install

Install `@chsk/core` from npm to set up the library infrastructure.

```
npm install @chsk/core
```

Then install any add-on packages to handle specific visualization types, e.g.
bar charts.

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
