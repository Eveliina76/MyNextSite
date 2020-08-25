import { myTheme } from '../styles/GlobalStyle'
import styled, { ThemeProvider } from 'styled-components'
import { breakpoint } from 'styled-components-breakpoint'

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
	h4 {
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
					<h3>Skills</h3>
					<SkillsList>
						<SkillsItem>
							<StyledImage src="/dot.svg" />
							<h4>HTML, CSS, React</h4>
						</SkillsItem>
						<SkillsItem>
							<StyledImage src="/dot.svg" />
							<h4>Scrum</h4>
						</SkillsItem>
						<SkillsItem>
							<StyledImage src="/dot.svg" />
							<h4>Problem Solving</h4>
						</SkillsItem>
						<SkillsItem>
							<StyledImage src="/dot.svg" />
							<h4>Organization and planning</h4>
						</SkillsItem>
						<SkillsItem>
							<StyledImage src="/dot.svg" />
							<h4>Empathy and Humor</h4>
						</SkillsItem>
						<SkillsItem>
							<StyledImage src="/dot.svg" />
							<h4>Collaboration and Team Work</h4>
						</SkillsItem>
						<SkillsItem>
							<StyledImage src="/dot.svg" />
							<h4>Motivation to learn</h4>
						</SkillsItem>
						<SkillsItem>
							<StyledImage src="/dot.svg" />
							<h4>Verbal and Written Communication</h4>
						</SkillsItem>
					</SkillsList>
					<h3>Languages</h3>
					<LanguageList>
						<SkillsItem>
							<StyledImage src="/dot.svg" />
							<h4>Finnish</h4>
						</SkillsItem>
						<SkillsItem>
							<StyledImage src="/dot.svg" />
							<h4>English</h4>
						</SkillsItem>
						<SkillsItem>
							<StyledImage src="/dot.svg" />
							<h4>German</h4>
						</SkillsItem>
					</LanguageList>
				</StyledSkillsCard>
			</SkillsCardWrapper>
		</ThemeProvider>
	)
}

export default SkillsCard
