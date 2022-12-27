import styled from "styled-components";

export const Tile = styled.article`
  max-width: 592px;
  padding: 56px;
  background: ${({theme}) => theme.colors.sectionBackground};
  border: 6px solid ${({theme}) => theme.colors.border};
  box-shadow: 0px -2px 50px ${({theme}) => theme.colors.shadow},
  0px 16px 58px ${({theme}) => theme.colors.shadow};
`;
export const TileTitle = styled.h3`
  color: ${({theme}) => theme.colors.button};
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  margin: 0;
`;

export const TileLinkContainer = styled.div`
  display: flex;
  align-items: center;

  &:nth-child(odd) {
    margin-bottom: 8px;
  }
`;

export const TileLink = styled.a`
  color: ${({theme}) => theme.colors.button};
  font-size: 18px;
  line-height: 26px;
  cursor: pointer;
`;