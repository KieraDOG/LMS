import React from 'react';
import { 
  ThemeProvider as SSThemeProvider,
  ThemeProvider as SCThemeProvider,
} from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';
import Root from './routes/Root';
import scTheme, { ssTheme } from './theme';
import store from './store';
import { setInterceptors } from './apis/API';

setInterceptors(store);

const ThemeProvider = ({
  children,
}) => (
  <SCThemeProvider theme={scTheme}>
    <SSThemeProvider theme={ssTheme}>
      {children}
    </SSThemeProvider>
  </SCThemeProvider>
);

const App = () => (
  <ReduxProvider store={store}>
    <ThemeProvider>
      <Root />
    </ThemeProvider>
  </ReduxProvider>
);


export default App;
