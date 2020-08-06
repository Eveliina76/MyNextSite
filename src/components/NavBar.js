import { myTheme } from '../styles/GlobalStyle'
import { breakpoint } from 'styled-components-breakpoint'
import Link from 'next/link'
import styled, { css, ThemeProvider } from 'styled-components'

const StyledNavBar = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`
const NavList = styled.ul`
	display: none;
	font-family: ${(props) => props.theme.font};
	list-style-type: none;
	${breakpoint('sm')`
    display: flex;
    flex-flow: row nowrap;
    margin-top: 1rem;
  `}
`
const NavItem = styled.li`
	padding-top: 10px;
`

const StyledLink = styled.a`
	color: ${(props) => props.theme.colorBlack};
	text-decoration: none;
	font-size: ${(props) => props.theme.h3FontSize};
	:hover {
		color: ${(props) => props.theme.colorVermilion};
		text-decoration: underline;
	}
	${breakpoint('sm')`
    font-size: ${(props) => props.theme.h4FontSize};
    margin-right: 2rem;
  `}
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
