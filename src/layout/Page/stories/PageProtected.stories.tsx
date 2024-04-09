import PageProtected from '../PageProtected';

import type { Meta, StoryObj } from '@storybook/react';
import type IPageProtected from '../interfaces/IPageProtected';

const meta: Meta<typeof PageProtected> = {
  title: 'Layout/PageProtected',
  component: PageProtected,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PageProtected>;

function PageProtectedComponent({ redirectUri }: IPageProtected) {
  return <PageProtected redirectUri={redirectUri} />;
}

export const PageProtectedStory: Story = {
  name: 'Default',
  render: (args) => <PageProtectedComponent {...args} />,
  args: {
    redirectUri: '/login',
  },
};
