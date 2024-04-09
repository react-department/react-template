import ErrorMessage from '../ErrorMessage';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ErrorMessage> = {
  title: 'Components/ErrorMessage',
  component: ErrorMessage,
  tags: ['autodocs'],
  argTypes: {
    message: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof ErrorMessage>;

export const ErrorMessageStory: Story = {
  name: 'Default',
  args: {
    message: 'Error message',
  },
};
