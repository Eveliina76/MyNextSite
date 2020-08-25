import styled, { css, ThemeProvider } from 'styled-components'
import { myTheme } from '../styles/GlobalStyle'
import SocialMedia from '../components/SocialMedia'
import { breakpoint } from 'styled-components-breakpoint'

const FooterWrapper = styled.div`
	display: grid;
	grid-template-columns: 100%;
	grid-template-rows: 33% 33% 33%;
	position: fixed;
	bottom: 0;
	height: 6.25rem;
	width: 100%;
	align-items: center;
	background: ${(props) => props.theme.colorWhite};
	padding: 0.125rem 2.5rem;
	margin: 0;
	${breakpoint('md')`
  display: grid;
	grid-template-columns: 50% 50%;
	grid-template-rows: 60% 40%;
  `}
`
const StyledCopyright = styled.div`
	font-family: ${(props) => props.theme.font};
	font-size: ${(props) => props.theme.h5FontSize};
	color: ${(props) => props.theme.colorSpaceCadet};
	text-align: center;
	align-self: center;
	p {
		margin: 0.625rem 0 0.625rem 0;
	}
	${breakpoint('md')`
    align-self: end;
    text-align: left;
    p {
      margin: 0.875rem 0 0 0;
    }
  `}
`
const CreditLink = styled.a`
	grid-column-start: 1;
	grid-row-start: 3;
	align-self: flex-start;
	font-family: ${(props) => props.theme.font};
	font-size: ${(props) => props.theme.h6FontSize};
	color: ${(props) => props.theme.colorSpaceCadet};
	text-align: center;
	text-decoration: none;
	${breakpoint('md')`
  grid-column-start: 2;
  grid-row-start: 2;
  text-align: right;
  font-size: ${(props) => props.theme.h5FontSize};
  `}
`

const Footer = () => {
	return (
		<ThemeProvider theme={myTheme}>
			<FooterWrapper>
				<StyledCopyright>
					<p>© Eveliina Champagne 2020</p>
				</StyledCopyright>
				<SocialMedia />
				<CreditLink href="https://www.iconfinder.com/" target="blank">
					Icons by Creative Hive on ICONFINDER
				</CreditLink>
			</FooterWrapper>
		</ThemeProvider>
	)
}

export default Footer
