import {useSelector} from "react-redux";
import {ThemeProvider} from "styled-components";
import {selectIsDarkModeOn} from "../components/ThemeSwitch/themeSlice";
import {GlobalStyle} from "../themes/GlobalStyle";
import {darkTheme, lightTheme} from "../themes/theme";
import ThemeSwitch from "../components/ThemeSwitch";
import Main from "../components/Main";
import Known from "../features/skills/known";
import InProgress from "../features/skills/inProgress";
import Header from "../features/header";
import Projects from "../features/projects";
import Footer from "../features/footer";

function App() {

  const isDarkModeOn = useSelector(selectIsDarkModeOn);

  return (
    <ThemeProvider theme={isDarkModeOn ? darkTheme : lightTheme}>
      <GlobalStyle/>
      <Main>
        <ThemeSwitch/>
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
