import { myTheme } from '../styles/GlobalStyle'
import styled, { css, ThemeProvider } from 'styled-components'
import { breakpoint } from 'styled-components-breakpoint'

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;
	background-color: ${(props) => props.theme.colorindependece};
	color: ${(props) => props.theme.colorWhite};
	padding: 1rem;
	h1 {
		font-family: ${(props) => props.theme.titleFont};
		font-size: ${(props) => props.theme.h2FontSize};
	}
	p {
		font-family: ${(props) => props.theme.font};
		font-size: ${(props) => props.theme.textFontSize};
		margin-bottom: 0.1rem;
	}
  ${breakpoint('md')`
    margin-top: 2rem;
    overflow-y: scroll;
    ::-webkit-scrollbar {
		  width: 5px;
	  }
	  ::-webkit-scrollbar-thumb {
		  background-color: ${(props) => props.theme.colorindependece};
    }
  `}
  ${breakpoint('lg')`
    margin-top: 4rem;
    height: auto;
  `}
	${breakpoint('xl')`
		display: flex;
    flex-direction: column;
    height: 600px;
    margin-top: 2rem;
    overflow-y: scroll;
    ::-webkit-scrollbar {
		width: 5px;
	  }
	  ::-webkit-scrollbar-thumb {
		  background-color: ${(props) => props.theme.colorindependece};
    }
  `}
`

const AboutText = () => {
	return (
		<ThemeProvider theme={myTheme}>
			<TextWrapper>
				<h1>Title text comes here</h1>
				<p>
					Doggo ipsum long water shoob corgo borkdrive much ruin diet, wow such
					tempt. Very hand that feed shibe long bois pats borkdrive extremely
					cuuuuuute adorable doggo, heckin good boys and girls h*ck long water
					shoob. Floofs pupper doge heckin long doggo big ol, doge much ruin
					diet doing me a frighten he made many woofs. Length boy fluffer smol
					borking doggo with a long snoot for pats doggorino extremely
					cuuuuuute, thicc adorable doggo. much ruin diet length boy.
				</p>
				<p>
					Doggo ipsum long water shoob corgo borkdrive much ruin diet, wow such
					tempt. Very hand that feed shibe long bois pats borkdrive extremely
					cuuuuuute adorable doggo, heckin good boys and girls h*ck long water
					shoob. Floofs pupper doge heckin long doggo big ol, doge much ruin
					diet doing me a frighten he made many woofs. Length boy fluffer smol
					borking doggo with a long snoot for pats doggorino extremely
					cuuuuuute, thicc adorable doggo. much ruin diet length boy.
				</p>
				<p>
					Doggo ipsum long water shoob corgo borkdrive much ruin diet, wow such
					tempt. Very hand that feed shibe long bois pats borkdrive extremely
					cuuuuuute adorable doggo, heckin good boys and girls h*ck long water
					shoob. Floofs pupper doge heckin long doggo big ol, doge much ruin
					diet doing me a frighten he made many woofs. Length boy fluffer smol
					borking doggo with a long snoot for pats doggorino extremely
					cuuuuuute, thicc adorable doggo. much ruin diet length boy.
				</p>
				<p>
					Doggo ipsum long water shoob corgo borkdrive much ruin diet, wow such
					tempt. Very hand that feed shibe long bois pats borkdrive extremely
					cuuuuuute adorable doggo, heckin good boys and girls h*ck long water
					shoob. Floofs pupper doge heckin long doggo big ol, doge much ruin
					diet doing me a frighten he made many woofs. Length boy fluffer smol
					borking doggo with a long snoot for pats doggorino extremely
					cuuuuuute, thicc adorable doggo. much ruin diet length boy.
				</p>
			</TextWrapper>
		</ThemeProvider>
	)
}

export default AboutText
