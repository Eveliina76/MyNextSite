import styled, { css, ThemeProvider } from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { myTheme } from '../styles/GlobalStyle'
import ImageCard from '../components/ImageCard'

const ContentImageWrapper = styled.div`
	position: relative;
	background: ${(props) => props.theme.colorChoco};
	border-radius: 0 5px 5px 0;
	/* ${breakpoint('md')`
    width: auto;
    height: 390px;
  `}
	${breakpoint('md')`
    height: auto;
  `} */
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
