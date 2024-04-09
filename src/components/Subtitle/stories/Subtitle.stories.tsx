import Subtitle from '../Subtitle';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Subtitle> = {
  title: 'Components/Subtitle',
  component: Subtitle,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Subtitle>;

export const SubtitleStory: Story = {
  name: 'Default',
  args: {
    text: 'Subtitle',
  },
};
