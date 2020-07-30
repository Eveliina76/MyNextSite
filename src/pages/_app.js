import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import { myTheme } from '../styles/GlobalStyle'

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props
		return (
			<ThemeProvider theme={myTheme}>
				<Component {...pageProps} />
			</ThemeProvider>
		)
	}
}
