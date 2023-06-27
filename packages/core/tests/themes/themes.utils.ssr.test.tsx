/**
 * @jest-environment node
 */

import { renderToString } from 'react-dom/server'
import { ssrCompatible } from '../../src/themes'

describe('ssrCompatible, node', () => {
    it('creates transform string', () => {
        const result = renderToString(
            <svg>
                <text style={ssrCompatible({ fill: '#000000' }, { x: 10, y: 20 })}>content</text>
            </svg>
        )
        expect(result).toContain('translate(10px,20px)')
    })

    it('creates transform string with angle', () => {
        const result = renderToString(
            <svg>
                <text style={ssrCompatible({ fill: '#000000' }, { x: 0, y: 0, rotate: 10 })}>
                    content
                </text>
            </svg>
        )
        expect(result).toContain('rotate(10deg)')
    })
})
