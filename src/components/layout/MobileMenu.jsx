import { useState } from "react"
import { Link } from "react-router-dom"
import { navigation } from "@/data/navigation"
import { siteConfig } from "@/data/siteConfig"
import useLockBodyScroll from "@/hooks/useLockBodyScroll"


const MobileMenu = ({ open, onClose }) => {

  useLockBodyScroll(open); // Bloquea el scroll del <body> mientras el sidebar esté abierto
  const [openSubmenu, setOpenSubmenu] = useState(null); // Controla que submenú está desplegado. null = ninguno abierto


  return (
    // Contenedor de pantalla completa que actúa como el menú móvil.
    // translate-x-full lo saca de la vista cuando open=false
    <div className={`
      fixed inset-0 z-101 bg-dark transition-transform duration-300 ease-in-out lg:hidden
      ${open ? "translate-x-0" : "translate-x-full"}
    `}
    >
      {/* Cabecera del menú: logo + botón de cerrar */}
      <div className="flex items-center justify-between border-b border-divider px-6 py-5">
        <Link to="/" onClick={onClose}>
          <img
            src={siteConfig.logo}
            alt={siteConfig.name}
            className="h-8 w-auto"
          />
        </Link>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-dark"
        >
          <i className="fa-solid fa-xmark" />
        </button>
      </div>

      {/* Lista de navegación con scroll propio (por si hay muchos items) */}
      <nav className="max-h-[calc(100%-80px)] overflow-y-auto px-6 py-6">
        <ul className="flex flex-col divide-y divide-divider">
          {navigation.map((item) => (
            <li key={item.label} className="py-3">
              {item.children ? (
                <>
                  {/* Botón que expande/colapsa el submenú de este item */}
                  <button
                    type="button"
                    onClick={() => setOpenSubmenu(openSubmenu === item.label ? null : item.label)}
                    aria-expanded={openSubmenu === item.label}
                    className="flex w-full items-center justify-between text-lg font-semibold text-primary capitalize"
                  >
                    {item.label}
                    <i className={`fa-solid fa-chevron-down text-sm transition-transform duration-300
                      ${openSubmenu === item.label ? "rotate-180 text-accent" : ""}
                    `} />
                  </button>

                  {/* Truco grid-rows [0fr]→[1fr] para animar altura
                      de "auto" sin conocerla de antemano */}
                  <div className={`
                    grid overflow-hidden transition-all duration-300 
                    ${openSubmenu === item.label ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
                    `}
                  >
                    <ul className="overflow-hidden">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            to={child.href}
                            onClick={onClose}
                            className="block py-2 pl-4 text-body capitalize transition-colors duration-300 hover:text-accent"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                // Item de navegación simple, sin hijos
                <Link
                  to={item.href}
                  onClick={onClose}
                  className="block text-lg font-semibold text-primary capitalize transition-colors duration-300 hover:text-accent"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default MobileMenu