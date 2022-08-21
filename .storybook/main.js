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
    },
    features: {
        previewMdx2: true,
    },
    // used for framer-motion
    // https://stackoverflow.com/questions/72710138/framer-motion-with-storybook-error-in-build-environment
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.mjs$/,
            include: /node_modules/,
            type: 'javascript/auto',
        })
        return config
    },
}
