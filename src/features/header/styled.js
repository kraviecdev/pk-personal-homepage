import styled from "styled-components";
import pkrawczyk from "./pkrawczyk.jpg";
export const HeaderWrapper = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 66px;
  
  @media(max-width: ${({theme}) => theme.breakpoints.mobileS}px) {
    grid-template-columns: auto;
    gap: 12px;
  }
`;

export const HeaderImg = styled.div`
  width: 390px;
  height: 390px;
  background-image: url(${pkrawczyk});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  object-fit: fill;
  border-radius: 50%;

  @media(max-width: ${({theme}) => theme.breakpoints.mobileS}px) {
    width: 130px;
    height: 130px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;