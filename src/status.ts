// command-line script to display a summary of test coverage on all packages
const path = require('path')
const fs = require('fs')

// get a list of package names
const packagesDir = path.join(process.cwd(), 'packages')
const packages: string[] = fs.readdirSync(packagesDir).filter((x: string) => {
    return fs.statSync(path.join(packagesDir, String(x))).isDirectory()
})

const dashLine = '--------------------------------------------'
const shortDashLine = '----------------------------'

const packageLinePrefix = (pkg: string) => (pkg.length >= 8 ? pkg : pkg + '\t')

// Summarize number of tests and successes
const testSummaryFile = (pkg: string) => path.join(packagesDir, pkg, 'tests', 'jest.json')
const testSummary = (pkg: string) => JSON.parse(fs.readFileSync(testSummaryFile(pkg)))
console.log('Package\t\tTests\t\tPassed')
console.log(dashLine)
const summary = packages.map(pkg => {
    const data = testSummary(pkg)
    const total = data['numTotalTests']
    const passed = data['numPassedTests']
    console.log(packageLinePrefix(pkg) + '\t' + total + '\t\t' + passed)
    return { package: pkg, total, passed }
})
console.log(dashLine)
const totalTests = summary.reduce((total, x) => total + x['total'], 0)
const totalPassed = summary.reduce((total, x) => total + x['passed'], 0)
console.log('total\t\t' + totalTests + '\t\t' + totalPassed)
console.log('\n')

// Summarize test coverage
const testCoverageFile = (pkg: string) =>
    path.join(packagesDir, pkg, 'coverage', 'coverage-final.json')
const testCoverage = (pkg: string) => JSON.parse(fs.readFileSync(testCoverageFile(pkg)))
console.log('Package\t\tStatements\tCoverage (%)')
console.log(dashLine)
const coverage = packages.map(pkg => {
    const data = testCoverage(pkg)
    let statements = 0
    let hits = 0
    // loop over files in the coverage summary file
    Object.keys(data).map(k => {
        const counts = data[k]['s']
        // loop over line indexes under 's' (statements)
        Object.values(counts).map(v => {
            statements += 1
            hits += Number(Number(v) > 0)
        })
    })
    const coverage = Math.round((10000 * hits) / statements) / 100
    console.log(packageLinePrefix(pkg) + '\t' + statements + '\t\t' + coverage)
    return { package: pkg, statements, hits, coverage }
})
console.log(dashLine)
const totalStatements = coverage.reduce((total, x) => total + x['statements'], 0)
const totalHits = coverage.reduce((total, x) => total + x['hits'], 0)
const overallCoverage = Math.round((10000 * totalHits) / totalStatements) / 100
console.log('total\t\t' + totalStatements + '\t\t' + overallCoverage)
console.log('')

// Summarize examples
const examplesDir = path.join(process.cwd(), 'examples')
const examplesSubDirs: string[] = fs.readdirSync(examplesDir).filter((x: string) => {
    const fullPath = path.join(examplesDir, x)
    return fs.statSync(fullPath).isDirectory()
})
const findExampleMdx = (dirname: string) => {
    const fullPath = path.join(examplesDir, dirname)
    const content = fs
        .readdirSync(path.join(examplesDir, dirname))
        .filter((x: string) => x.endsWith('.mdx'))
    return path.join(fullPath, content[0])
}
const countStories = (dirname: string) => {
    const mdx = findExampleMdx(dirname)
    const content = fs.readFileSync(mdx, 'utf8')
    const n: number = content
        .split('\n')
        .filter((line: string) => line.trim().startsWith('<Story')).length
    console.log(packageLinePrefix(dirname) + '\t' + n)
    return { gallery: dirname, n }
}
console.log('Gallery\t\tExamples')
console.log(shortDashLine)
const examples = examplesSubDirs.map(countStories)
const totalExamples = examples.reduce((total, x) => total + x['n'], 0)
console.log(shortDashLine)
console.log('total\t\t' + totalExamples)
console.log('')
