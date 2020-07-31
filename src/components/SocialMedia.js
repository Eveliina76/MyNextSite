import Link from 'next/link'
import styled, { css, ThemeProvider } from 'styled-components'
import { myTheme } from '../styles/GlobalStyle'

// import LinkedIn from '../images/logoLinkedIn.svg'
// import Github from '../images/logoGithub.svg'
// import Instagram from '../images/logoInstagram.svg'
// import Blog from '../images/logoBlog.svg'

const SocialMediaWrapper = styled.div`
	display: flex;
	grid-column-start: 2;
	justify-content: flex-end;
	align-items: center;
	background: ${(props) => props.theme.colorWhite};
	margin-left: 1.5rem;
`

const StyledLink = styled.a``
const StyledImage = styled.img`
	height: 35px;
	margin: 0 10px;
`

const SocialMedia = () => {
	return (
		<ThemeProvider theme={myTheme}>
			<SocialMediaWrapper>
				<a
					href="https://www.linkedin.com/in/eveliina-champagne/"
					target="blank"
				>
					<StyledLink>
						<StyledImage src="/logoLinkedin.svg" alt="linkedin logo" />
					</StyledLink>
				</a>
				<a href="https://github.com/Eveliina76" target="blank">
					<StyledLink>
						<StyledImage src="/logoGithub.svg" alt="github logo" />
					</StyledLink>
				</a>
				<a href="https://www.instagram.com/eveliina76/" target="blank">
					<StyledLink>
						<StyledImage src="/logoInstagram.svg" alt="instagram logo" />
					</StyledLink>
				</a>
				<a href="https://trekkingtailwaggers.wordpress.com/" target="blank">
					<StyledLink>
						<StyledImage src="/logoBlog.svg" alt="wordpress logo" />
					</StyledLink>
				</a>
			</SocialMediaWrapper>
		</ThemeProvider>
	)
}

export default SocialMedia
