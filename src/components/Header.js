import styled, { ThemeProvider } from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import { myTheme } from '../styles/GlobalStyle';
import NavBar from './NavBar';
import PageTitle from './PageTitle';
import Burger from './Burger';

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  background: ${(props) => props.theme.colorWhite};
  margin: 0;
  height: 60px;
  ${breakpoint('xs')`
    flex-direction: column;
    margin-left: 0;
    padding: 0;
  `}
  ${breakpoint('md')`
    grid-template-columns: 50% 50%;
    padding: 25px 15px;
    height: 100px;
  `}
`;

const Header = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <HeaderWrapper>
        <PageTitle />
        <NavBar />
        <Burger />
      </HeaderWrapper>
    </ThemeProvider>
  );
};

export default Header;
