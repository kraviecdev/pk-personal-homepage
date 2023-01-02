import {FooterIconsWrapper, FooterMail, FooterWrapper} from "./styled";
import {AdditionalInfo, DescriptionParagraph} from "../../components/Description";
import {GitHubIcon, IconLink, LinkedInIcon} from "../../components/Icons";

const Footer = () => (
  <FooterWrapper>
    <AdditionalInfo>Let's talk</AdditionalInfo>
    <FooterMail href="mailto:patrick36212@gmail.com">patrick36212@gmail.com</FooterMail>
    <DescriptionParagraph footerDescription>I’m always open to any suggestions and ideas.
      If you hava any questions or want to make a website or app, feel free to contact me through one of the following
      way:</DescriptionParagraph>
    <FooterIconsWrapper>
      <IconLink target="_blank" href="https://github.com/patrick36212">
        <GitHubIcon/>
      </IconLink>
      <IconLink target="_blank" href="https://www.linkedin.com/in/patryk-krawczyk-js/">
        <LinkedInIcon/>
      </IconLink>
    </FooterIconsWrapper>
  </FooterWrapper>
);

export default Footer;