import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { navigation } from "@/data/navigation"
import { siteConfig, socialLinks } from "@/data/siteConfig"
import { useStickyHeader } from "../../hooks/useStickyHeader"
import HeaderSidebar from "./HeaderSidebar"




const Header = () => {

  const stickyState = useStickyHeader();
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

          {/* Desktop Menu */}
          <div className="ml-10 hidden flex-1 items-center lg:flex">
            <ul className="flex items-center">
              {navigation.map((item) => (
                <li
                  key={item.label}
                  className="group relative"
                >
                  {item.children ? (
                    <>
                      <button
                        type="button"
                        className="flex items-center gap-2 px-3.75 py-3.75 text-base font-semibold text-primary capitalize transition-colors duration-300 group-hover:text-accent"
                      >
                        {item.label}
                        <i className="fa-solid fa-chevron-down text-xs transition-transform duration-300 group-hover:rotate-180"></i>

                        <ul className="invisible absolute top-full left-0 z-10 w-[230px] origin-top scale-y-[0.8] rounded-[20px] bg-accent py-0 opacity-0 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.5)]
                        transition-all duration-300 ease-in-out group-hover:visible group-hover:scale-y-100 group-hover:py-[5px] group-hover:opacity-100"
                        >
                          {item.children.map((child) => (
                            <li
                              key={child.label}

                            >
                              <Link
                                to={child.href}
                                className="block px-5 py-[6px] text-dark capitalize transition-all duration-300 hover:pl-6 hover:text-primary"
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </button>
                    </>
                  ) : (
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `relative block px-[15px] text-base font-semibold capitalize transition-colors duration-300 after:absolute after:bottom-0
                        after:left-[15px] after:h-[2px] after:bg-accent after:transition-all after:duration-300 after:content-['']
                        hover:text-accent hover:after:w-[calc(100%-30px)] 
                        ${isActive ? "text-accent after:w-[calc(100%-30px)]" : "text-primary after:w-0"}
                      `
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Sidebar trigger */}
          <div className="hidden items-center lg:flex">
            <ul className="mr-5 flex items-center">
              {socialLinks.map((s) => (
                <li key={s.name} className="mr-4 last:mr-0">
                  <a
                    href={s.href}
                    aria-label={s.name}
                    className="inline-block text-xl text-accent transition-all duration-300 hover:-translate-y-0.5 hover:scale-110
                      hover:text-primary hover:drop-shadow-[0_0_8px_rgba(191,247,71,0.7)]"
                  >
                    <i className={s.icon}></i>
                  </a>
                </li>
              ))}
            </ul>

            {/* Botón para abrir el sidebar */}
            <button
              type="button"
              aria-label="Abrir menú lateral"
              onClick={() => setSidebarOpen(true)} // Establece el estado de open en true, abriendo el sidebar
              className="flex h-9 w-9 items-center justify-center rounded-full bg-divider transition-all duration-300 hover:scale-110 hover:bg-accent"
            >
              <span className="grid h-3 w-3 grid-cols-2 gap-[3px]">
                {Array.from({ length: 4 }).map((_, i) => (
                  <span key={i} className="h-[3px] w-[3px] rounded-full bg-primary"></span>
                ))}
              </span>
            </button>
          </div>

          {/* Mobile trigger */}

        </nav>
      </div>

      <HeaderSidebar
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
    </header>
  )
}

export default Header