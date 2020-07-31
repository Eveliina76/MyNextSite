import styled, { css, ThemeProvider } from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { myTheme } from '../styles/GlobalStyle'

const ContentTextWrapper = styled.div`
  background: ${(props) => props.theme.colorWhite};
  color: ${(props) => props.theme.colorBlack};
  width: 650px;
  padding: 0px 0px 0px 150px;
  /* ${breakpoint('md')`
    width: 700px;
    padding: 0px 0px 0px 80px;
  `}
  ${breakpoint('lg')`
    width: 550px;
    padding: 90px 0px 0px 100px;
  `}
  ${breakpoint('xl')`
    
  `} */
  h1 {
    font-family: ${(props) => props.theme.titleFont};
    font-size: ${(props) => props.theme.h1FontSize};
    color: ${(props) => props.theme.colorVermilion};
    margin: 1rem 0;
  }
  p {
    font-family: ${(props) => props.theme.font};
    font-size: ${(props) => props.theme.textFontSize};
    margin: 5px 0;
  }
`

const ContentText = () => {
	return (
		<ThemeProvider theme={myTheme}>
			<ContentTextWrapper>
				<h1>Hello;</h1>
				<p>
					I’m Eveliina, a web designer. I’m currently based in Helsinki Finland.
					For the past +2 years I’ve been working for Wunder as a Front End
					Developer.
				</p>
				<p>
					I love to implement designs to the perfection. I pay a lot of
					attention to the details. I’m all about making things look good. I
					enjoy working with people and learning by doing.
				</p>
				<p>
					In my 40s I decided to pursue a new career as a developer. I had made
					a long career in IT industry working in various roles like
					Sustainability lead for a big international company.
				</p>
				<p>
					In 2016 I started my journey to become a developer. First I was
					learning by myself and doing various web courses. Later I went to get
					an actual degree. I found my current employer from an event arranged
					for women who are interested in coding and pursuing a career in IT.
				</p>
				<p>
					One year later I had the honour of sharing my story in the same event
					and encourage other women to pursue their dreams of becoming a coder.
					<br />
				</p>
				<p>
					I believe it is never too late to change ones life and start something
					new.
				</p>
			</ContentTextWrapper>
		</ThemeProvider>
	)
}

export default ContentText
