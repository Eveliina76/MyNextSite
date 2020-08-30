import styled, { ThemeProvider } from "styled-components";
import { breakpoint } from "styled-components-breakpoint";
import { myTheme } from "../styles/GlobalStyle";

const SocialMediaWrapper = styled.div`
  display: flex;
  grid-column-start: 1;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colorWhite};
  ${breakpoint("md")`
    grid-column-start: 2;
    justify-content: flex-end;
    margin-left: 1.5rem;
  `}
`;

const StyledLink = styled.a``;
const StyledImage = styled.img`
  height: 2.3rem;
  margin: 0 0.5rem;
  ${breakpoint("md")`
    height: 2.1875rem;
		margin: 0 0.625rem;
  `}
`;

const SocialMedia = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <SocialMediaWrapper>
        <StyledLink
          href="https://www.linkedin.com/in/eveliina-champagne/"
          target="blank"
        >
          <StyledImage src="/logoLinkedin.svg" alt="linkedin logo" />
        </StyledLink>
        <StyledLink href="https://github.com/Eveliina76" target="blank">
          <StyledImage src="/logoGithub.svg" alt="github logo" />
        </StyledLink>
        <StyledLink href="https://www.instagram.com/eveliina76/" target="blank">
          <StyledImage src="/logoInstagram.svg" alt="instagram logo" />
        </StyledLink>
        <StyledLink
          href="https://trekkingtailwaggers.wordpress.com/"
          target="blank"
        >
          <StyledImage src="/logoBlog.svg" alt="wordpress logo" />
        </StyledLink>
      </SocialMediaWrapper>
    </ThemeProvider>
  );
};

export default SocialMedia;
