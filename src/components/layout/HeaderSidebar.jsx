import { siteConfig, socialLinks } from "@/data/siteConfig"
import useLockBodyScroll from "../../hooks/useLockBodyScroll"


const contactItems = [
  { icon: "/images/icon-phone-accent.svg", label: "Phone", value: siteConfig.phone },
  { icon: "/images/icon-mail-accent.svg", label: "Email", value: siteConfig.email },
  { icon: "/images/icon-location-accent.svg", label: "Address", value: siteConfig.address }
]

const HeaderSidebar = ({ open, onClose }) => {

  useLockBodyScroll(open); // Bloquea el scroll del <body> mientras el sidebar esté abierto

  return (
    <>
      {/* Overlay oscuro que cubre toda la pantalla.
      - onClick cierra el sidebar al hacer click fuera del panel
      - opacity + pointer-events controlan la animación de entrada/salida
        y evitan que se pueda interactuar con él cuando está cerrado
      - aria-hidden debe reflejar el estado real (!open), no ser fijo 
      */}
      <div
        onClick={onClose} // Establece el estado de open en false, cerrando el sidebar
        aria-hidden={!open}
        className={`
          fixed inset-0 z-100 bg-black/60 transition-opacity duration-300
          ${open ? "opacity-100" : "pointer-events-none opacity-0"}  
        `}
      >
        {/* Panel deslizante del sidebar.
            - stopPropagation evita que el click DENTRO del panel
              se propague al overlay y lo cierre accidentalmente
            - translate-x-full / translate-x-0 generan el efecto "drawer" 
        */}
        <div
          onClick={(e) => e.stopPropagation()}
          className={`
          fixed top-0 right-0 z-101 h-full w-full max-w-[375px] bg-secondary px-[30px] py-[80px] transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* Botón de cierre explícito */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar menú lateral"
            className="absolute top-[30px] right-[37px] flex h-9 w-9 items-center justify-center rounded-full border border-primary text-primary transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          {/* Bloque de datos de contacto, generado dinámicamente
              a partir del array contactItems 
          */}
          <div className="mt-16 flex flex-col gap-8">
            {contactItems.map((item) => (
              <div key={item.label} className="border-b border-divider pb-8 text-center">
                <img src={item.icon} alt="" className="mx-auto mb-5 h-10 w-10" />

                <h3 className="mb-2 text-[22px] font-bold text-primary capitalize">
                  {item.label}
                </h3>

                <p className="mb-0 text-body">
                  {item.value}
                </p>
              </div>
            ))}

            {/* Bloque de redes sociales */}
            <div className="text-center">
              <h3 className="mb-5 text-[22px] font-bold text-primary capitalize">
                Stay Connected
              </h3>

              <ul className="mb-5 flex items-center justify-center gap-2 text-[22px] font-bold text-primary">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      aria-label={link.name}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-accent text-accent 
                      transition-colors duration-300 hover:border-primary"
                    >
                      <i className={link.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderSidebar