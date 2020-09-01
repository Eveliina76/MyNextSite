import React from 'react';
import { GlobalStyle } from '../styles/GlobalStyle';

import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <GlobalStyle />
      <Footer />
    </div>
  );
};

export default Layout;
