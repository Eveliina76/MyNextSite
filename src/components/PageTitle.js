import styled, { css, ThemeProvider } from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { myTheme } from '../styles/GlobalStyle'

const PageTitleWrapper = styled.div`
  display: flex;
  background: ${(props) => props.theme.colorWhite};
  align-items: center;
  margin-left: 1rem;
  /* ${breakpoint('md')`
    
  `}
  ${breakpoint('lg')`
   
  `}
  ${breakpoint('xl')`
    ;
  `} */
`
const StyledName = styled.div`
	color: ${(props) => props.theme.colorBlack};
	font-family: ${(props) => props.theme.titleFont};
	font-size: ${(props) => props.theme.h3FontSize};
	text-align: right;
	padding-right: 10px;
	/* ${breakpoint('md')`
    font-size: ${(props) => props.theme.h3FontSize};
    padding-right: 5px;
  `}
	${breakpoint('lg')`
    font-size: ${(props) => props.theme.h3FontSize};
  `} */
`
const StyledOccupation = styled.div`
	color: ${(props) => props.theme.colorVermilion};
	font-family: ${(props) => props.theme.font};
	font-size: ${(props) => props.theme.textFontSize};
`

const PageTitle = () => {
	return (
		<ThemeProvider theme={myTheme}>
			<PageTitleWrapper>
				<StyledName>Eveliina Champagne</StyledName>
				<StyledOccupation> / WEB DEVELOPER</StyledOccupation>
			</PageTitleWrapper>
		</ThemeProvider>
	)
}

export default PageTitle
