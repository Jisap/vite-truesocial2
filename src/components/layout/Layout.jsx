import { useLocation } from "react-router-dom"
import Header from "./Header"
import { useEffect } from "react"
import Preloader from "./Preloader";
import CustomCursor from "../ui/CustomCursor";



const Layout = () => {

  const { pathname } = useLocation();

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant" in window ? "instant" : "auto"
    });
  }, [pathname]);




  return (
    <>
      <Preloader />
      <CustomCursor />
      <Header />
    </>
  )
}

export default Layout