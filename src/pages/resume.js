import styled, { ThemeProvider } from 'styled-components';
import { Heading } from '@tenon-io/tenon-ui';
import Layout from '../components/Layout';
import { myTheme } from '../styles/GlobalStyle';

import WorkCard from '../components/WorkCard';
import EducationCard from '../components/EducationCard';
import SkillsCard from '../components/SkillsCard';
import data from '../components/data/education.json';
import workData from '../components/data/work.json';

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
`;
const HeadingsWrapper = styled.div`
  display: grid;
  grid-template-columns: 100%;
  h2 {
    font-family: ${(props) => props.theme.titleFont};
    font-size: ${(props) => props.theme.h3FontSize};
    color: ${(props) => props.theme.colorWhite};
    text-align: center;
  }
`;

const ResumePage = () => {
  const educationComponents = data.map((education) => (
    <EducationCard
      key={education.id}
      year={education.year}
      title={education.title}
      school={education.school}
      description={education.description}
    />
  ));
  const workComponents = workData.map((work) => (
    <WorkCard
      key={work.id}
      years={work.years}
      title={work.title}
      employer={work.employer}
      description={work.description}
    />
  ));
  return (
    <ThemeProvider theme={myTheme}>
      <Layout>
        <ResumeWrapper>
          <Heading.H>Resume</Heading.H>
          <Heading.LevelBoundary>
            <HeadingsWrapper>
              <Heading.H>Work Experience</Heading.H>
            </HeadingsWrapper>
            {workComponents}
            <HeadingsWrapper>
              <Heading.H>Education</Heading.H>
            </HeadingsWrapper>
          </Heading.LevelBoundary>
          {educationComponents}
          <SkillsCard />
        </ResumeWrapper>
      </Layout>
    </ThemeProvider>
  );
};

export default ResumePage;
