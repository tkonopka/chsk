// objects used in test suites

export const scaleProps = {
    variant: 'linear' as const,
    domain: [0, 100] as [number, number],
}

export const chartProps = {
    size: [400, 300] as [number, number],
    padding: [40, 40, 40, 40] as [number, number, number, number],
}

export const viewProps = {
    data: [],
    scaleX: scaleProps,
    scaleY: scaleProps,
}
