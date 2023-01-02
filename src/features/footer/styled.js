import styled from "styled-components";

export const FooterWrapper = styled.footer`
  display: grid;
  grid-auto-rows: auto;
  max-width: 60%;
`;

export const FooterMail = styled.a`
  margin-top: 24px;
  font-size: 32px;
  font-weight: 900;
  color: ${({theme}) => theme.colors.mainFont};
  line-height: 38px;
  text-decoration: none;
`;

export const FooterIconsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  gap: 24px;
`;