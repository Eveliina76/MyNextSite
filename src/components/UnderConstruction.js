import React from 'react';

import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('j-lee-YTV-unsplash.jpg') no-repeat center center fixed;
  background-size: cover; /* Ensure the background image covers the entire container */
  height: 100vh; /* Set the height to 100% of the viewport height */
`;

const StyledTextContainer = styled.div`
  text-align: center;
  color: ${(props) =>
    props.theme
      .colorWhite}; /* Set text color for visibility on the background */
`;

const StyledPageTitle = styled.h1`
  font-family: ${(props) => props.theme.font};
  font-size: 2.25rem;
`;

const StyledParagraph = styled.p`
  font-family: ${(props) => props.theme.font};
  font-size: 1.5rem;
`;

const StyledPhotographerName = styled.p`
  font-family: ${(props) => props.theme.font};
  font-size: 0.8rem;
  color: ${(props) => props.theme.colorWhite};
  margin-top: 6rem;

  a {
    color: ${(props) => props.theme.colorWhite};
  }
`;

const UnderConstruction = () => {
  return (
    <StyledWrapper>
      <StyledTextContainer>
        <StyledPageTitle>Site Under Construction</StyledPageTitle>
        <StyledParagraph>
          Something new is coming up. Stay tuned!
        </StyledParagraph>
        <StyledPhotographerName>
          Photo by{' '}
          <a href="https://unsplash.com/@babybluecat">J Lee on Unsplash</a>
        </StyledPhotographerName>
      </StyledTextContainer>
    </StyledWrapper>
  );
};

export default UnderConstruction;
