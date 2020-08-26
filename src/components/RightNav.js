import { myTheme } from '../styles/GlobalStyle'
import styled, { css, ThemeProvider } from 'styled-components'
import Link from 'next/link'
import { breakpoint } from 'styled-components-breakpoint'

const StyledRightNav = styled.ul`
	display: flex;
	flex-flow: row nowrap;
	background-color: ${(props) => props.theme.colorCerise};
	font-family: ${(props) => props.theme.font};
	list-style-type: none;
	${breakpoint('xs')`
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    border-radius: 0 0.3125rem 0.3125rem 0;
    box-shadow: 0px 12px 9px -4px rgba(138, 131, 124, 0.23);
    margin-top: 0;
    padding: 3.125rem 0 0 0;
    transition: transform 0.3s ease-in-out;
  `}
	${breakpoint('sm')`
    display: none;
  `}
`
const NavItem = styled.li`
	width: 100%;
	padding: 2.1875rem 1.875rem 1.875rem 1.875rem;
	text-align: center;
	:hover {
		background-color: ${(props) => props.theme.colorWhite};
		color: ${(props) => props.theme.colorSpaceCadet};
	}
`
const StyledLink = styled.a`
	color: ${(props) => props.theme.colorWhite};
	text-decoration: none;
	font-size: ${(props) => props.theme.h2FontSize};
	:hover {
		color: ${(props) => props.theme.colorSpaceCadet};
	}
	:focus {
		outline: none;
		color: ${(props) => props.theme.colorSpaceCadet};
		box-shadow: 0px 0px 0px 5px rgba(255, 255, 255, 1);
	}
`

const RightNav = ({ open }) => {
	return (
		<ThemeProvider theme={myTheme}>
			<StyledRightNav open={open}>
				<NavItem>
					<Link href={'/'} passHref>
						<StyledLink>HOME</StyledLink>
					</Link>
				</NavItem>
				<NavItem>
					<Link href={'/resume'} passHref>
						<StyledLink>RESUME</StyledLink>
					</Link>
				</NavItem>
				<NavItem>
					<Link href={'/about'} passHref>
						<StyledLink>ABOUT</StyledLink>
					</Link>
				</NavItem>
			</StyledRightNav>
		</ThemeProvider>
	)
}

export default RightNav
