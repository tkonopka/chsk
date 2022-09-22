# Contributing

Contributions are welcome.

To discuss code changes or new features, please raise an issue in the github repository.
To edit the codebase, install the project as described below.

## Setup

Fork the github repository, then clone the fork to a local development environment.

The project is set up as a monorepo.
It has dependencies to make the project work as whole.
There are also dependencies for the individual `chask` packages.

```
npm install         # install dependencies for the monorepo
npm run bootstrap   # install further dependencies for the chask packages
```

## Development

### Code structure

Some rules-of-thumb for code structure:

-   **Components** are defined in dedicated files, e.g. `Component.tsx`
-   **Utility functions** that may be used by components are in separate files, e.g. `utils.ts`. Utility functions are typically not exported out of a package.

Some directories have files with standardized names that convey their purpose:

-   **index.tsx** files export components and types. These files do not define new objects.
-   **types.tsx** files define types and interfaces. These files typically do not define functions or other objects.
-   **context.tsx** files define a trio of a data context object, a context provider, and a hook.
-   **predicates.ts** files define predicate functions associated with certain data types, e.g. context data.

### Code style

Code style is maintained using `prettier`.

```
npm run prettier
```

### Lint and build

Lint and build steps are managed using `lerna`. The following two commands perform the lint and build actions for all packages.

```
npm run lint
npm run build-core   # may be required to build the core package before other packages
npm run build
```

To focus development on one package, apply the same command from within that package's directory.

```
cd packages/core    # navigate to a specific package, e.g. core
npm run lint
npm run build
cd ../../
```

### Test

Unit tests are managed using `jest` and `lerna`.

```
npm run test            # basic test suite
npm run test-coverage   # test suite with coverage (results will be package-specific)
```

To focus development on one package, apply the same commands from within that package's directory.

```
cd packages/core    # navigate to a specific package, e.g. core
npm run test
npm run test-coverage
cd ../../
```

## Documentation

The package documentation is managed using `storybook`.

Launch the storybook in development mode.

```
npm run storybook
```

Alternatively, build a static copy of the storybook and serve it.

```
npm run build-storybook
npm run serve-storybook
```

Note that the live documentation site is built and deployed automatically via github actions.
Changes to the live documentation site will appear a few minutes after changes to the main branch.

## Examples

A gallery of charts is maintained in directory `examples`.
