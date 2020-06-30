import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import Layout from './components/Layout';

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
        <Layout>
          APP
        </Layout>
      </ThemeProvider>
    );
  }
}

export default App;
