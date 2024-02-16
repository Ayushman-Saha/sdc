import {  useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
// import useDarkSide from "../../hooks/useDarkSide";
 
export default function Switcher({colorTheme, setTheme}) {
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };
 
    return (
        (window.innerWidth > 768) ?
        <>
            <DarkModeSwitch
                style={{ marginTop: "10px", marginRight:"24px" }}
                checked={darkSide}
                onChange={toggleDarkMode}
                size={30}
            />
        </> : 
        <>
        <DarkModeSwitch
            style={{ marginTop: "3px", marginRight:"24px" }}
            checked={darkSide}
            onChange={toggleDarkMode}
            size={20}
        />
    </>
    );
}