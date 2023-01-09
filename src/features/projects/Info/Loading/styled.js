import styled, {keyframes} from "styled-components";

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.span`
  width: 160px;
  height: 160px;
  border-width: 12px;
  border-style: solid;
  border-color: ${({theme}) => theme.colors.button} ${({theme}) => theme.colors.sectionBackground} ${({theme}) => theme.colors.sectionBackground};
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotation} 1.7s linear infinite;

  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    width: 126px;
    height: 126px;
    border-width: 10px;
  };

  @media (max-width: ${({theme}) => theme.breakpoints.mobileL}px) {
    width: 106px;
    height: 106px;
    border-width: 8px;
  };
`;