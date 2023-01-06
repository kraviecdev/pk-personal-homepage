import {ErrorAdditionalInfo, ErrorIcon, ErrorInfo, ErrorWrapper} from "./styled";
import {MainButton} from "../../../components/Button";

const ErrorPage = () => (
  <ErrorWrapper>
    <ErrorIcon/>
    <ErrorInfo>Ooops! Something went wrong... </ErrorInfo>
    <ErrorAdditionalInfo>
      Sorry, failed to load Github projects.
      <br/>You can check them directly on Github.
    </ErrorAdditionalInfo>
    <MainButton
      onClick={() => window.open("https://github.com/patrick36212?tab=repositories", "_blank")}
    >
      Go to GitHub
    </MainButton>
  </ErrorWrapper>
);

export default ErrorPage;