import styled, {css} from "styled-components";

export const TileWrapper = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(388px, 1fr));
  gap: 32px;

  @media (max-width: ${({theme}) => theme.breakpoints.laptop}px) {
    gap: 16px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    grid-template-columns: 1fr;
    gap: 8px;
  }
`;

export const Tile = styled.article`
  display: grid;
  grid-template-rows: max-content 178px 1fr;
  padding: 56px;
  background: ${({theme}) => theme.colors.sectionBackground};
  border: 6px solid ${({theme}) => theme.colors.border};
  box-shadow: 0px -2px 50px ${({theme}) => theme.colors.shadow},
  0px 16px 58px ${({theme}) => theme.colors.shadow};
  transition: .3s ease-in;

  &:hover {
    border: 6px solid ${({theme}) => theme.colors.borderOnHover};
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobileS}px) {
    padding: 24px;
    grid-template-rows: repeat(2, max-content) 1fr;
  }
`;
export const TileTitle = styled.h3`
  color: ${({theme}) => theme.colors.button};
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  margin: 0;
  text-transform: capitalize;

  @media (max-width: ${({theme}) => theme.breakpoints.mobileS}px) {
    font-size: 16px;
    line-height: 20px;
  }
`;

export const TileDescription = styled.p`
  color: ${({theme}) => theme.colors.secondaryFont};
  font-size: 18px;
  line-height: 26px;
  text-align: justify;
  overflow: auto;
  margin: 24px 0;
  max-height: 130px;

  @media(max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    font-size: 16px;
    line-height: 20px;
    margin: 20px 0;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobileL}px) {
    font-size: 14px;
    line-height: 16px;
    margin: 16px 0;
  }
  
  ${({projectLink}) => projectLink && css`
    font-size: 18px;
    line-height: 26px;
    margin: 0;

    @media (max-width: ${({theme}) => theme.breakpoints.mobileL}px) {
      font-size: 14px;
      line-height: 16px;
      margin: 0;
    }
  `}
`;

export const TileLinkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 8px;
  align-items: center;
`;

export const TileLink = styled.a`
  color: ${({theme}) => theme.colors.button};
  font-size: 18px;
  cursor: pointer;
  transition: .3s ease-in;

  &:hover {
    filter: brightness(1.20);
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobileS}px) {
    font-size: 14px;
    line-height: 16px;
  }
`;