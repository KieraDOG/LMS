import React from 'react';
import { ThemeProvider as SSThemeProvider, ThemeProvider } from 'styled-components';
import Layout from './components/Layout';
import theme, { ssTheme } from './theme';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      authenticated: null,
    };
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <SSThemeProvider theme={ssTheme}>
          <Layout>
            APP
          </Layout>
        </SSThemeProvider>
      </ThemeProvider>
    );
  }
}

export default App;
