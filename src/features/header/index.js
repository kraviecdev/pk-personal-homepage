import {MainTitle} from "../../components/Title";
import {AdditionalInfo, DescriptionParagraph} from "../../components/Description";
import {HireMeButton} from "../../components/Button";
import {ContentWrapper, HeaderImg, HeaderWrapper} from "./styled";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderImg></HeaderImg>
      <ContentWrapper>
        <AdditionalInfo>This is</AdditionalInfo>
        <MainTitle>Patryk Krawczyk</MainTitle>
        <DescriptionParagraph>&#129333;&#128187; a passionate Front-End Developer.
          JavaScript is my Language, React is how i speak.
          I am experienced with responsive frontend design.
          Fast learner, open to new opportunities.</DescriptionParagraph>
        <HireMeButton
          onClick={() => window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
          })}
        >
          &#9993; Contact Me
        </HireMeButton>
      </ContentWrapper>
    </HeaderWrapper>
  );
};

export default Header;