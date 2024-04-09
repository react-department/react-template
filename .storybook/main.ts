import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['./**/*.mdx', './**/*.stories.@(js|jsx|ts|tsx)', '../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    '@storybook/addon-interactions',
    'storybook-addon-mock',
    '@storybook/addon-mdx-gfm',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  core: {
    disableTelemetry: true,
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
  staticDirs: ['../public'],
};
export default config;
