import {FooterIconsWrapper, FooterMail, FooterParagraph, FooterWrapper} from "./styled";
import {GitHubIcon, LinkedInIcon} from "../../components/Icons";
import Intro from "../../components/Intro";

const Footer = () => (
  <FooterWrapper>
    <Intro>Let's talk</Intro>
    <FooterMail href="mailto:pkrawczyk@kraviecdev.com">pkrawczyk@kraviecdev.com</FooterMail>
    <FooterParagraph>
      I’m always open to any suggestions and ideas.
      If you hava any questions or want to make a website or app, feel free to contact me through one of the following
      way:
    </FooterParagraph>
    <FooterIconsWrapper>
      <a target="_blank" rel="noreferrer" href="https://github.com/kraviecdev">
        <GitHubIcon/>
      </a>
      <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/patryk-krawczyk-js">
        <LinkedInIcon/>
      </a>
    </FooterIconsWrapper>
  </FooterWrapper>
);

export default Footer;