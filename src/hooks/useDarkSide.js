import { useState, useEffect } from "react";
 
export default function useDarkSide() {
    const [theme, setTheme] = useState("dark");
    const colorTheme = theme === "dark" ? "light" : "dark";
    // setTheme("dark")
    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);
        if (theme == "dark") {
            setTheme("dark")
            root.style.setProperty('background-color', '#1f2937')
        } else {
            setTheme("light")
            root.style.setProperty('background-color', '#f3f4f6')
          }
    }, [theme, colorTheme]);
 
    return [colorTheme, setTheme];
}