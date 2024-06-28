import React, { useState } from 'react';

import {
  FacebookShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  EmailShareButton,
  FacebookIcon,
  WhatsappIcon,
  PinterestIcon,
  EmailIcon
} from 'react-share';
import Button from './Button';
import { faker } from '@faker-js/faker';
import neutralNames from '../components/data/neutralNames.json';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  align-items: center;
  background-color: ${(props) => props.theme.colorEggShell};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
`;

const StyledTextContainer = styled.div`
  margin: 0 2rem;
  text-align: center;

  @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
    margin: 0 5rem;
  }
`;

const StyledPageTitle = styled.h1`
  color: ${(props) => props.theme.colorChilli};
  font-family: ${(props) => props.theme.titleFont};
  font-size: 3rem;
  margin: 2rem 0 2rem 0;
`;

const StyledParagraph = styled.p`
  color: ${(props) => props.theme.colorDarkTaupeGray};
  font-family: ${(props) => props.theme.font};
  font-size: 1.5rem;
`;

const StyledFavoritesContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const StyledH2 = styled.h2`
  color: ${(props) => props.theme.colorChilli};
  font-family: ${(props) => props.theme.titleFont};
  font-size: 2rem;
  margin-bottom: 0.5rem;
  text-align: center;
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

const StyledImage = styled.img`
  height: auto;
  width: 30%;
`;

const StyledList = styled.ul`
  color: ${(props) => props.theme.colorDarkTaupeGray};
  font-family: ${(props) => props.theme.font};
  font-size: 1.5rem;
  list-style: circle;
  margin: 1rem;
  padding: 0;
`;

const StyledListItem = styled.li``;

const StyledSoMeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0 2rem 0;
  width: 50%;
`;

const ShareButtonWrapper = styled.div`
  &:hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
    border-radius: 30%;
    margin: -2px;
    padding: 2px;
  }
`;

const StyledSoMeText = styled.p`
  color: ${(props) => props.theme.colorDarkTaupeGray};
  font-family: ${(props) => props.theme.font};
  font-size: 1.2rem;
`;

const PetNameGenerator = () => {
  const [petName, setPetName] = useState('');
  const [favorites, setFavorites] = useState([]);

  const generatePetName = (gender) => {
    if (gender === 'male') {
      setPetName(faker.person.firstName('male')); // 0 is for a male name
    } else if (gender === 'female') {
      setPetName(faker.person.firstName('female')); // 1 is for a female name
    } else if (gender === 'neutral') {
      const randomIndex = Math.floor(Math.random() * neutralNames.length);
      setPetName(neutralNames[randomIndex]); // Select a random name from the neutralNames array
    }
  };

  const reset = () => {
    setPetName('');
  };

  const [errorMessage, setErrorMessage] = useState('');

  const MAX_FAVORITES = 7;

  const addToFavorites = () => {
    if (!favorites.includes(petName)) {
      if (favorites.length < MAX_FAVORITES) {
        setFavorites([...favorites, petName]);
        setPetName(''); // Clear the current pet name
        setErrorMessage(''); // Clear any previous error message
      } else {
        setErrorMessage(
          'You have reached the maximum number of favorite names. Please share your list and start again.'
        );
        setPetName(''); // Clear the current pet name
      }
    }
  };

  const clearFavorites = () => {
    setFavorites([]);
    setPetName(''); // Clear the current pet name
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const title = 'Check out these cute pet names!';
  const favoritesList = favorites.join(', ');
  const shareText = `I just generated a fun list of pet names: ${favoritesList}`;

  return (
    <StyledWrapper>
      <StyledTextContainer>
        <StyledPageTitle>Pet Name Generator</StyledPageTitle>
        <StyledParagraph>
          {petName
            ? 'Your pet name is ' + petName + '!'
            : favorites.length >= MAX_FAVORITES
              ? 'You have reached the maximum number of favorite names. Please share your list and start again.'
              : favorites.length > 0
                ? 'How about another name?'
                : 'Choosing a name for your pet can be a difficult task. This page is here to help. Start by clicking female, male or neutral name:'}
        </StyledParagraph>
        {errorMessage && <StyledParagraph>{errorMessage}</StyledParagraph>}
        {!petName && favorites.length < MAX_FAVORITES && (
          <>
            <StyledButtonWrapper>
              <Button onClick={() => generatePetName('female')}>
                Select Female Name
              </Button>
              <Button onClick={() => generatePetName('male')}>
                Select Male Name
              </Button>
              <Button onClick={() => generatePetName('neutral')}>
                Select Neutral Name
              </Button>
            </StyledButtonWrapper>
            <StyledImage src="/CatandDog.svg" alt="Cat and dog" />
          </>
        )}

        {petName && (
          <>
            <Button onClick={addToFavorites}>Add to the Favorites</Button>
            <Button onClick={reset}>Generate another name</Button>
          </>
        )}
      </StyledTextContainer>
      <StyledFavoritesContainer>
        {favorites.length > 0 && (
          <>
            <StyledH2>List of my favorite pet names:</StyledH2>
            <StyledList>
              {favorites.map((name, index) => (
                <StyledListItem key={index}>{name}</StyledListItem>
              ))}
            </StyledList>
            <Button onClick={clearFavorites}>Clear your Favorites</Button>
            <StyledSoMeText>Share your favorite names:</StyledSoMeText>
            <StyledSoMeContainer>
              <ShareButtonWrapper>
                <FacebookShareButton url={shareUrl} quote={shareText}>
                  <FacebookIcon size={40} round />
                </FacebookShareButton>
              </ShareButtonWrapper>
              <ShareButtonWrapper>
                <WhatsappShareButton url={shareUrl} title={shareText}>
                  <WhatsappIcon size={40} round />
                </WhatsappShareButton>
              </ShareButtonWrapper>
              <ShareButtonWrapper>
                <PinterestShareButton
                  url={shareUrl}
                  media={shareUrl}
                  description={shareText}
                >
                  <PinterestIcon size={40} round />
                </PinterestShareButton>
              </ShareButtonWrapper>
              <ShareButtonWrapper>
                <EmailShareButton
                  url={shareUrl}
                  subject={title}
                  body={shareText}
                >
                  <EmailIcon size={40} round />
                </EmailShareButton>
              </ShareButtonWrapper>
            </StyledSoMeContainer>
          </>
        )}
      </StyledFavoritesContainer>
    </StyledWrapper>
  );
};

export default PetNameGenerator;
