# @chsk/core

`@chsk/core` is a data visualization framework for React. It provides tools
for customizable, extendable, and dynamic story-telling with data.

## Features

The package provides React components that create commonly-used chart
elements as scalable vector graphics (svg).

-   **Chart and view components** provide the basic infrastructure to create
    svg graphics
-   **Axis components** draw x- and y- axes
-   **Legend components** provide support for legends with categorical items,
    color scales, and size scales
-   **Shape components** display basic shapes, including rectangles, lines,
    and paths so that they may be animated
-   **Typography components** handle text
-   **Tooltip components** manage tooltips

In addition, `@chsk/core` sets up infrastructure that allows for
customization and extension.

-   **Hooks** provide a means for custom components to retrieve chart state
-   **Interactivity wrappers** manage user interactions such as mouse events
-   **Milestone infrastructure** enables toggling visibility of chart elements
    to support incremental story-telling
-   **Utility functions** enable add-ons to re-use code related to chart state, scales, colors, etc.
-   **Typescript** throughout the code base

## Add-ons

While `@chsk/core` provides infrastructure that is relevant to data
visualization in general, support for specific chart types is available
through add-on packages.

-   **[@chsk/annotation](https://www.npmjs.com/package/@chsk/annotation)**
    provides miscellaneous elements that can be used to enrich base charts, e.g.
    arrows, labels, symbols, and markers
-   **[@chsk/band](https://www.npmjs.com/package/@chsk/band)** creates charts
    with one categorical axis and one continuous axis, e.g. bar charts
-   **[@chsk/matrix](https://www.npmjs.com/package/@chsk/matrix)** supports
    charts with two categorical axes, e.g. heat maps
-   **[@chsk/polar](https://www.npmjs.com/package/@chsk/polar)** supports
    charts using polar coordinates, e.g. pie charts
-   **[@chsk/set](https://www.npmjs.com/package/@chsk/set)** generates Venn
    diagrams
-   **[@chsk/themes](https://www.npmjs.com/package/@chsk/themes)** provides a
    collection of objects that change chart look-and-feel
-   **[@chs/xy](https://www.npmjs.com/package/@chsk/xy)** creates charts
    with two continuous axes, e.g. scatter charts

## Documentation

See [here](https://tkonopka.github.io/chsk/?path=/docs/core)

## Credits

`@chsk/core` relies on [react](https://www.npmjs.com/package/react)
for managing state and
[framer-motion](https://www.npmjs.com/package/framer-motion) for animations.
It uses [d3](https://www.npmjs.com/package/d3) libraries for
many visualization-related calculations and
[lodash](https://www.npmjs.com/package/lodash) for general-purpose data processing.
