import styled, {css} from "styled-components";

export const Section = styled.section`
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
  background: ${({theme}) => theme.colors.sectionBackground};
  padding: 32px;
  border-radius: 4px;
  box-shadow: 0px -2px 50px ${({theme}) => theme.colors.shadow},
  0px 16px 58px ${({theme}) => theme.colors.shadow};

  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    padding: 22px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobileL}px) {
    padding: 16px;
  }

  ${({portfolioSection}) => portfolioSection && css`
    padding: 0;
    background: transparent;
    box-shadow: none;
    justify-items: center;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
      padding: 0;
    }
  `}
`;

export const SectionTitle = styled.h2`
  font-size: 30px;
  font-weight: 900;
  line-height: 36px;
  width: 100%;
  margin: 0;
  border-bottom: 1px solid ${({theme}) => theme.colors.border};
  padding: 0 0 16px 0;

  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    font-size: 24px;
    line-height: 28px;
    padding: 0 0 14px 0;
  }
  
  @media (max-width: ${({theme}) => theme.breakpoints.mobileL}px) {
    font-size: 18px;
    line-height: 22px;
    padding: 0 0 12px 0;
  }
  
  ${({portfolio}) => portfolio && css`
    padding: 16px 0;
    text-align: center;
    border: none;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
      padding: 14px 0;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobileL}px) {
      padding: 12px 0;
    }
  `}
`;

export const SectionSubtitle = styled.p`
  font-size: 20px;
  color: ${({theme}) => theme.colors.mainFont};
  line-height: 28px;
  text-transform: none;
  margin: 0 0 24px 0;

  @media (max-width: ${({theme}) => theme.breakpoints.mobileL}px) {
    font-size: 16px;
    line-height: 24px;
  }
`;