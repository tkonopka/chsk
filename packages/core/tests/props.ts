// objects used in tests

export const scaleProps = {
    variant: 'linear' as const,
    domain: [0, 100] as [number, number],
}

export const chartProps = {
    size: [400, 300] as [number, number],
    padding: [20, 20, 20, 20] as [number, number, number, number],
}

export const viewProps = {
    data: [],
    scaleX: scaleProps,
    scaleY: scaleProps,
}

export const dataViewProps = {
    data: [{ keys: ['x', 'y', 'z'] }, { seriesIndexes: { A: 0, B: 1 } }],
    scaleX: scaleProps,
    scaleY: scaleProps,
}
