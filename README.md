# chsk

[![documentation](https://github.com/tkonopka/chsk/actions/workflows/documentation.yaml/badge.svg)](https://tkonopka.github.io/chsk/) [![tests](https://github.com/tkonopka/chsk/actions/workflows/tests.yaml/badge.svg)](https://github.com/tkonopka/chsk/actions/workflows/tests.yaml) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

chsk is a charting library for React. It aims to provide a stable toolkit for creating graphs for static publications, dynamic components for dashboards, and animated stories for presentations.

The library provides infrastructure for building visualizations from the ground up. It includes components for common chart elements such as axes and labels. It also includes hooks and data-processing functions. These elements can be combined to create commonly-used charts such as line or bar charts, or entirely original and complex visualizations.

Documentation is available [here](https://tkonopka.github.io/chsk/).

## Features

The library provides components for several common chart types:

-   bar charts
-   line charts
-   scatter charts
-   strip charts
-   quantile charts / box plots
-   heat maps
-   set / Venn diagrams
-   Upset diagrams
-   schedule / Gant charts

The core library and add-on packages also provide additional elements to supplement the base charts:

-   legends
-   animated counters
-   animated lines
-   styled text labels
-   labels with text interval line, bracket, or brace
-   symbols
-   block arrows
-   themes
-   milestone animation
-   ...

A [gallery of examples](https://tkonopka.github.io/chsk/?path=/docs/gallery-overview--page) demonstrate how to use components, hooks, and other utility functions to compose truly bespoke charts.

## Example

The animation below shows a custom bar chart. The recording starts with an empty surface, and parts of the chart enter into view in stages. Later, the dataset is updated and the bars readjust to display the new information.

![Custom bar chart](/gifs/custom-bars-580x280.gif)

All data in the animation are synthetic. A live version of the chart is available [here](https://tkonopka.github.io/chsk/?path=/docs/gallery-bar-charts--custom-layout).

## Install

To start using the library, install package `@chsk/core` and any add-on packages from npm.

```
# required
npm install @chsk/core
# optional (pick any subset of add-on packages)
npm install @chsk/annotation @chsk/band @chsk/matrix @chsk/themes @chsk/xy
```

## Credits

Thanks to all the maintainers and contributors of the packages listed in `packages.json`.

Key dependencies include [react](https://github.com/facebook/react) for managing state, [lodash](https://github.com/lodash/lodash) for general data processing, [d3](https://github.com/d3) for data processing related to visualization, and [framer-motion](https://github.com/framer/motion) for managing animations.

Special thanks also to charting libraries [recharts](https://github.com/recharts/recharts) and [nivo](https://github.com/plouc/nivo), which are important influences.

## Contributing

Contributions are welcome. Please see `CONTRIBUTING.md`.
