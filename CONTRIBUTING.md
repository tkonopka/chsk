# Contributing

## Setup

```
npm install         // install dependencies for the monorepo
npm run bootstrap   // install further dependencies for the chask packages
```

## Development

### Code style

```
npm run prettier
```

### Lint and Build

Lint and build steps are managed using `lerna`. The following two commands perform the lint and build actions for all packages.

```
npm run lint
npm run build
```

To focus development on one package, apply the same command from within that package's directory.

```
cd packages/core
npm run lint
npm run build
cd ../../
```

### Test

Unit tests are managed using `jest` and `lerna`.

```
npm run test            // basic test suite
npm run test-coverage   // test suite with coverage (results will be package-specific)
```

To focus development on one package, apply the same commands from within that package's directory.

```
cd packages/core
npm run test
npm run test-coverage
cd ../../
```

### Storybook

Launch the storybook in development mode.

```
npm run storybook
```

## Deployment

### Publishing

To do

### Storybook

Build a static copy of the storybook and serve it.

```
npm run build-storybook
npm run serve-storybook
```
