import styled, { ThemeProvider } from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import { Heading } from '@tenon-io/tenon-ui';
import { myTheme } from '../styles/GlobalStyle';

const ContentTextWrapper = styled.div`
  background: ${(props) => props.theme.colorWhite};
  color: ${(props) => props.theme.colorSpaceCadet};
  width: auto;
  padding: 0.625rem 1.25rem 0.625rem 1.5625rem;
  margin-bottom: 0.9375rem;
  ${breakpoint('md')`
		padding: 1.5625rem 1.25rem 0 5.625rem;
		margin-bottom: 0;
  `}
  ${breakpoint('lg')`
    width: 33.125rem;
    padding: 9.375rem 0 0 6.25rem;
  `}
  ${breakpoint('xl')`
		width: 40.625rem;
		padding: 0 0 0 9.375rem;
  `} 
  h1 {
    font-family: ${(props) => props.theme.titleFont};
    font-size: ${(props) => props.theme.h1FontSize};
    color: ${(props) => props.theme.colorCerise};
    margin: 0.6rem 0 1rem 0;
  }
  p {
    font-family: ${(props) => props.theme.font};
    font-size: ${(props) => props.theme.textFontSize};
    margin: 10px 0;
  }
`;

const ContentText = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <ContentTextWrapper>
        <Heading.H>Hello;</Heading.H>
        <p>
          I’m Eveliina, a Helsinki based web developer. For the past 2 years
          I’ve been working for Wunder as a Front End Developer.
        </p>
        <p>
          I love to implement designs to perfection. I pay a lot of attention to
          the details. I’m all about making things look good. I enjoy working
          with people and learning by doing.
        </p>
        <p>
          In my 40s I decided to pursue a new career as a developer. You can
          read how I ended up becoming a developer in the About page.
        </p>
        <p>
          When I'm not working I will be probably spending time with my two
          rescue dogs, reading books, making jewellery or letting some steam of
          at the gym. I love slow mornings, exploring new places, enjoying
          delicious food, decorating my home and going for a walks.
        </p>
        <p>
          If you would like to get in contact with me, please do so through my
          social media accounts.
        </p>
      </ContentTextWrapper>
    </ThemeProvider>
  );
};

export default ContentText;
