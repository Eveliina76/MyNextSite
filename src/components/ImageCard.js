import styled, { css, ThemeProvider } from 'styled-components'
import { myTheme } from '../styles/GlobalStyle'
import { breakpoint } from 'styled-components-breakpoint'

const ImageCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 60% 20% 20%;
  border-radius: 0;
  background: ${(props) => props.theme.colorAliceBlue};
	width: 16.875rem;
  height: 17.5rem;
  text-align: center;
  box-shadow: -5px 9px 11px -5px rgba(138, 131, 124, 0.23);
	margin: 1.25rem auto;
	${breakpoint('md')`
		position: absolute;
		grid-template-rows: 60% 20% 2% 17%;
		border-radius: 0.3125rem 0.3125rem;
		width: 20.625rem;
		height: auto;
    top: 5rem;
		right: -3.75rem;
		box-shadow: -11.31px 11.31px 25px 0px rgba(138, 131, 124, 0.23);
  `}
  ${breakpoint('lg')`
    top: 9.375rem;
		right: -3.125rem;
		width: 23.4375rem;
		height: 31.25rem;
  `}
  ${breakpoint('xl')`
		top: 5.625rem;
		right: -3.75rem;
		height: auto;
  `}
`

const StyledImage = styled.img`
	height: 9.375rem;
	margin: 0 auto;
	padding: 1.25rem 0 0 0;
	${breakpoint('md')`
	height: auto;
	padding: 1.875rem 0;
  `}
`

const StyledHeading = styled.div`
	font-family: ${(props) => props.theme.titleFont};
	font-size: ${(props) => props.theme.h3FontSize};
	color: ${(props) => props.theme.colorSpaceCadet};
	line-height: 1.2em;
	margin: 0.3125rem 0 0 0;
	${breakpoint('md')`
		margin: 0.625rem 0 0.9375rem 0;
	`}
	${breakpoint('lg')`
		font-size: ${(props) => props.theme.h2FontSize};
		margin: 0.9375rem 0 1.25rem 0;
	`}
`

const StyledBorder = styled.div`
	display: none;
	position: relative;
	border-top: 0.125rem solid ${(props) => props.theme.colorIndependence};
	height: 0.3125rem;
	width: 3.75rem;
	margin: 0;
	${breakpoint('md')`
		display: block;
		position: relative;
		left: 8.125rem;
		margin: 0 0 0.625rem 0;
  `}
	${breakpoint('lg')`
		left: 9.375rem;
		margin: 0;
  `}
`
const StyledText = styled.div`
	font-family: ${(props) => props.theme.font};
	font-size: ${(props) => props.theme.h5FontSize};
	color: ${(props) => props.theme.colorSpaceCadet};
	letter-spacing: 0.15em;
	margin: 0;
	padding: 0.625rem 0 0 0;
	${breakpoint('md')`
		font-size: ${(props) => props.theme.textFontSize};
		margin: 1.25rem 0 2.5rem 0;
		padding: 0;
  `}
	${breakpoint('lg')`
		font-size: ${(props) => props.theme.h4FontSize};
	`}
`

const ImageCard = () => {
	return (
		<ThemeProvider theme={myTheme}>
			<ImageCardWrapper>
				<StyledImage src="/circleImg.png" alt="my image" />
				<StyledHeading>
					Eveliina <br /> Champagne
				</StyledHeading>
				<StyledBorder />
				<StyledText>WEB DEVELOPER</StyledText>
			</ImageCardWrapper>
		</ThemeProvider>
	)
}

export default ImageCard
