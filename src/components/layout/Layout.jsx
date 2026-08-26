import { useLocation } from "react-router-dom"
import Header from "./Header"
import { useEffect } from "react"



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
      <Header />
    </>
  )
}

export default Layout