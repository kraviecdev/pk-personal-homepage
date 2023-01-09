import styled from "styled-components";

export const UnorderedList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
  gap: 8px;
  margin: 32px 0 0 0;
  padding: 0;
  list-style: none;

  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    margin: 22px 0 0 0;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobileL}px) {
    grid-template-columns: 1fr;
    margin: 12px 0 0 0;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  color: ${({theme}) => theme.colors.secondaryFont};
  font-size: 18px;
  line-height: 26px;
  width: fit-content;

  &:before {
    content: "\\25CF";
    color: ${({theme}) => theme.colors.button};
    width: 26px;
  }

  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    font-size: 16px;
    line-height: 20px;

    &:before {
      width: 22px;
    }
  }

  @media (max-width: ${({theme}) => theme.breakpoints.mobileL}px) {
    font-size: 14px;
    line-height: 16px;

    &:before {
      width: 18px;
    }
  }
`;