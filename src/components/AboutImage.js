import styled, { ThemeProvider } from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import { myTheme } from '../styles/GlobalStyle';

const StyledImage = styled.img`
  border-radius: 0.625rem 0.625rem;
  ${breakpoint('xs')`
		display: none;
  `}
  ${breakpoint('md')`
		display: block;
		width: 85%;
  `}
	${breakpoint('lg')`
		width: 368px;
		height: 552px;
  `}
`;

const AboutImageWrapper = styled.div`
  justify-self: center;
  ${breakpoint('md')`
		padding-top: 7.5rem;
		padding-left: 2.5rem;
  `}
  ${breakpoint('lg')`
		padding-top: 8rem;
		padding-left: 0;
  `}
	${breakpoint('xl')`
    padding-top: 4rem;
  `}
`;

const AboutImage = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <AboutImageWrapper>
        <StyledImage
          src="/eve.jpg"
          alt="Photo of a woman sitting on a loudspeaker"
        />
      </AboutImageWrapper>
    </ThemeProvider>
  );
};

export default AboutImage;
