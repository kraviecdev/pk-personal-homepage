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

  @media(max-width: ${({theme}) => theme.breakpoints.mobileS}px) {
    padding: 16px;
  }
  
  ${({portfolioSection}) => portfolioSection && css`
    padding: 0;
    background: transparent;
    box-shadow: none;
    justify-items: center;
  `}
`;