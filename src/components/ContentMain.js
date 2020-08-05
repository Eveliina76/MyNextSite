import styled, { css, ThemeProvider } from 'styled-components'
import { breakpoint } from 'styled-components-breakpoint'
import { myTheme } from '../styles/GlobalStyle'

import ContentText from '../components/ContentText'
import ContentImage from '../components/ContentImage'

const ContentMainWrapper = styled.div`
	display: grid;
	grid-template-columns: 100%;
	min-height: -webkit-fill-available;
	overflow: auto;
	background: ${(props) => props.theme.colorWhite};
	${breakpoint('md')`
		min-height: calc(100vh - 200px);
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
