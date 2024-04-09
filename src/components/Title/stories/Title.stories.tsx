import Title from '../Title';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Title> = {
  title: 'Components/Title',
  component: Title,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Title>;

export const TitleStory: Story = {
  name: 'Default',
  args: {
    text: 'Title',
  },
};
