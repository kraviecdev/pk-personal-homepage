import styled from "styled-components";

const Main = styled.main`
  display: grid;
  max-width: 1200px;
  gap: 72px;
  margin: 115px auto;
  padding: 12px;

  @media (max-width: ${({theme}) => theme.breakpoints.laptop}px) {
    gap: 60px;
    padding: 14px;
    margin: 50px auto;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobileL}px) {
    max-width: 100%;
    gap: 50px;
    padding: 16px;
    margin: 32px 0;
  }
`;

export default Main;