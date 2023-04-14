import { AlignSpec, FourSideSizeSpec, NumericPositionSpec } from './types'

// indexes for padding arrays
export const TOP = 0,
    RIGHT = 1,
    BOTTOM = 2,
    LEFT = 3

// indexes for size and position arrays
export const X = 0,
    Y = 1

// commonly used settings
export const zeroPosition: NumericPositionSpec = [0, 0]
export const zeroPadding: FourSideSizeSpec = [0, 0, 0, 0]
export const centerAlign: AlignSpec = [0.5, 0.5]
