import styled, {css} from "styled-components";

export const DescriptionParagraph = styled.p`
  color: ${({theme}) => theme.colors.secondaryFont};
  font-size: 20px;
  line-height: 28px;
  margin: 22px 0 32px;
  
  ${({projectDescription}) => projectDescription && css`
    font-size: 18px;
    line-height: 26px;
    text-align: justify;
    overflow: auto;
    margin: 24px 0;
    max-height: 130px;
  `}

  ${({projectLink}) => projectLink && css`
    font-size: 18px;
    line-height: 26px;
    //min-width: 68px;
    margin: 0;
  `}

  @media(max-width: ${({theme}) => theme.breakpoints.mobileS}px) {
    font-size: 16px;
    line-height: 24px;
    margin: 8px 0 24px;
  }
`;

export const AdditionalInfo = styled.span`
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.secondaryFont};
  font-size: 12px;
  line-height: 16px;
  
  ${({additionalPortfolio}) => additionalPortfolio && css`
    font-size: 20px;
    color: ${({theme}) => theme.colors.mainFont};
    line-height: 28px;
    text-transform: none;
    margin-bottom: 24px;
  `}
`;