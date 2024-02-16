import { Footer } from "./components/footer/Footer"
import Header from "./components/header/Header"
import {Outlet} from "react-router-dom"
import useDarkSide from "./hooks/useDarkSide"

function Layout() {

    const [colorTheme, setTheme] = useDarkSide();

  return (
    <>
    <Header theme={colorTheme} changeTheme={setTheme}/>
    <Outlet context={[colorTheme]}/>
    <Footer theme={colorTheme}/>
    </>
  )
}

export default Layout