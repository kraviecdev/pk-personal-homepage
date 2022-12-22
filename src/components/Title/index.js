import styled from "styled-components";

export const MainTitle = styled.h1`
  font-size: 38px;
  font-weight: 900;
  line-height: 46px;
  letter-spacing: 0.05em;
  
  @media(max-width: ${({theme}) => theme.breakpoints.mobileS}px) {
    font-size: 22px;
    line-height: 26px;
  }
`;
export const SectionTitle = styled.h2`
  font-size: 30px;
  font-weight: 900;
  line-height: 36px;
  letter-spacing: 0.05em;
  width: 100%;
  margin: 0;
  border-bottom: 1px solid ${({theme}) => theme.colors.border};
  padding: 15px 0;
  
  @media (max-width: ${({theme}) => theme.breakpoints.mobileS}px) {
    font-size: 18px;
    line-height: 22px;
  }
`;