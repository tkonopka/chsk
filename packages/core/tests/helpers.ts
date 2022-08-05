// objects used in test suites

export const scaleProps = {
    variant: 'linear' as const,
    min: 0,
    max: 100,
}

export const chartProps = {
    width: 400,
    height: 300,
    padding: { top: 20, right: 20, bottom: 20, left: 20 },
}

export const viewProps = {
    data: [],
    scaleX: scaleProps,
    scaleY: scaleProps,
}
