import fs from 'fs'
import babel from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import cleanup from 'rollup-plugin-cleanup'
import { terser } from 'rollup-plugin-terser'

const pkg = process.env.PACKAGE
const isWatching = process.env.ROLLUP_WATCH === 'TRUE'

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
    babel(babelConfig),
    !isWatching && terser(),
    cleanup(),
]

// ignore warning about circular dependencies in d3-interpolate
const D3_WARNING = /Circular dependency.*d3-interpolate/

const configs = [
    {
        input,
        external: ['react', 'react/jsx-runtime'],
        output: {
            file: `./packages/${pkg}/dist/chask-${pkg}.es.js`,
            format: 'es',
            name: `@chask/${pkg}`,
            sourcemap: true,
        },
        plugins: [...commonPlugins],
        onwarn: function (message) {
            if (D3_WARNING.test(message)) {
                return
            }
        },
    },
]

if (!isWatching) {
    configs.push({
        input,
        external: ['react', 'react/jsx-runtime'],
        output: {
            file: `./packages/${pkg}/dist/chask-${pkg}.cjs.js`,
            format: 'cjs',
            name: `@chask/${pkg}`,
            sourcemap: true,
        },
        plugins: commonPlugins,
        onwarn: function (message) {
            if (D3_WARNING.test(message)) {
                return
            }
        },
    })
    configs.push({
        input,
        external: ['react', 'react-dom', 'prop-types', 'react/jsx-runtime'],
        output: {
            file: `./packages/${pkg}/dist/chask-${pkg}.umd.js`,
            format: 'umd',
            extend: true,
            name: 'chask',
            globals: {
                react: 'React',
                'react-dom': 'ReactDOM',
                'prop-types': 'PropTypes',
                'react/jsx-runtime': 'jsxRuntime',
            },
            sourcemap: true,
        },
        plugins: commonPlugins,
        onwarn: function (message) {
            if (D3_WARNING.test(message)) {
                return
            }
        },
    })
}

export default configs
