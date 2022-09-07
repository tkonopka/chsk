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

### Code style

Code style is maintained using `prettier`.

```
npm run prettier
```

### Lint and build

Lint and build steps are managed using `lerna`. The following two commands perform the lint and build actions for all packages.

```
npm run lint
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

### Storybook

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
