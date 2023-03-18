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
                ['Overview', 'Components', 'Hooks', 'Props'],
                'Addons',
                [
                    'Annotation',
                    ['Overview', 'Labels', 'Filters', 'Symbols'],
                    'Band',
                    ['Overview'],
                    'Matrix',
                    ['Overview'],
                    'Polar',
                    ['Overview'],
                    'Set',
                    ['Overview'],
                    'Themes',
                    ['Overview', 'Complete themes', 'Partial themes'],
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
