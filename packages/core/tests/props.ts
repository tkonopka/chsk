// objects used in test suites

export const scaleProps = {
    variant: 'linear' as const,
    min: 0,
    max: 100,
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
