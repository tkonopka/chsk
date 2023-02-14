// command-line script to display a summary of test coverage on all packages
const path = require('path')
const fs = require('fs')

// get a list of package names
const packagesDir = path.join(process.cwd(), 'packages')
const packages: string[] = fs.readdirSync(packagesDir).filter((x: string) => {
    return fs.statSync(path.join(packagesDir, String(x))).isDirectory()
})

const dashLine = '--------------------------------------------'

const packageLinePrefix = (pkg: string) => (pkg.length > 8 ? pkg : pkg + '\t')

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
    return { package: pkg, statements, coverage }
})
console.log(dashLine)
console.log('')
