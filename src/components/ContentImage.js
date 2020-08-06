import styled, { css, ThemeProvider } from 'styled-components'
import { breakpoint } from 'styled-components-breakpoint'
import { myTheme } from '../styles/GlobalStyle'
import ImageCard from '../components/ImageCard'

const ContentImageWrapper = styled.div`
	display: flex;
	background: ${(props) => props.theme.colorChoco};
	height: 320px;
	${breakpoint('md')`
		position: relative;
		width: auto;
		height: auto;
		border-radius: 0 5px 5px 0;
		margin: 0;
  `}
`

const ContentImage = () => {
	return (
		<ThemeProvider theme={myTheme}>
			<ContentImageWrapper>
				<ImageCard />
			</ContentImageWrapper>
		</ThemeProvider>
	)
}

export default ContentImage
