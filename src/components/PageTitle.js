import styled, { ThemeProvider } from "styled-components";
import { breakpoint } from "styled-components-breakpoint";
import { myTheme } from "../styles/GlobalStyle";

const PageTitleWrapper = styled.div`
  background: ${(props) => props.theme.colorWhite};
  display: none;
  flex-direction: row;
  margin-left: 0;

  ${breakpoint("md")`
    display: flex;
    align-items: center;
  `}
`;
const StyledName = styled.div`
  color: ${(props) => props.theme.colorSpaceCadet};
  font-family: ${(props) => props.theme.titleFont};
  font-size: ${(props) => props.theme.h3FontSize};
  padding-right: 0.625rem;
  ${breakpoint("xs")`
    font-size: ${(props) => props.theme.h4FontSize};
  `}
`;
const StyledOccupation = styled.div`
  color: ${(props) => props.theme.colorCerise};
  font-family: ${(props) => props.theme.font};
  font-size: ${(props) => props.theme.textFontSize};
`;

const PageTitle = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <PageTitleWrapper>
        <StyledName>Eveliina Champagne</StyledName>
        <StyledOccupation> / WEB DEVELOPER</StyledOccupation>
      </PageTitleWrapper>
    </ThemeProvider>
  );
};

export default PageTitle;
