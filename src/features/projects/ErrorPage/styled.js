import styled from "styled-components";
import {ReactComponent as Error} from "./error.svg";

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 64px 0;

  @media (max-width: ${({theme}) => theme.breakpoints.mobileL}px) {
    margin: 32px 0;
  };
`;
export const ErrorIcon = styled(Error)`
  fill: ${({theme}) => theme.colors.mainFont};
  
  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    width: 38px;
  };

  @media (max-width: ${({theme}) => theme.breakpoints.mobileL}px) {
    width: 32px;
  };
`;

export const ErrorInfo = styled.h3`
  margin: 22px 0 0 0;
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
  text-align: center;

  @media (max-width: ${({theme}) => theme.breakpoints.tablet}px) {
    font-size: 22px;
  };

  @media (max-width: ${({theme}) => theme.breakpoints.mobileL}px) {
    font-size: 18px;
    line-height: 22px;
  };
`;

export const ErrorAdditionalInfo = styled.p`
  margin: 32px 0;
  font-size: 20px;
  line-height: 28px;
  text-align: center;

  @media (max-width: ${({theme}) => theme.breakpoints.mobileL}px) {
    font-size: 16px;
    line-height: 24px;
  };
`;