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

  @media (max-width: ${({theme}) => theme.breakpoints.mobileS}px) {
    padding: 16px;
  }

  ${({portfolioSection}) => portfolioSection && css`
    padding: 0;
    background: transparent;
    box-shadow: none;
    justify-items: center;

    @media (max-width: ${({theme}) => theme.breakpoints.mobileS}px) {
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
  padding: 15px 0;
  
  @media (max-width: ${({theme}) => theme.breakpoints.mobileS}px) {
    font-size: 18px;
    line-height: 22px;
    padding: 12px 0;
  }
  ${({portfolio}) => portfolio && css`
    text-align: center;
    border: none;
  `}
`;

export const SectionSubtitle = styled.p`
  font-size: 20px;
  color: ${({theme}) => theme.colors.mainFont};
  line-height: 28px;
  text-transform: none;
  margin-bottom: 24px;

  @media (max-width: ${({theme}) => theme.breakpoints.mobileS}px) {
    font-size: 16px;
    line-height: 24px;
  }
`;