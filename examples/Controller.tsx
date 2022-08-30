import { createElement, useRef, useState } from 'react'
import { ChartRef } from '@chask/core'
import { PreviousIcon, ReplayIcon, NextIcon } from './icons'
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
export const Controller = ({ chart, steps }: ControllerProps) => {
    const ref = useRef<ChartRef>(null)
    const allSteps: string[] = steps.filter(isString) as string[]
    const [index, setIndex] = useState(steps.length)

    // set of milestones as if toggled one-by-one
    const finalState = allMilestones(steps)

    // number of strings from beginning up to index
    const status = steps.slice(0, index).filter(isString).length

    const handleReplay = () => {
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

    return (
        <div>
            <div className={'controller'}>
                <button className={'icon'} onClick={handleReplay}>
                    <ReplayIcon />
                </button>
                <div style={{ minWidth: '1em', display: 'inline-block' }} />
                <button className={'icon'} onClick={handlePrevious}>
                    <PreviousIcon />
                </button>
                <button className={'icon'} onClick={handleNext}>
                    <NextIcon />
                </button>
                <div style={{ minWidth: '1em', display: 'inline-block' }} />
                <div className={'status'}>
                    Status: {status} / {allSteps.length}
                </div>
            </div>
            <div className={'chart'}>
                {createElement(chart, {
                    data: { milestones: finalState },
                    fref: ref,
                })}
            </div>
        </div>
    )
}
