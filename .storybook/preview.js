import prettier from 'prettier/standalone'
import prettierBabel from 'prettier/parser-babel'
import './docs.css'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    viewMode: 'docs',
    options: {
        storySort: {
            order: [
                'Introduction',
                'Getting started',
                'Using the documentation',
                'Core',
                [
                    'Overview',
                    'Components',
                    'Hooks',
                    'Props',
                    ['Common props', 'Colors', 'Scales', 'Themes'],
                ],
                'Addons',
                [
                    'Annotation',
                    ['Overview', 'Labels', 'Filters', 'Symbols'],
                    'Band',
                    ['Overview'],
                    'Matrix',
                    ['Overview'],
                    'Set',
                    ['Overview'],
                    'Themes',
                    ['Overview'],
                    'XY',
                    ['Overview'],
                ],
                'Gallery',
                ['Overview'],
            ],
        },
    },
    docs: {
        transformSource: input =>
            prettier.format(input, {
                parser: 'babel',
                plugins: [prettierBabel],
            }),
    },
}
