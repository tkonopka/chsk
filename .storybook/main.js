module.exports = {
    stories: ['../packages/**/*.mdx', '../examples/**/*.mdx'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react',
    },
    core: {
        disableTelemetry: true,
        builder: '@storybook/builder-webpack5',
    },
    features: {
        previewMdx2: true,
    },
    docs: {
        autodocs: true,
    },
}
