import { FlowTypography } from '../../src'
import { FlowTypographyDemo } from './FlowTypographyDemo'

export default {
    title: 'Addons/Annotation/Typography/FlowTypography',
    component: FlowTypography,
}

export const Default = {
    render: () => (
        <FlowTypographyDemo
            style={{
                textAnchor: 'start',
                fontSize: '18px',
            }}
        >
            This is an example.
        </FlowTypographyDemo>
    ),

    name: 'default',
}

export const SlowText = {
    render: () => (
        <FlowTypographyDemo
            rate={2}
            style={{
                textAnchor: 'start',
                fontSize: '18px',
            }}
        >
            This is an example.
        </FlowTypographyDemo>
    ),

    name: 'slow text',
}

export const Styled = {
    render: () => (
        <FlowTypographyDemo
            style={{
                textAnchor: 'start',
                fontSize: '18px',
                fill: '#ffffff',
                filter: 'url(#bg)',
            }}
        >
            This is an example.
        </FlowTypographyDemo>
    ),

    name: 'styled',
}
