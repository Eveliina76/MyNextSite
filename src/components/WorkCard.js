import styled, { ThemeProvider } from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import { Heading } from '@tenon-io/tenon-ui';
import { myTheme } from '../styles/GlobalStyle';

const WorkCardWrapper = styled.div`
  margin-bottom: 0.9375rem;
`;

const StyledWorkCard = styled.div`
  display: grid;
  height: auto;
  width: auto;
  padding: 0.625rem 0.9375rem;
  background-color: ${(props) => props.theme.colorWhite};
  border-radius: 0;
  margin: 0 auto;

  box-shadow: -11.31px 11.31px 25px 0px rgba(138, 131, 124, 0.23);
  h3 {
    align-self: center;
    font-family: ${(props) => props.theme.font};
    font-size: ${(props) => props.theme.h3FontSize};
    font-weight: bold;
    color: ${(props) => props.theme.colorCerise};
    margin: 0.625rem 0;
  }
  h4 {
    align-self: center;
    font-family: ${(props) => props.theme.fontSemiBold};
    font-size: ${(props) => props.theme.h4FontSize};
    color: ${(props) => props.theme.colorSpaceCadet};
    margin: 0 0 0.625rem 0;
  }
  h5 {
    align-self: center;
    font-family: ${(props) => props.theme.font};
    font-size: ${(props) => props.theme.h5FontSize};
    color: ${(props) => props.theme.colorSpaceCadet};
    margin: 0;
  }
  p {
    align-self: start;
    font-family: ${(props) => props.theme.font};
    font-size: ${(props) => props.theme.textFontSize};
    color: ${(props) => props.theme.colorSpaceCadet};
    margin: 0.625rem 0;
  }
  ${breakpoint('md')`
  grid-template-columns: 100%;
  grid-template-rows: 15% 10% 10% 65%;
  width: 40.625rem;
  border-radius: 0.625rem 0.625rem;
  padding: 2.5rem;
  h3 {
    grid-row-start: 1;
    
	}
  h4 {
    grid-row-start: 2;
    margin: 1.25rem 0;
	}
  h5 {
    grid-row-start: 3;
    margin: 0.625rem 0;
  }
  p {
    grid-row-start: 4;
    grid-column-start: 1;
    margin: 1.25rem 0;
	}
  `}
  ${breakpoint('lg')`
  grid-template-columns: 40% 60%;
  grid-template-rows: 20% 15% 15% 40%;
  width: 50rem;
  h3 {
    grid-column-start: 1;
    grid-row-start: 1;
    margin: 0;
  }
  h4 {
    grid-column-start: 1;
    grid-row-start: 2;
    margin: 0;
  }
  h5 {
    grid-column-start: 1;
    grid-row-start: 3;
    margin: 0;
  }
  p {
    grid-column-start: 2;
    grid-row-start: 2;
    margin: 0;
  }
  `}
  ${breakpoint('xl')`
  grid-template-columns: 40% 60%;
  grid-template-rows: 20% 15% 15% 40%;
  h3 {
    grid-column-start: 1;
    grid-row-start: 1;
    margin: 0;
  }
  h4 {
    grid-column-start: 1;
    grid-row-start: 2;
    margin: 0;
  }
  h5 {
    grid-column-start: 1;
    grid-row-start: 3;
    margin: 0;
  }
  p {
    grid-column-start: 2;
    grid-row-start: 2;
    margin: 0;
  }
  `}
`;

const WorkCard = (work) => {
  return (
    <ThemeProvider theme={myTheme}>
      <WorkCardWrapper>
        <StyledWorkCard>
          <Heading.LevelBoundary levelOverride={3}>
            <Heading.H>{work.years}</Heading.H>
            <Heading.LevelBoundary>
              <Heading.H>{work.title}</Heading.H>
              <Heading.LevelBoundary>
                <Heading.H>{work.employer}</Heading.H>
                <p>{work.description}</p>
              </Heading.LevelBoundary>
            </Heading.LevelBoundary>
          </Heading.LevelBoundary>
        </StyledWorkCard>
      </WorkCardWrapper>
    </ThemeProvider>
  );
};

export default WorkCard;
