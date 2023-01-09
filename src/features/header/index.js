import {ContentWrapper, HeaderImg, HeaderParagraph, HeaderTitle, HeaderWrapper} from "./styled";
import Intro from "../../components/Intro";
import Button from "../../components/Button";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => (
  <HeaderWrapper>
    <ThemeSwitch/>
    <HeaderImg/>
    <ContentWrapper>
      <Intro>This is</Intro>
      <HeaderTitle>Patryk Krawczyk</HeaderTitle>
      <HeaderParagraph>
        &#129333;&#128187; a passionate Front-End Developer.
        JavaScript is my Language, React is how i speak.
        I am experienced with responsive frontend design.
        Fast learner, open to new opportunities.
      </HeaderParagraph>
      <Button
        onClick={() => window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth"
        })}
      >
        &#9993; Contact Me
      </Button>
    </ContentWrapper>
  </HeaderWrapper>
);

export default Header;