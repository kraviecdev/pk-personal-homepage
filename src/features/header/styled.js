import styled from "styled-components";
import pkrawczyk from "./pkrawczyk.jpg";
export const HeaderWrapper = styled.header`
  display: grid;
  grid-template-columns: auto 1fr;
  position: relative;
  align-items: center;
  gap: 66px;

  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    gap: 28px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobileL}px) {
    grid-template-columns: auto;
    gap: 18px;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 38px;
  font-weight: 900;
  line-height: 46px;
  margin: 12px 0;

  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    font-size: 32px;
    line-height: 38px;
    margin: 8px 0;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobileL}px) {
    font-size: 22px;
    line-height: 26px;
    margin: 8px 0;
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

  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    width: 260px;
    height: 260px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobileL}px) {
    width: 130px;
    height: 130px;
  }
`;

export const HeaderParagraph = styled.p`
  color: ${({theme}) => theme.colors.secondaryFont};
  font-size: 20px;
  line-height: 28px;
  margin: 22px 0 32px;

  @media(max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    font-size: 18px;
    line-height: 26px;
    margin: 12px 0 26px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobileL}px) {
    font-size: 16px;
    line-height: 24px;
    margin: 8px 0 24px;
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;