import {Intro} from "../../components/Intro";
import {MainButton} from "../../components/Button";
import {ContentWrapper, HeaderImg, HeaderParagraph, HeaderTitle, HeaderWrapper} from "./styled";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => {
  return (
    <HeaderWrapper>
      <ThemeSwitch/>
      <HeaderImg></HeaderImg>
      <ContentWrapper>
        <Intro>This is</Intro>
        <HeaderTitle>Patryk Krawczyk</HeaderTitle>
        <HeaderParagraph>&#129333;&#128187; a passionate Front-End Developer.
          JavaScript is my Language, React is how i speak.
          I am experienced with responsive frontend design.
          Fast learner, open to new opportunities.</HeaderParagraph>
        <MainButton
          onClick={() => window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
          })}
        >
          &#9993; Contact Me
        </MainButton>
      </ContentWrapper>
    </HeaderWrapper>
  );
};

export default Header;