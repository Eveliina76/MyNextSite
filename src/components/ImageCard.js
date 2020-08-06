import styled, { css, ThemeProvider } from 'styled-components'
import { myTheme } from '../styles/GlobalStyle'
import { breakpoint } from 'styled-components-breakpoint'

const ImageCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 60% 20% 20%;
  border-radius: 0;
  background: ${(props) => props.theme.colorPlatinum};
	width: 270px;
  height: 280px;
  text-align: center;
  box-shadow: -5px 9px 11px -5px rgba(138, 131, 124, 0.23);
	margin: 20px auto;
	${breakpoint('md')`
		position: absolute;
		grid-template-rows: 60% 20% 2% 17%;
		border-radius: 5px 5px;
		width: 330px;
		height: auto;
    top: 80px;
		right: -60px;
		box-shadow: -11.31px 11.31px 25px 0px rgba(138, 131, 124, 0.23);
  `}
  ${breakpoint('lg')`
    top: 150px;
		right: -50px;
		width: 375px;
		height: 500px;
  `}
  ${breakpoint('xl')`
		top: 90px;
		right: -60px;
		height: auto;
  `}
`

const StyledImage = styled.img`
	height: 150px;
	margin: 0 auto;
	padding: 20px 0 0 0;
	${breakpoint('md')`
	height: auto;
	padding: 30px 0;
  `}
`

const StyledHeading = styled.div`
	font-family: ${(props) => props.theme.titleFont};
	font-size: ${(props) => props.theme.h3FontSize};
	color: ${(props) => props.theme.colorBlack};
	line-height: 1.2em;
	margin: 5px 0 0 0;
	${breakpoint('md')`
		margin: 10px 0px 15px 0;
	`}
	${breakpoint('lg')`
		font-size: ${(props) => props.theme.h2FontSize};
		margin: 15px 0px 20px 0;
	`}
`

const StyledBorder = styled.div`
	display: none;
	position: relative;
	border-top: 2px solid ${(props) => props.theme.colorChoco};
	height: 5px;
	width: 60px;
	margin: 0;
	${breakpoint('md')`
		display: block;
		position: relative;
		left: 130px;
		margin: 0px 0px 10px 0px;
  `}
	${breakpoint('lg')`
		left: 150px;
		margin: 0px;
  `}
`
const StyledText = styled.div`
	font-family: ${(props) => props.theme.font};
	font-size: ${(props) => props.theme.h5FontSize};
	color: ${(props) => props.theme.colorBlack};
	letter-spacing: 0.15em;
	margin: 0;
	padding: 10px 0 0 0;
	${breakpoint('md')`
		font-size: ${(props) => props.theme.textFontSize};
		margin: 20px 0px 40px 0px;
		padding: 0;
  `}
	${breakpoint('lg')`
		font-size: ${(props) => props.theme.h4FontSize};
		margin: 20px 0px 40px 0px;
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
