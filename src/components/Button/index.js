import styled from "styled-components";

export const HireMeButton = styled.button`
  padding: 12px 16px;
  background: ${({theme}) => theme.colors.button};
  color: ${({theme}) => theme.colors.buttonFont};
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;
  border-radius: 4px;
  max-width: max-content;
  border: 1px solid ${({theme}) => theme.colors.border};
  cursor: pointer;
`;