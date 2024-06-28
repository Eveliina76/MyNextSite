import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { myTheme } from '../styles/GlobalStyle';
import '../styles/fonts/fonts.css';
// import '@tenon-io/tenon-ui/lib/styles/tenon-ui.css'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={myTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
