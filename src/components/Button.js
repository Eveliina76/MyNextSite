import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid transparent;
  color: ${(props) => props.theme.colorDarkTaupeGray};
  font-family: ${(props) => props.theme.font};
  font-size: 1rem;
  margin: 0.5rem;
  padding: 1rem;
  text-transform: uppercase;

  display: inline-block;
  outline: none;
  cursor: pointer;
  /* transition-property: background-color, border-color, color, box-shadow, filter;
  transition-duration: 0.3s; */
  letter-spacing: 2px;

  white-space: normal;
  text-align: center;
  box-shadow: inset 0 0 0 2px #686764;
  background-color: transparent;

  &:hover {
    color: ${(props) => props.theme.colorEggShell};
    background-color: ${(props) => props.theme.colorJellyBeanRed};
    box-shadow: inset 0 0 0 2px #eae7dc;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}px) {
    margin: 1rem 0.5rem;
    padding: 1.5rem;
  }
`;

export default Button;
