import type { Preview } from '@storybook/react';
import componentDecorator from 'shared/config/storybook/componentDecorator';
import '../../src/app/styles/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  },
  decorators: [componentDecorator]
};

export default preview;
