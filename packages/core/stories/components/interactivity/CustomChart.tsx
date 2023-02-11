import { Chart, DataComponent, Surface, Circle, Typography } from '../../../src'

export const CustomChart = () => {
    const keyframes = [
        '@keyframes colorchange {',
        'from {fill: #999999 }',
        'to {fill: #dd4444 }',
        '}',
    ].join('')
    return (
        <Chart
            size={[400, 300]}
            padding={[40, 40, 40, 40]}
            style={{ margin: '0.5em', border: 'solid 1px #aa3333', display: 'inline-block' }}
        >
            <style>{keyframes}</style>
            <Surface variant={'inner'} />
            <DataComponent
                component={Circle}
                data={{ id: 'A', value: 'first circle' }}
                props={{ cx: 50, cy: 50, r: 30, style: { fill: '#cccccc' } }}
                modifiers={{ onMouseEnter: { fill: '#dd7777' }, onMouseLeave: {} }}
            />
            <Typography position={[90, 50]} style={{ textAnchor: 'start' }}>
                hover to change color
            </Typography>
            <DataComponent
                component={Circle}
                data={{ id: 'B', value: 'second circle' }}
                props={{ cx: 50, cy: 120, r: 30, style: { fill: '#999999' } }}
                modifiers={{
                    onClick: { animation: 'colorchange 0.5s ease-in 0s 4 alternate none running' },
                }}
            />
            <Typography position={[90, 120]} style={{ textAnchor: 'start' }}>
                click for 2x color pulse
            </Typography>
        </Chart>
    )
}
