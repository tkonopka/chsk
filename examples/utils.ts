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
export const randomNormalValue = (mean: number, sd: number = 1) => {
    const u = 1 - Math.random()
    const v = Math.random()
    const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
    return z * sd + mean
}
