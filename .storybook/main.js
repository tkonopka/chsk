import { dirname, join } from "path";
module.exports = {
    stories: [
        '../packages/**/*.mdx',
        '../examples/**/*.mdx',
        '../packages/**/*.stories.tsx',
        '../examples/**/*.stories.tsx',
    ],

    addons: [
        getAbsolutePath("@storybook/addon-links"),
        getAbsolutePath("@storybook/addon-essentials"),
        getAbsolutePath("@storybook/addon-interactions"),
        getAbsolutePath("@storybook/addon-webpack5-compiler-babel"),
        getAbsolutePath("@chromatic-com/storybook"),
    ],

    framework: {
        name: getAbsolutePath("@storybook/react-webpack5"),
        options: {},
    },

    core: {
        disableTelemetry: true,
    },

    docs: {
        autodocs: true
    },

    typescript: {
        reactDocgen: "react-docgen-typescript"
    }
}

function getAbsolutePath(value) {
    return dirname(require.resolve(join(value, "package.json")));
}
