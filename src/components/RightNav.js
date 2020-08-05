import { myTheme } from '../styles/GlobalStyle'
import styled, { css, ThemeProvider } from 'styled-components'
import Link from 'next/link'
import { breakpoint } from 'styled-components-breakpoint'

const StyledRightNav = styled.ul`
	display: flex;
	flex-flow: row nowrap;
	background-color: ${(props) => props.theme.colorPlatinum};
	font-family: ${(props) => props.theme.font};
	list-style-type: none;
	${breakpoint('xs')`
    flex-flow: column nowrap;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 20vh;
    width: 160px;
    border-radius: 0 5px 5px 0;
    box-shadow: 0px 12px 9px -4px rgba(138, 131, 124, 0.23);
    margin-top:0;
    padding: 50px 0 0 0;
    transition: transform 0.3s ease-in-out;
  `}
`
const NavItem = styled.li`
	width: 100%;
	padding: 10px;
	text-align: center;
	:hover {
		background-color: ${(props) => props.theme.colorVermilion};
	}
`
const StyledLink = styled.a`
	color: ${(props) => props.theme.colorBlack};
	text-decoration: none;
	font-size: ${(props) => props.theme.h3FontSize};
	:hover {
		color: ${(props) => props.theme.colorWhite};
	}
`

const RightNav = ({ open }) => {
	return (
		<ThemeProvider theme={myTheme}>
			<StyledRightNav open={open}>
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
			</StyledRightNav>
		</ThemeProvider>
	)
}

export default RightNav
