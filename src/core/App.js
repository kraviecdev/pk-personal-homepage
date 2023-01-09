import {useSelector} from "react-redux";
import {ThemeProvider} from "styled-components";
import {selectIsDarkModeOn} from "../features/header/ThemeSwitch/themeSlice";
import {GlobalStyle} from "../themes/GlobalStyle";
import {darkTheme, lightTheme} from "../themes/theme";
import Main from "../components/Main";
import Known from "../features/skills/KnownSkills";
import InProgress from "../features/skills/InProgress";
import Header from "../features/header";
import Projects from "../features/projects";
import Footer from "../features/footer";

function App() {
  const isDarkModeOn = useSelector(selectIsDarkModeOn);
  return (
    <ThemeProvider theme={isDarkModeOn ? darkTheme : lightTheme}>
      <GlobalStyle/>
      <Main>
        <Header/>
        <Known/>
        <InProgress/>
        <Projects/>
        <Footer/>
      </Main>
    </ThemeProvider>
  );
}

export default App;
