module.exports = {
    stories: ['../packages/**/*.mdx', '../examples/**/*.mdx'],
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
    features: {
        previewMdx2: true,
    },
    docs: {
        autodocs: true,
    },
}
