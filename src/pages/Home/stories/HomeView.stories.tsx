import HomeView from '../HomeView';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof HomeView> = {
  title: 'Pages/Home/HomeView',
  component: HomeView,
  tags: ['autodocs'],
  parameters: {
    mockData: [
      {
        url: `${process.env.REACT_APP_API_JOKES}/random`,
        method: 'GET',
        status: 200,
        response: {
          value: 'Mocked joke!',
        },
        delay: 500,
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof HomeView>;

export const HomeViewStory: Story = {
  name: 'Default',
};
