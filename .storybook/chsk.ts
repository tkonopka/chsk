import prettier from 'prettier/standalone'
import prettierBabel from 'prettier/parser-babel'

const unnecessaryProps = [
    'onClick',
    'onMouseEnter',
    'onMouseMove',
    'onMouseLeave',
    'component',
    'format',
    'labelFormat',
]

/** remove unnecessary props from code
 *
 * Storybook-generated code may turn an 'undefined' prop with a function type into ()=>{}.
 * This function removes those snippets
 *
 * */
const removeUnnecessaryProps = (input: string) => {
    let result = input
    unnecessaryProps.forEach(prop => {
        result = result
            .replace(prop + '={() => {}}', '')
            .replace(prop + '={function noRefCheck() {}}', '')
    })
    return result
}

/** prettify generic babel-compatible content */
const prettierCode = (input: string) => {
    return prettier.format(input, { parser: 'babel', plugins: [prettierBabel] })
}

/** attempt to extract and prettify <Chart>...</Chart> block from text input */
const prettierChartCode = (input: string) => {
    const startChart = input.indexOf('<Chart')
    const endChart = input.indexOf('</Chart')
    if (startChart >= 0 && endChart >= 0) {
        return prettierCode(input.substring(startChart, endChart + '</Chart>'.length))
    }
    return input
}

/** custom code transforms specific to the chsk project */
export const transformCode = (input: string) => {
    const shortInput = removeUnnecessaryProps(input)
    try {
        return prettierCode(shortInput)
    } catch {}
    try {
        return prettierChartCode(shortInput)
    } catch {}
    return input
}
