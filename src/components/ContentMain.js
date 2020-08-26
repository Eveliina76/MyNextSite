import styled, { css, ThemeProvider } from 'styled-components'
import { breakpoint } from 'styled-components-breakpoint'
import { myTheme } from '../styles/GlobalStyle'

import ContentText from '../components/ContentText'
import ContentImage from '../components/ContentImage'

const ContentMainWrapper = styled.div`
	display: grid;
	grid-template-columns: 100%;
	height: calc(100vh - 12.5rem);
	overflow-y: scroll;
	background: ${(props) => props.theme.colorWhite};
	${breakpoint('md')`
		grid-template-columns: 40% 60%;
  `}
`

const ContentMain = () => {
	return (
		<ThemeProvider theme={myTheme}>
			<ContentMainWrapper>
				<ContentImage />
				<ContentText />
			</ContentMainWrapper>
		</ThemeProvider>
	)
}

export default ContentMain
