import Loader from '../Loader';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Loader> = {
  title: 'Components/Loader',
  component: Loader,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Loader>;

export const LoaderStory: Story = {
  name: 'Default',
};
