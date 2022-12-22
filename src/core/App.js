import {useSelector} from "react-redux";
import {ThemeProvider} from "styled-components";
import {selectIsDarkModeOn} from "../components/ThemeSwitch/themeSlice";
import {GlobalStyle} from "../themes/GlobalStyle";
import {darkTheme, lightTheme} from "../themes/theme";
import ThemeSwitch from "../components/ThemeSwitch";
import Main from "../components/Main";
import Known from "../features/skills/known";
import InProgress from "../features/skills/inProgress";

function App() {

  const isDarkModeOn = useSelector(selectIsDarkModeOn);

  return (
    <ThemeProvider theme={isDarkModeOn ? darkTheme : lightTheme}>
      <GlobalStyle/>
      <Main>
        <ThemeSwitch/>
        <Known />
        <InProgress />
      </Main>
    </ThemeProvider>
  );
}

export default App;
