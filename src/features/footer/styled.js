import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: grid;
  grid-auto-rows: auto;
  max-width: 60%;

  @media (max-width: ${({theme}) => theme.breakpoints.mobileL}px) {
    max-width: 100%;
  }
`;

export const FooterMail = styled.a`
  margin-top: 24px;
  font-size: 32px;
  font-weight: 900;
  color: ${({theme}) => theme.colors.mainFont};
  line-height: 38px;
  text-decoration: none;
  transition: .3s ease-in-out;

  &:hover {
    color: ${({theme}) => theme.colors.button};
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobileL}px) {
    font-size: 18px;
    line-height: 22px;
    margin: 12px 0;
  }
`;

export const FooterParagraph = styled.p`
  font-size: 18px;
  line-height: 26px;
  margin: 24px 0;

  @media (max-width: ${({theme}) => theme.breakpoints.mobileL}px) {
    font-size: 14px;
    line-height: 16px;
    margin: 0 0 38px;
  }
`;
export const FooterIconsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 24px;
`;