// letters of the alphabet
export const alphabetUppercase = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
]
export const alphabetUppercaseVowels = ['A', 'E', 'I', 'O', 'U']
export const alphabetUppercaseConsonants = [
    'B',
    'C',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'M',
    'N',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'V',
    'W',
    'X',
    'Y',
    'Z',
]

// letters of the Greek alphabet
export const alphabetGreek = [
    'alpha',
    'beta',
    'gamma',
    'delta',
    'epsilon',
    'zero',
    'eta',
    'theta',
    'iota',
    'kappa',
    'lambda',
    'mu',
    'nu',
    'xi',
    'omicron',
    'pi',
    'rho',
    'sigma',
    'tau',
    'upsilon',
    'phi',
    'chi',
    'psi',
    'omega',
]

/**
 * generate a random number from normal distribution
 * modified from:
 * https://stackoverflow.com/questions/25582882/javascript-math-random-normal-distribution-gaussian-bell-curve
 *
 * @param mean center of distribution
 * @param sd width of distribution
 */
export const randomNormalValue = (mean: number, sd = 1) => {
    const u = 1 - Math.random()
    const v = Math.random()
    const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
    return z * sd + mean
}

/** generate a random number from uniform distribution */
export const randomUniformValue = (min: number, max: number) => {
    const size = max - min
    return min + Math.random() * size
}

// create an array of values from superposed normal distributions
export const generateMixedPopulation = (n: number[], mean: number[], sd: number[]) => {
    const result: number[][] = []
    n.forEach((size, i) => {
        const values: number[] = Array(Math.round(size))
            .fill(0)
            .map(() => randomNormalValue(mean[i], sd[i]))
        result.push(values)
    })
    return result.flat()
}

export const generateIdentifiers = (n: number, size: number, prefix = 'A'): string[] => {
    const ids = new Set<string>()
    while (ids.size < n) {
        ids.add(prefix + String(Math.floor(Math.random() * size)))
    }
    return Array.from(ids)
}

// create an array of numbers in an interval
export const stepSequence = (interval: [number, number], step = 1) => {
    let x = interval[0]
    const result = []
    while (x < interval[1]) {
        result.push(x)
        x += step
    }
    return result
}
