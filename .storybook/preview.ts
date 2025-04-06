import type { Preview } from '@storybook/react';
import { ThemeSwitch } from './themeSwitch';

import '../src/styles/tailwind.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export const decorators = [ThemeSwitch];
export default preview;
