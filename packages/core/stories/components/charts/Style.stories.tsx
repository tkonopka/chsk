import { Style, emptyTheme } from '../../../src'
import { DivDecorator } from '../decorators'

export default {
    title: 'Core/Components/Charts/Style',
    component: Style,
}

export const Themes = {
    name: 'themes',
    args: {
        ancestor: '',
        baseTheme: emptyTheme,
        theme: {
            text: {
                title: {
                    fontSize: '28px',
                },
            },
        },
        children: (
            <span>
                Check &lsquo;style&rsquo; tag in the console (<code>Ctrl Shift C</code>)
            </span>
        ),
    },
    decorators: [DivDecorator],
}

export const Ancestor = {
    name: 'ancestor',
    args: {
        ancestor: 'svg.chsk',
        children: (
            <span>
                Check &squo;style&rsquo; tag in the console (<code>Ctrl Shift C</code>)
            </span>
        ),
    },
    decorators: [DivDecorator],
}
