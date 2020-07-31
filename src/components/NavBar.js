import { myTheme } from '../styles/GlobalStyle'
import Link from 'next/link'
import styled, { css, ThemeProvider } from 'styled-components'

const StyledNavBar = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`
const NavList = styled.ul`
	display: flex;
	font-family: ${(props) => props.theme.font};
	list-style-type: none;
	margin-top: 1rem;
`
const NavItem = styled.li``

const StyledLink = styled.a`
	color: ${(props) => props.theme.colorBlack};
	text-decoration: none;
	font-size: ${(props) => props.theme.h4FontSize};
	margin-right: 2rem;
	:hover {
		color: ${(props) => props.theme.colorVermilion};
		text-decoration: underline;
	}
`

const NavBar = () => {
	return (
		<ThemeProvider theme={myTheme}>
			<StyledNavBar>
				<NavList>
					<NavItem>
						<Link href={'/'} passHref>
							<StyledLink> ABOUT ME </StyledLink>
						</Link>
					</NavItem>
					<NavItem>
						<Link href={'/resume'} passHref>
							<StyledLink>RESUME</StyledLink>
						</Link>
					</NavItem>
				</NavList>
			</StyledNavBar>
		</ThemeProvider>
	)
}

export default NavBar
