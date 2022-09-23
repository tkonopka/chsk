import { createElement, useRef, useState } from 'react'
import { ChartRef } from '@chask/core'
import {
    ReplayIcon,
    defaultIconActiveFill as activeFill,
    defaultIconInactiveFill as inactiveFill,
    FirstPageIcon,
    LastPageIcon,
    PreviousIcon,
    NextIcon,
} from './icons'
import { ControllerProps, MilestoneStep } from './types'

const isString = (m: MilestoneStep): m is string => typeof m === 'string'
const isNumber = (m: MilestoneStep): m is number => typeof m === 'number'

const allMilestones = (steps: MilestoneStep[]) => {
    const result = new Set<string>()
    steps.forEach(m => {
        if (isString(m)) {
            if (result.has(m)) {
                result.delete(m)
            } else {
                result.add(m)
            }
        }
    })
    return result
}

// controller accepts steps as array of string and numbers
// strings are milestones for the chart
// numbers are wait-times between milestones for auto-play
export const Controller = ({ generator, chart, steps = [], comment }: ControllerProps) => {
    const [rawData, setRawData] = useState(generator())
    const ref = useRef<ChartRef>(null)
    const allSteps: string[] = steps.filter(isString) as string[]
    const [index, setIndex] = useState(steps.length)

    // set of milestones as if toggled one-by-one
    const finalState = allMilestones(steps)

    // number of strings from beginning up to index
    const status = steps.slice(0, index).filter(isString).length

    const handleRefresh = () => {
        setRawData(generator())
    }
    const handleFastRewind = () => {
        ref?.current?.updateData({ milestones: new Set<string>() })
        setIndex(0)
    }
    const handlePrevious = () => {
        if (index === 0) return
        let i = index - 1
        while (i >= 0 && isNumber(steps[i])) {
            i -= 1
        }
        if (i >= 0 && isString(steps[i])) {
            ref?.current?.toggleMilestone(String(steps[i]))
        }
        setIndex(i)
    }
    const handleNext = () => {
        if (index >= steps.length) return
        // look for next available string-like step / milestone
        let i = index
        while (i < steps.length && isNumber(steps[i])) {
            i += 1
        }
        if (i < steps.length && isString(steps[i])) {
            ref?.current?.toggleMilestone(String(steps[i]))
        }
        setIndex(i + 1)
    }
    const handleFastForward = () => {
        if (index >= steps.length) return
        ref?.current?.updateData({ milestones: new Set<string>(finalState) })
        setIndex(steps.length)
    }

    return (
        <div>
            <div className={'controller'}>
                <div className={'controller-label'}>Data</div>
                <button onClick={handleRefresh}>
                    <ReplayIcon />
                </button>
                {steps.length > 0 ? (
                    <>
                        <div className={'controller-spacer'} />
                        <div className={'controller-label'}>Milestones</div>
                        <button onClick={handleFastRewind}>
                            <FirstPageIcon fill={index > 0 ? activeFill : inactiveFill} />
                        </button>
                        <button onClick={handlePrevious}>
                            <PreviousIcon fill={index > 0 ? activeFill : inactiveFill} />
                        </button>
                        <button onClick={handleNext}>
                            <NextIcon fill={index < steps.length ? activeFill : inactiveFill} />
                        </button>
                        <button onClick={handleFastForward}>
                            <LastPageIcon fill={index < steps.length ? activeFill : inactiveFill} />
                        </button>
                        <div className={'controller-progress'}>
                            ({status} / {allSteps.length})
                        </div>
                    </>
                ) : null}
            </div>
            <div className={'controller-chart'}>
                <div className={'chart'}>
                    {createElement(chart, {
                        fref: ref,
                        chartData: { milestones: finalState },
                        rawData: rawData,
                    })}
                </div>
                <div className={'comment'}>{comment}</div>
            </div>
        </div>
    )
}
