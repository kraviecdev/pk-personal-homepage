import styled from "styled-components";

const Intro = styled.span`
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.secondaryFont};
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
`;

export default Intro;