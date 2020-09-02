import styled, { ThemeProvider } from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import { Heading } from '@tenon-io/tenon-ui';
import { myTheme } from '../styles/GlobalStyle';

const EducationCardWrapper = styled.div`
  margin-bottom: 15px;
`;

const StyledEducationCard = styled.div`
  display: grid;
  height: auto;
  width: auto;
  background-color: ${(props) => props.theme.colorWhite};
  border-radius: 0;
  margin: 0 auto;
  padding: 10px 15px 15px 15px;
  box-shadow: -11.31px 11.31px 25px 0px rgba(138, 131, 124, 0.23);
  h3 {
    align-self: center;
    font-family: ${(props) => props.theme.font};
    font-size: ${(props) => props.theme.h3FontSize};
    font-weight: bold;
    color: ${(props) => props.theme.colorCerise};
    margin: 10px 0;
  }
  h4 {
    align-self: center;
    font-family: ${(props) => props.theme.fontSemiBold};
    font-size: ${(props) => props.theme.h4FontSize};
    color: ${(props) => props.theme.colorSpaceCadet};
    margin: 15px 0;
  }
  h5 {
    align-self: center;
    font-family: ${(props) => props.theme.font};
    font-size: ${(props) => props.theme.h5FontSize};
    color: ${(props) => props.theme.colorSpaceCadet};
    margin: 10px 0;
  }
  p {
    align-self: start;
    font-family: ${(props) => props.theme.font};
    font-size: ${(props) => props.theme.textFontSize};
    color: ${(props) => props.theme.colorSpaceCadet};
    margin: 0;
  }
  ${breakpoint('md')`
  grid-template-columns: 100%;
  grid-template-rows: 15% 20% 15% 50%;
  width: 650px;
  border-radius: 10px 10px;
  padding: 40px;
  h3 {
    grid-row-start: 1;
	}
  h4 {
    grid-row-start: 2;
    margin: 10px 0;
	}
  h5 {
    grid-row-start: 3;
    margin: 10px 0;
  }
  p {
    grid-row-start: 4;
    grid-column-start: 1;
    margin: 10px 0;
	}
  `}
  ${breakpoint('lg')`
  grid-template-columns: 40% 60%;
  grid-template-rows: 15% 20% 25% 40%;
  width: 800px;
  h3 {
    grid-column-start: 1;
    grid-row-start: 1;
    margin: 0;
  }
  h4 {
    grid-column-start: 1;
    grid-row-start: 2;
  }
  h5 {
    grid-column-start: 1;
    grid-row-start: 3;
    margin: 5px 0;
  }
  p {
    grid-column-start: 2;
    grid-row-start: 1;
  }
  `}
  ${breakpoint('xl')`
  h3 {
    grid-column-start: 1;
    grid-row-start: 1;
    margin: 10px 0;
  }
  h4 {
    grid-column-start: 1;
    grid-row-start: 2;
    margin: 10px 0;
  }
  h5 {
    grid-column-start: 1;
    grid-row-start: 3;
    margin: 10px 0;
  }
  p {
    grid-column-start: 2;
    grid-row-start: 2;
    margin: 0;
  }
  `}
`;

const EducationCard = (education) => {
  return (
    <ThemeProvider theme={myTheme}>
      <EducationCardWrapper>
        <StyledEducationCard>
          <Heading.LevelBoundary levelOverride={3}>
            <Heading.H>{education.year}</Heading.H>
            <Heading.LevelBoundary>
              <Heading.H>{education.title}</Heading.H>
              <Heading.LevelBoundary>
                <Heading.H>{education.school}</Heading.H>
                <p>{education.description}</p>
              </Heading.LevelBoundary>
            </Heading.LevelBoundary>
          </Heading.LevelBoundary>
        </StyledEducationCard>
      </EducationCardWrapper>
    </ThemeProvider>
  );
};

export default EducationCard;
