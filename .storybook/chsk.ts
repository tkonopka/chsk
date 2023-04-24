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
const unnecessaryStrings = ['colors: () => {},', 'colors: function noRefCheck() {}']

/**
 * remove unnecessary props from code
 *
 * Storybook-generated code may contain spurious entries.
 * e.g. when a prop has a function type and an 'undefined' default value,
 * the storybook-generated code may display it as '()=>{}'
 * This function removes such snippets snippets using string 'replace'
 *
 * */
const removeUnnecessaryProps = (input: string) => {
    let result = input
    unnecessaryProps.forEach(prop => {
        result = result
            .replace(prop + '={() => {}}', '')
            .replace(prop + '={function noRefCheck() {}}', '')
    })
    unnecessaryStrings.forEach(target => {
        result = result.replace(target, '')
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
