import Layout from '../components/Layout'
import { myTheme } from '../styles/GlobalStyle'
import styled, { css, ThemeProvider } from 'styled-components'

import WorkCard from '../components/WorkCard'
import EducationCard from '../components/EducationCard'
import SkillsCard from '../components/SkillsCard'

const ResumeWrapper = styled.div`
	height: calc(100vh - 12.5rem);
	overflow-y: scroll;
	background-color: ${(props) => props.theme.colorIndependence};
	padding-top: 0.5rem;
	padding-bottom: 1.25rem;
	h1 {
		font-family: ${(props) => props.theme.titleFont};
		font-size: ${(props) => props.theme.h2FontSize};
		color: ${(props) => props.theme.colorWhite};
		text-align: center;
		margin-bottom: 0.5rem;
	}
`
const HeadingsWrapper = styled.div`
	display: grid;
	grid-template-columns: 100%;
	h2 {
		font-family: ${(props) => props.theme.titleFont};
		font-size: ${(props) => props.theme.h3FontSize};
		color: ${(props) => props.theme.colorWhite};
		text-align: center;
	}
`

const ResumePage = () => {
	return (
		<ThemeProvider theme={myTheme}>
			<Layout>
				<ResumeWrapper>
					<h1>Resume</h1>
					<HeadingsWrapper>
						<h2>Work Experience</h2>
					</HeadingsWrapper>
					<WorkCard />
					<HeadingsWrapper>
						<h2>Education</h2>
					</HeadingsWrapper>
					<EducationCard />
					<SkillsCard />
				</ResumeWrapper>
			</Layout>
		</ThemeProvider>
	)
}

export default ResumePage
