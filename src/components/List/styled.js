import styled from "styled-components";

export const UnorderedList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(324px, 1fr));
  gap: 8px;
  margin: 32px 0 0 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  color: ${({theme}) => theme.colors.secondaryFont};
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 0.05em;
  font-weight: 400;
  width: fit-content;

  &:before {
    content: "\\25CF";
    color: ${({theme}) => theme.colors.button};
    width: 26px;
  }
`;