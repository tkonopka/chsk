import { ScatterInteractiveDataItem } from '@chsk/xy'

export const PointSummaryDiv = ({ data }: { data: null | ScatterInteractiveDataItem }) => {
    return (
        <div
            style={{
                margin: '20px',
                padding: '20px',
                border: 'solid 1px #bbbbbb',
                background: '#f8f8f8',
                minHeight: '3rem',
            }}
        >
            <div style={{ fontWeight: 600, color: '#444444', marginBottom: '0.75rem' }}>
                This is an html div element. It is rendered separately from the chart.
            </div>
            {data ? (
                <span>
                    Point: [series: {data.id}, index: {data.index}]
                </span>
            ) : null}
        </div>
    )
}
