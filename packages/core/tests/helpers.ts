// objects used in test suites

export const scaleProps = {
    variant: 'linear' as const,
    min: 0,
    max: 100,
}

export const chartProps = {
    width: 400,
    height: 300,
    margin: { top: 20, right: 20, bottom: 20, left: 20 },
    data: [],
    scaleX: scaleProps,
    scaleY: scaleProps,
}
