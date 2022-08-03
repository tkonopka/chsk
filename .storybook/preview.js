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
                ['Components', 'Hooks', 'Themes'],
                'Addons',
                ['Themes'],
            ],
        },
    },
}
