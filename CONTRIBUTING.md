# Contributing

## Setup

```
npm install    // install dependencies for the monorepo
npm run init   // install further dependencies for the chask packages
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

To focus development on one package, pass a `--scope` argument with the target package name.

```
npm run lint --scope=@chask/core
npm run build --scope=@chask/core
```

### Test

Unit tests are managed using `jest` and `lerna`. The test suite can be executed as-is, or with coverage summary.

```
npm run test
npm run test-coverage
```

To focus development on one package, pass a `--scope` argument with the target package name.

```
npm run test --scope=@chask/core
npm run test-coverage --scope=@chask/core
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
