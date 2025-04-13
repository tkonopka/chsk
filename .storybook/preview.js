import './docs.css'
import { transformCode } from './chsk'

export const parameters = {
    actions: { },
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
                    'Overview',
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
        source: {
            transform: transformCode,
        },
    },
}
export const tags = ['autodocs'];
