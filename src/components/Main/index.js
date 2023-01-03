import styled from "styled-components";

const Main = styled.main`
  display: grid;
  max-width: 1200px;
  position: relative;
  gap: 72px;
  margin: 115px auto;

  @media (max-width: ${({theme}) => theme.breakpoints.mobileS}px) {
    max-width: ${({theme}) => theme.breakpoints.mobileS}px;
    gap: 50px;
    padding: 12px;
    margin: 32px 0;
  }
`;

export default Main;