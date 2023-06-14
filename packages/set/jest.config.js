/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '^d3-(.*)$': '<rootDir>/../../node_modules/d3-$1/dist/d3-$1.min.js',
        '^@chsk/(.*)$': '<rootDir>/../../node_modules/@chsk/$1/dist/chsk-$1.umd.js',
    },
}
