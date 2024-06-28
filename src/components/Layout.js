import React from 'react';
import { GlobalStyle } from '../styles/GlobalStyle';

import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <GlobalStyle />
      <Footer />
    </>
  );
};

export default Layout;
