import { createContext } from "react";

let ThemeContext

function getThemeContext(){

    if(!ThemeContext)ThemeContext = createContext('light-theme');
    return ThemeContext;
}

export {
    getThemeContext
} 