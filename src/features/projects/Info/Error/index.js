import {InfoParagraph, InfoTitle, InfoWrapper,} from "../styled";
import {ErrorIcon} from "./styled";
import Button from "../../../../components/Button";

const Error = () => (
  <InfoWrapper>
    <ErrorIcon/>
    <InfoTitle>Ooops! Something went wrong... </InfoTitle>
    <InfoParagraph>
      Sorry, failed to load Github projects.
      <br/>You can check them directly on Github.
    </InfoParagraph>
    <Button
      onClick={() => window.open("https://github.com/patrick36212?tab=repositories", "_blank")}
    >
      Go to GitHub
    </Button>
  </InfoWrapper>
);

export default Error;