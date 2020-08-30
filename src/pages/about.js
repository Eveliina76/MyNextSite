import styled, { ThemeProvider } from "styled-components";
import { breakpoint } from "styled-components-breakpoint";
import Layout from "../components/Layout";
import { myTheme } from "../styles/GlobalStyle";

import AboutImage from "../components/AboutImage";
import AboutImage2 from "../components/AboutImage2";
import AboutText from "../components/AboutText";

const AboutWrapper = styled.div`
  display: grid;
  height: calc(100vh - 12.5rem);
  overflow-y: scroll;
  grid-template-columns: 100%;
  background-color: ${(props) => props.theme.colorIndependence};
  ${breakpoint("md")`
		height: calc(100vh - 12.5rem);
		grid-template-columns: 40% 60%;
  `}
  ${breakpoint("lg")`
		grid-template-columns: 45% 55%;
  `}
	${breakpoint("xl")`
		grid-template-columns: 33% 33% 33%;
  `}
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <Layout>
        <AboutWrapper>
          <AboutImage />
          <AboutText />
          <AboutImage2 />
        </AboutWrapper>
      </Layout>
    </ThemeProvider>
  );
};

export default AboutPage;
