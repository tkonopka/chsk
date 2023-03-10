import fs from 'fs'
import babel from '@rollup/plugin-babel'
import json from '@rollup/plugin-json'
import resolve from '@rollup/plugin-node-resolve'
import cleanup from 'rollup-plugin-cleanup'
import { terser } from 'rollup-plugin-terser'

const pkg = process.env.PACKAGE
const env = process.env.NODE_ENV ?? 'development'

// The config assumes rollup -c is invoked from a package/${pkg} directory
// The build commands assume they are executed from the root directory
process.chdir('../../')

const extensions = ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx']
const babelConfig = {
    extensions,
    exclude: /node_modules/,
    babelHelpers: 'bundled',
    comments: false,
    plugins: [],
}

let input = './packages/' + pkg + '/src/index.tsx'
if (!fs.existsSync(input)) {
    input = input.replace('.tsx', '.ts')
}

const commonPlugins = [
    resolve({
        module: true,
        jsnext: true,
        main: true,
        browser: true,
        extensions,
        modulesOnly: true,
    }),
    json(),
    babel(babelConfig),
    terser({ mangle: { keep_fnames: env === 'development' } }),
    cleanup(),
]

// ignore warning about circular dependencies in d3-interpolate
const D3_WARNING = /Circular dependency.*d3-interpolate/

const commonConfig = {
    input,
    external: ['react', 'react-dom', 'react/jsx-runtime', 'framer-motion'],
    plugins: commonPlugins,
    onwarn: function (message) {
        if (D3_WARNING.test(message)) {
            return
        }
    },
}
const configs = [
    {
        ...commonConfig,
        output: {
            file: `./packages/${pkg}/dist/chsk-${pkg}.es.js`,
            format: 'es',
            name: `@chsk/${pkg}`,
            sourcemap: true,
        },
    },
    {
        ...commonConfig,
        output: {
            file: `./packages/${pkg}/dist/chsk-${pkg}.cjs.js`,
            format: 'cjs',
            name: `@chsk/${pkg}`,
            sourcemap: true,
        },
    },
]
if (env === 'production') {
    configs.push({
        ...commonConfig,
        output: {
            file: `./packages/${pkg}/dist/chsk-${pkg}.umd.js`,
            format: 'umd',
            name: `@chsk/${pkg}`,
            globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
                'react/jsx-runtime': 'jsxRuntime',
            },
            sourcemap: true,
        },
    })
}

export default configs
