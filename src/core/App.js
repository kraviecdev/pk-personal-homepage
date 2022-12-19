import { useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { selectIsDarkModeOn } from "../reducers/themeSlice";
import { GlobalStyle } from "../themes/GlobalStyle";
import { darkTheme, lightTheme } from "../themes/theme";
import ThemeSwitch from "../components/ThemeSwitch";

function App() {

  const isDarkModeOn = useSelector(selectIsDarkModeOn);

  return (
    <>
      <ThemeProvider theme={isDarkModeOn ? darkTheme : lightTheme}>
        <GlobalStyle />
        <ThemeSwitch />
      </ThemeProvider>
    </>
  );
}

export default App;
