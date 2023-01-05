import styled, {css} from "styled-components";
import {ReactComponent as GitHub} from "./github.svg";
import {ReactComponent as LinkedIn} from "./linkedin.svg";

export const GitHubIcon = styled(GitHub)`
  fill: ${({theme}) => theme.colors.mainFont};
  transition: .3s ease-in-out;

  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    width: 38px;
  }
  
  @media (max-width: ${({theme}) => theme.breakpoints.mobileL}px) {
    width: 32px;
  }

  &:hover {
    fill: ${({theme}) => theme.colors.button};
  }

  ${({sectionIcon}) => sectionIcon && css`
    fill: ${({theme}) => theme.colors.button};
  `}
`;

export const LinkedInIcon = styled(LinkedIn)`
  fill: ${({theme}) => theme.colors.mainFont};
  transition: .3s ease-in-out;

  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    width: 38px;
  }
  
  @media (max-width: ${({theme}) => theme.breakpoints.mobileL}px) {
    width: 32px;
  }

  &:hover {
    fill: ${({theme}) => theme.colors.button};
  }
`;