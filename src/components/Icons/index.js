import styled, {css} from "styled-components";
import {ReactComponent as GitHub} from "./github.svg";
import {ReactComponent as LinkedIn} from "./linkedin.svg";
export const IconLink = styled.a`
  
`;

export const GitHubIcon = styled(GitHub)`
  fill: ${({theme})=>theme.colors.mainFont};
  
  ${({sectionIcon}) => sectionIcon && css`
    fill: ${({theme}) => theme.colors.button};
  `}
`;

export const LinkedInIcon = styled(LinkedIn)`
  fill: ${({theme})=>theme.colors.mainFont};
`;