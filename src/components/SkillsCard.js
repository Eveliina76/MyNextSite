import { myTheme } from '../styles/GlobalStyle'
import styled, { ThemeProvider } from 'styled-components'
import { breakpoint } from 'styled-components-breakpoint'
import { Heading } from '@tenon-io/tenon-ui'

const SkillsCardWrapper = styled.div`
	margin: 1.875rem 0;
`
const StyledImage = styled.img`
	height: 0.9375rem;
	margin-top: 0.6875rem;
	padding-right: 0.3125rem;
`

const StyledSkillsCard = styled.div`
	height: auto;
	background-color: ${(props) => props.theme.colorWhite};
	border-radius: 0;
	height: auto;
	width: auto;
	padding: 0.625rem;
	margin: 0 auto;
	box-shadow: -11.31px 11.31px 25px 0px rgba(138, 131, 124, 0.23);
	h3 {
		font-family: ${(props) => props.theme.font};
		font-size: ${(props) => props.theme.h3FontSize};
		font-weight: bold;
		color: ${(props) => props.theme.colorCerise};
		margin: 0.625rem 0;
	}
	p {
		font-family: ${(props) => props.theme.font};
		font-size: ${(props) => props.theme.h4FontSize};
		color: ${(props) => props.theme.colorSpaceCadet};
		margin: 0.625rem 0;
	}
	${breakpoint('md')`
  width: 40.625rem;
  border-radius: 0.625rem 0.625rem;
  `}
	${breakpoint('lg')`
    width: 50rem;
  `}
`

const SkillsList = styled.ul`
	display: grid;
	grid-template-columns: 50% 50%;
	grid-template-rows: 20% 20% 20% 20% 20%;
	font-family: ${(props) => props.theme.font};
	list-style-type: none;
	margin-top: 0.5rem;
	padding-left: 0.625rem;
	${breakpoint('md')`
  padding-left: 2.5rem;
  `}
`
const LanguageList = styled.ul`
	display: grid;
	grid-template-columns: 50% 50%;
	grid-template-rows: 50% 50%;
	font-family: ${(props) => props.theme.font};
	list-style-type: none;
	margin-top: 0.5rem;
	padding-left: 0.625rem;
	${breakpoint('md')`
  padding-left: 2.5rem;
  `}
`

const SkillsItem = styled.li`
	display: flex;
`

const SkillsCard = () => {
	return (
		<ThemeProvider theme={myTheme}>
			<SkillsCardWrapper>
				<StyledSkillsCard>
					<Heading.LevelBoundary levelOverride={3}>
						<Heading.H>Skills</Heading.H>
						<SkillsList>
							<SkillsItem>
								<StyledImage src="/dot.svg" />
								<p>HTML, CSS, React</p>
							</SkillsItem>
							<SkillsItem>
								<StyledImage src="/dot.svg" />
								<p>Scrum</p>
							</SkillsItem>
							<SkillsItem>
								<StyledImage src="/dot.svg" />
								<p>Problem Solving</p>
							</SkillsItem>
							<SkillsItem>
								<StyledImage src="/dot.svg" />
								<p>Organization and planning</p>
							</SkillsItem>
							<SkillsItem>
								<StyledImage src="/dot.svg" />
								<p>Empathy and Humor</p>
							</SkillsItem>
							<SkillsItem>
								<StyledImage src="/dot.svg" />
								<p>Collaboration and Team Work</p>
							</SkillsItem>
							<SkillsItem>
								<StyledImage src="/dot.svg" />
								<p>Motivation to learn</p>
							</SkillsItem>
							<SkillsItem>
								<StyledImage src="/dot.svg" />
								<p>Verbal and Written Communication</p>
							</SkillsItem>
						</SkillsList>
					</Heading.LevelBoundary>
					<Heading.LevelBoundary levelOverride={3}>
						<Heading.H>Languages</Heading.H>
						<LanguageList>
							<SkillsItem>
								<StyledImage src="/dot.svg" />
								<p>Finnish</p>
							</SkillsItem>
							<SkillsItem>
								<StyledImage src="/dot.svg" />
								<p>English</p>
							</SkillsItem>
							<SkillsItem>
								<StyledImage src="/dot.svg" />
								<p>German</p>
							</SkillsItem>
						</LanguageList>
					</Heading.LevelBoundary>
				</StyledSkillsCard>
			</SkillsCardWrapper>
		</ThemeProvider>
	)
}

export default SkillsCard
