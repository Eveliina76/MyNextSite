import styled, { css, ThemeProvider } from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { myTheme } from '../styles/GlobalStyle'
import NavBar from '../components/NavBar'
import PageTitle from '../components/PageTitle'

const HeaderWrapper = styled.div`
	display: grid;
  grid-template-columns: 50% 50%;
	background: ${(props) => props.theme.colorWhite};
	height: 100px;
	padding: 25px 15px;
	margin: 0;
	/* ${breakpoint('md')`
    grid-template-columns: 60% 40%;
  `}
	${breakpoint('xl')`
    
  `} */
`

const Header = () => {
	return (
		<ThemeProvider theme={myTheme}>
			<HeaderWrapper>
				<PageTitle />
				<NavBar />
			</HeaderWrapper>
		</ThemeProvider>
	)
}

export default Header
