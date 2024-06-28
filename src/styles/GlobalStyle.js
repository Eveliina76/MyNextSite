import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html, body, #__next {
    background-color: ${(props) => props.theme.colorEggShell};
    font-weight: normal;
    min-height: 100vh;
    margin: 0;
    padding: 0;
  }
`;
export const myTheme = {
  // Colors
  colorAliceBlue: '#E7E9EF',
  colorBlack: '#000',
  colorCerise: '#D93058',
  colorChilli: '#E85A4F',
  colorEggShell: '#EAE7DC',
  colorDarkTaupeGray: '#686764',
  colorDarkVanilla: '#D8C3A5',
  colorJellyBeanRed: '#E98074',
  colorPlatinum: '#ECE9EB',
  colorTaupeGray: '#8E8D8A',
  colorWhite: '#fff',
  colorHeliotropeGray: '#9A8C98',
  colorIndependence: '#44475F',
  colorSpaceCadet: '#22223B',

  // FontFamily
  titleFont: 'Sniglet, sans-serif',
  font: 'Cabin, sans-serif',
  fontSemiBold: 'CabinSemiBold, sans-serif',
  // titleFont: 'Poppins, sans-serif',
  // font: 'Nunito, sans-serif',
  // fontSemiBold: 'Nunito-Semi-bold, sans-serif',

  // FontSizes
  h1FontSize: '3.75rem', // 70px
  h2FontSize: '1.5625rem', // 25px
  h3FontSize: '1.25rem', // 20px
  h4FontSize: '1rem', // 16px
  h5FontSize: '0.875rem', // 14px
  h6FontSize: '0.75rem', // 12px
  textFontSize: '1.0625rem', // 17px

  // BreakPoints
  breakpoints: {
    xs: 320,
    sm: 480,
    md: 768,
    lg: 1024,
    xl: 1200
  }
};
