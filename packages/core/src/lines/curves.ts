import { merge } from 'lodash'
import {
    line,
    curveBasisOpen,
    curveBasisClosed,
    curveCardinalClosed,
    curveCardinalOpen,
    curveCatmullRomClosed,
    curveCatmullRomOpen,
    curveLinear,
    curveLinearClosed,
    curveMonotoneX,
    curveMonotoneY,
    curveNatural,
    curveStep,
    curveStepAfter,
    curveStepBefore,
} from 'd3-shape'
import { CurveFunction, CurveSpec } from './types'
import { PositionSpec } from '../general'

const pointCurves = {
    Linear: curveLinear,
    MonotoneX: curveMonotoneX,
    MonotoneY: curveMonotoneY,
    Natural: curveNatural,
    Step: curveStep,
    StepAfter: curveStepAfter,
    StepBefore: curveStepBefore,
}
const openCurves = {
    BasisOpen: curveBasisOpen,
    CardinalOpen: curveCardinalOpen,
    CatmullRomOpen: curveCatmullRomOpen,
}
const closedCurves = {
    BasisClosed: curveBasisClosed,
    CardinalClosed: curveCardinalClosed,
    CatmullRomClosed: curveCatmullRomClosed,
    LinearClosed: curveLinearClosed,
}
const allCurves = merge(closedCurves, openCurves, pointCurves)

export const getLineGenerator = (curve: CurveSpec): CurveFunction => {
    return line()
        .defined((d: PositionSpec) => d[0] !== null && d[1] !== null)
        .curve(allCurves[curve])
}
