import React from "react";
import { Icon, ThemeIconBody, ThemeInfo, ThemeSwitchBody, ThemeSwitchButton } from "./styled";

const ThemeSwitch = () => {
    return (
        <ThemeSwitchButton>
            <ThemeInfo>
                dark mode on
            </ThemeInfo>
            <ThemeSwitchBody>
                <ThemeIconBody>
                    <Icon />
                </ThemeIconBody>
            </ThemeSwitchBody>
        </ThemeSwitchButton>
    )
};

export default ThemeSwitch;