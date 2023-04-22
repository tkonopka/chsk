module.exports = {
    stories: [
        '../packages/**/*.mdx',
        '../examples/**/*.mdx',
        '../packages/**/*.stories.tsx',
        '../examples/**/*.stories.tsx',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    core: {
        disableTelemetry: true,
    },
    docs: {
        autodocs: true,
    },
}
