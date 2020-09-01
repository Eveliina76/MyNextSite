import styled, { ThemeProvider } from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import { myTheme } from '../styles/GlobalStyle';
import ImageCard from './ImageCard';

const ContentImageWrapper = styled.div`
  display: flex;
  background: ${(props) => props.theme.colorIndependence};
  height: 20rem;
  ${breakpoint('md')`
		position: relative;
		width: auto;
		height: auto;
		border-radius: 0 0.3125rem 0.3125rem 0;
		margin: 0;
  `}
`;

const ContentImage = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <ContentImageWrapper>
        <ImageCard />
      </ContentImageWrapper>
    </ThemeProvider>
  );
};

export default ContentImage;
