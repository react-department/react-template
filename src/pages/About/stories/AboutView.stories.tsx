import AboutView from '../AboutView';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AboutView> = {
  title: 'Pages/About/AboutView',
  component: AboutView,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AboutView>;

export const AboutViewStory: Story = {
  name: 'Default',
};
