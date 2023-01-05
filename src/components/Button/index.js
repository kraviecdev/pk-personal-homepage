import styled from "styled-components";

export const MainButton = styled.button`
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
  transition: .3s ease-in-out;

  &:hover, &:active {
    box-shadow: 2px -2px 0px ${({theme}) => theme.colors.borderOnHover},
    -2px 2px 0px ${({theme}) => theme.colors.borderOnHover},
    2px 2px 0px ${({theme}) => theme.colors.borderOnHover},
      -2px -2px 0px ${({theme}) => theme.colors.borderOnHover};
  }
  
  @media(max-width: ${({theme}) => theme.breakpoints.mobileL}px) {
    font-size: 18px;
    line-height: 22px;
  }
`;