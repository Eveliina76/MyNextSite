import { myTheme } from '../styles/GlobalStyle'
import styled, { css, ThemeProvider } from 'styled-components'
import { breakpoint } from 'styled-components-breakpoint'
import { Heading } from '@tenon-io/tenon-ui'

const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;
	background-color: ${(props) => props.theme.colorindependece};
	color: ${(props) => props.theme.colorWhite};
	padding: 1.5rem;
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
    padding: 0 1.5rem 1rem 0;
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
    margin-top: 0;
    padding-top: 1.5rem;
    overflow-y: scroll;
    ::-webkit-scrollbar {
		width: 5px;
	  }
	  ::-webkit-scrollbar-thumb {
		  background-color: ${(props) => props.theme.colorIndependece};
    }
  `}
`
const StyledLink = styled.a`
	color: ${(props) => props.theme.colorWhite};
	font-family: ${(props) => props.theme.font};
	font-size: ${(props) => props.theme.textFontSize};
`

const AboutText = () => {
	return (
		<ThemeProvider theme={myTheme}>
			<TextWrapper>
				<Heading.H>This is how I became a developer in my 40’s</Heading.H>
				<p>
					My journey began already in 2015 when I was taking a year off from my
					previous role as a sustainability lead to recover from depression
					caused by burn out. I knew that I could not continue doing what I did.
					During my year off I traveled around Europe with my two dogs. You can
					read about the trip from my blog{' '}
					<a href="https://trekkingtailwaggers.wordpress.com/" target="blank">
						<StyledLink>Trekking Tail Waggers.</StyledLink>
					</a>
				</p>
				<p>
					Being a way from work and familiar surroundings helped me to take a
					step back and think what would be my next step in my work life. I knew
					from my personal experience and from media that coders were
					desperately needed and it let me thinking that maybe I could do that.
					With a little experience of writing html in the 90’s I started by
					taking courses online. It was very challenging but also interesting.
					After the year I had to return to my old job and after talking with my
					boss I realised that I was not getting any support from my employer to
					begin my journey as a developer. As the depression was again lifting
					its’ ugly head I had to make a decision to take study leave and to
					concentrate fully on becoming a developer. I started studies in the
					fall of 2017 in Helsinki Business School.
				</p>
				<p>
					In the beginning of 2018 I took apart in an event Mimmit koodaa
					(Ladies who code). As the name states it is an event for women
					interested in coding or working in the ICT industry. It was the very
					beginning of the series of events which is very popular. In that event
					I was inspired by the stories of amazing ladies and I also found my
					current employer Wunder.
				</p>
				<p>
					In the same spring I started as a trainee. With the support of my
					lovely colleagues and my employer Wunder and a lot of hard work I am
					today a junior web developer. The journey has not been easy, but it
					has been and is worth it.
				</p>

				<p>
					I shared my story in the second event of Mimmit koodaa, hoping to
					encourage other women to pursue their dream of working in the ICT
					industry. You can watch it in Mimmit koodaa{' '}
					<a
						href="https://tv.streamfabriken.com/mimmit-koodaa-syksy-2018-launch"
						target="blank"
					>
						<StyledLink>website.</StyledLink>
					</a>{' '}
					It is in Finnish and starts around 1:05:00. I also told my story in
					Fraktio’s{' '}
					<a href="https://www.youtube.com/watch?v=qB_cA363Ofg" target="blank">
						<StyledLink>Perjantai presis</StyledLink>
					</a>{' '}
					and in Duunitori{' '}
					<a
						href="https://duunitori.fi/tyoelama/mimmit-koodaa-eveliina-uratarina"
						target="blank"
					>
						<StyledLink>article.</StyledLink>
					</a>
				</p>
				<p>I believe it is never too late to start something new.</p>
			</TextWrapper>
		</ThemeProvider>
	)
}

export default AboutText
