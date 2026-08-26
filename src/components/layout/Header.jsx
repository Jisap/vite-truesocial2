import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { navigation } from "@/data/navigation"
import { siteConfig, socialLinks } from "@/data/siteConfig"
import { useStickyHeader } from "../../hooks/useStickyHeader"




const Header = () => {

  const stickyState = useStickyHeader();

  const wrapperClass =
    stickyState === "sticky"
      ? "fixed inset-x-0 top-0 translate-y-0 bg-dark/90 backdrop-blur-[30px] border-b border-divider shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]"
      : stickyState === "hidden"
        ? "relative -translate-y-full"
        : "relative translate-y-0"

  return (
    <header className='main-header absolute inset-x-0 top-0 z-100 border-b border-divider'>
      <div className={`z-100 transition-all duration-300 ease-in-out ${wrapperClass}`}>
        <nav className="container-custom flex items-center justify-between py-[25px]">
          {/* Logo */}
          <Link to="/" className="m-0 p-0 transition-transform duration-300 hover:scale-105">
            <img
              src={siteConfig.logo}
              alt={`${siteConfig.name} Logo`}
              className="h-9 w-auto"
            />
          </Link>

          {/*  */}
        </nav>
      </div>
    </header>
  )
}

export default Header