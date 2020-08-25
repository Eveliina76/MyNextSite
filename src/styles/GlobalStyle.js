import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  body {
    font-weight: normal;
    margin: 0;
  }
`
export const myTheme = {
	// Colors
	colorAliceBlue: '#E7E9EF',
	colorBlack: '#000',
	colorCerise: '#D93058',
	colorPlatinum: '#ECE9EB',
	colorWhite: '#fff',
	colorHeliotropeGray: '#9A8C98',
	colorIndependence: '#44475F',
	colorSpaceCadet: '#22223B',

	// FontFamily
	titleFont: 'Poppins, sans-serif',
	font: 'Nunito, sans-serif',
	fontSemiBold: 'Nunito-Semi-bold, sans-serif',

	// FontSizes
	h1FontSize: '3.75rem', //70px
	h2FontSize: '1.5625rem', //25px
	h3FontSize: '1.25rem', //20px
	h4FontSize: '1rem', //16px
	h5FontSize: '0.875rem', //14px
	h6FontSize: '0.75rem', //12px
	textFontSize: '1.0625rem', //17px

	//BreakPoints
	breakpoints: {
		xs: 320,
		sm: 480,
		md: 768,
		lg: 1024,
		xl: 1200,
	},
}
