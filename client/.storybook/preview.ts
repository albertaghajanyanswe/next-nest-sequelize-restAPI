import { CssBaseline } from '@mui/material';
import CustomThemeProvider from '../src/configs/themes/CustomThemeProvider';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import light from '../src/configs/themes/light';
import dark from '../src/configs/themes/dark';
/* snipped for brevity */

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: light,
      dark: dark,
    },
    defaultTheme: 'light',
    Provider: CustomThemeProvider,
    GlobalStyles: CssBaseline,
  }),
];

// import type { Preview } from '@storybook/react';

// const preview: Preview = {
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//   },
// };

// export default preview;
