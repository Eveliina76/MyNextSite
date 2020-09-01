import styled, { css, ThemeProvider } from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import { myTheme } from '../styles/GlobalStyle';

const StyledImage = styled.img`
  border-radius: 0.625rem 0.625rem;
  width: 80%;
  ${breakpoint('lg')`
		width: 368px;
		height: 552px;
  `}
`;
const AboutImageWrapper = styled.div`
  display: block;
  padding-bottom: 2rem;
  padding-left: 3.5rem;
  ${breakpoint('md')`
		display: none;
		padding-top: 4rem;
		padding-left: 0;
  `}
  ${breakpoint('xl')`
		display: block;
		justify-self: center;
  `}
`;

const AboutImage2 = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <AboutImageWrapper>
        <StyledImage
          src="/eve2.jpg"
          alt="Photo of a woman sitting and looking to the left."
        />
      </AboutImageWrapper>
    </ThemeProvider>
  );
};

export default AboutImage2;
