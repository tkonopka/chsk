module.exports = {
    stories: [
        '../packages/**/*.stories.mdx',
        '../packages/**/*.stories.@(js|jsx|ts|tsx)',
        '../examples/**/*.stories.mdx',
        '../examples/**/*.stories.@(js|jsx|ts|tsx)',
    ],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
    ],
    framework: '@storybook/react',
    core: {
        disableTelemetry: true,
        builder: '@storybook/builder-webpack5',
    },
    features: {
        previewMdx2: true,
    },
}
