import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {handleThemeSwitch, selectIsDarkModeOn} from "./themeSlice";
import {Icon, ThemeIconBody, ThemeInfo, ThemeSwitchBody, ThemeSwitchButton} from "./styled";

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const isDarkModeOn = useSelector(selectIsDarkModeOn);
  return (
    <ThemeSwitchButton
      onClick={() => dispatch(handleThemeSwitch())}
    >
      <ThemeInfo>
        dark mode {isDarkModeOn ? `on` : `off`}
      </ThemeInfo>
      <ThemeSwitchBody>
        <ThemeIconBody darkMode={isDarkModeOn}>
          <Icon/>
        </ThemeIconBody>
      </ThemeSwitchBody>
    </ThemeSwitchButton>
  )
};

export default ThemeSwitch;