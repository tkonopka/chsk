import { MilestoneMotion } from '../../../src'
import { EntryMilestones, ExitMilestones, EntryExitMilestones } from './Milestone.animations'

export default {
    title: 'Core/Components/Charts/MilestoneMotion',
    component: MilestoneMotion,
}

export const Entry = {
    render: () => <EntryMilestones />,
    name: 'entry milestones',
}

export const Exit = {
    render: () => <ExitMilestones />,
    name: 'exit milestones',
}

export const EntryAndExit = {
    render: () => <EntryExitMilestones />,
    name: 'entry and exit milestones',
}

export const CustomStates = {
    render: () => (
        <EntryExitMilestones
            enter={{
                opacity: 0,
                x: -80,
            }}
            exit={{
                opacity: 0,
                scale: 3,
            }}
        />
    ),
    name: 'custom states',
}

export const CustomTransitions = {
    render: () => (
        <EntryExitMilestones
            enter={{
                opacity: 0,
            }}
            exit={{
                opacity: 0,
            }}
            transition={{
                type: 'spring',
                mass: 0.5,
                stiffness: 10,
            }}
        />
    ),
    name: 'custom transitions',
}

export const CustomActions = {
    render: () => (
        <EntryExitMilestones
            onEnter={() => {
                console.log('enter')
            }}
            onExit={() => {
                console.log('exit')
            }}
        />
    ),
    name: 'custom actions',
}
