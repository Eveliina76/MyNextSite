import styled, { css, ThemeProvider } from 'styled-components'
import { myTheme } from '../styles/GlobalStyle'
import SocialMedia from '../components/SocialMedia'

const FooterWrapper = styled.div`
	display: grid;
	grid-template-columns: 50% 50%;
	grid-template-rows: 60% 40%;
	position: fixed;
	bottom: 0;
	height: 100px;
	width: 100%;
	align-items: center;
	background: ${(props) => props.theme.colorWhite};
	padding: 2px 40px;
	margin: 0;
`
const StyledCopyright = styled.div`
	font-family: ${(props) => props.theme.font};
	font-size: ${(props) => props.theme.h5FontSize};
	color: ${(props) => props.theme.colorBlack};
	align-self: end;
	p {
		margin: 14px 0 0 0;
	}
`
const CreditLink = styled.a`
	grid-column-start: 2;
	grid-row-start: 2;
	align-self: flex-start;
	font-family: ${(props) => props.theme.font};
	font-size: ${(props) => props.theme.h5FontSize};
	color: ${(props) => props.theme.colorBlack};
	text-align: right;
	text-decoration: none;
`

const Footer = () => {
	return (
		<ThemeProvider theme={myTheme}>
			<FooterWrapper>
				<StyledCopyright>
					<p>© Eveliina Champagne 2020 * Created with Gatsby *</p>
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
