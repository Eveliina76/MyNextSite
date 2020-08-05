import styled, { css, ThemeProvider } from 'styled-components'
import { myTheme } from '../styles/GlobalStyle'
import { breakpoint } from 'styled-components-breakpoint'

const ImageCardWrapper = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 60% 20% 2% 17%;
  border-radius: 5px 5px;
  background: ${(props) => props.theme.colorPlatinum};
  height: auto;
  text-align: center;
  box-shadow: -11.31px 11.31px 25px 0px rgba(138, 131, 124, 0.23);
	${breakpoint('md')`
		width: 330px;
    top: 80px;
    right: -60px;
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
	margin: 40px 0 0 0;
`

const StyledText = styled.div`
	h2 {
		font-family: ${(props) => props.theme.titleFont};
		font-size: ${(props) => props.theme.h2FontSize};
		color: ${(props) => props.theme.colorBlack};
		line-height: 1.2em;
		margin: 10px 0px 15px 0;
	}
	p {
		font-family: ${(props) => props.theme.font};
		font-size: ${(props) => props.theme.textFontSize};
		color: ${(props) => props.theme.colorBlack};
		letter-spacing: 0.15em;
		margin: 0px 0px 40px 0px;
	}
`
const StyledBorder = styled.div`
	position: relative;
	left: 150px;
	border-top: 2px solid ${(props) => props.theme.colorChoco};
	width: 60px;
	height: 5px;
	margin: 0px 0px 25px 0px;
`

const ImageCard = () => {
	return (
		<ThemeProvider theme={myTheme}>
			<ImageCardWrapper>
				<StyledText>
					<StyledImage src="/circleImg.png" alt="my image" />
					<h2>
						Eveliina <br /> Champagne
					</h2>
					<StyledBorder />
					<p>WEB DEVELOPER</p>
				</StyledText>
			</ImageCardWrapper>
		</ThemeProvider>
	)
}

export default ImageCard
