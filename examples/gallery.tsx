import type { Meta, StoryObj } from '@storybook/react'
import { Controller } from './Controller'

export const GalleryMeta: Meta<typeof Controller> = {
    title: 'Gallery',
    component: Controller,
    parameters: { controls: { include: [] } },
}

export type GalleryStory = StoryObj<typeof Controller>
