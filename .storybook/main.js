import { dirname, join } from 'path'
module.exports = {
    stories: [
        '../packages/**/*.mdx',
        '../examples/**/*.mdx',
        '../packages/**/*.stories.tsx',
        '../examples/**/*.stories.tsx',
    ],

    addons: [
        getAbsolutePath('@storybook/addon-links'),
        getAbsolutePath('@storybook/addon-webpack5-compiler-babel'),
        getAbsolutePath('@storybook/addon-docs'),
    ],

    framework: {
        name: getAbsolutePath('@storybook/react-webpack5'),
        options: {},
    },

    core: {
        disableTelemetry: true,
    },

    typescript: {
        reactDocgen: 'react-docgen-typescript',
    },
}

function getAbsolutePath(value) {
    return dirname(require.resolve(join(value, 'package.json')))
}
