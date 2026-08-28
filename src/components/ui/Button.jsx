import { useCallback, useRef, useState } from "react"
import { Link } from "react-router-dom"

const isInternal = (href = "") => href.startsWith("/"); // Decide el tipo de enlace. Si empieza por "/" es interno sino externo (https://...)

const useRipple = () => {
  const [ripples, setRipples] = useState([]);                // Array de "ondas" activas en pantalla en un momento dado (puede haber varias si haces clic rápido varias veces).
  const idRef = useRef(0);                                   // Un contador que nunca se pierde entre renders (por eso useRef y no useState), usado para dar un id único a cada ripple.

  // Efecto de onda al hacer click
  const addRipple = useCallback((e) => {
    const rect = e.currentTarget.getBoundingClientRect();    // rect: mide el tamaño y posición del botón en la pantalla.
    const size = Math.max(rect.width, rect.height);          // size: el ripple debe ser lo bastante grande para cubrir todo el botón, así que coge el lado mayor (ancho o alto).
    const id = idRef.current++;                              // Genera un id único para este ripple y lo guarda para poder borrarlo después.
    const ripple = {
      id,
      size,
      x: e.clientX - rect.left - size / 2,                   // x, y: calcula dónde colocar el centro del círculo, basándose en dónde ha caído el clic exacto 
      y: e.clientY - rect.top - size / 2,                    // (e.clientX/e.clientY) relativo al botón, restando la mitad del tamaño para centrarlo ahí.
    }

    setRipples((prev) => [...prev, ripple]);                 // Cuando se hace click se añade el nuevo ripple al array
    setTimeout(() => {                                       // y pasados 650ms se elimina del mismo para no acumular elementos en el DOM 
      setRipples((prev) => prev.filter((r) => r.id !== id))
    }, 650)
  }, []);

  // Componente que renderiza las ondas
  const rippleLayer = (
    <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
      {ripples.map((r) => (
        <span
          key={r.id}
          className="animate-ripple absolute rounded-full bg-white/50"
          style={{ width: r.size, height: r.size, left: r.x, top: r.y }}
        />
      ))}
    </span>
  )

  return { rippleLayer, addRipple }   // se retorna el layer y la función para crear el efecto
}



const Button = ({
  href,
  onClick,
  type = "button",
  variant = "default",
  className = "",
  children
}) => {

  const Tag = href ? (isInternal(href) ? Link : "a") : "button";         // Si no tiene href es un button pero si si lo tiene es un enlace interno y usa Link
  const { addRipple, rippleLayer } = useRipple();                        // hook para crear el efecto de onda

  // Aquí se decide que props pasarle a la etiqueta seleccionada.
  const linkProps = href                                                 // si tiene href
    ? isInternal(href)
      ? { to: href }                                                     // si es interno usa to
      : { href, target: "_blank", rel: "noopener noreferrer" }           // si es externo usa href, target y rel
    : { type };                                                          // si no tiene href usa type

  const handleClick = (e) => {                                           // En cada click 
    addRipple(e);                                                        // crea el efecto de onda
    onClick?.(e);                                                        // llama a la función onClick original si existe
  };

  // Clases para el focus-visible
  const focusRing =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-dark"

  if (variant === "readmore") {
    return (
      <Tag
        {...linkProps}        // Pasa todas las props de Link o a
        onClick={handleClick} // llama a la función handleClick que hemos creado
        // Se crea un enlace tipo "Leer más ->" con una linea inferior que crece de 0 a 100% al hacer hover
        className={`            
          group relative inline-flex items-center gap-3 pr-8 text-base font-bold text-accent transition-colors duration-300 hover:text-primary
          ${focusRing} rounded-sm
          ${className}
        `}
      >
        <span className="relative">
          {children}
          <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-current transition-all duration-300 ease-out group-hover:w-full" />
        </span>

        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="absolute right-0 h-5 w-5 -translate-y-1/2 top-1/2 transition-transform duration-300 ease-in-out group-hover:translate-x-1 group-hover:rotate-45"
        >
          <path
            d="M5 12h14M13 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Tag>
    )
  }


  if (variant === "highlighted") {
    return (
      <Tag
        {...linkProps}
        onClick={handleClick}
        // Se crea un botón sólido que al hacer hover se eleva ligeramente y cambia de color
        className={`
          relative block w-full overflow-hidden rounded-full bg-primary py-[15px] text-center text-base font-bold text-dark
          capitalize transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-accent hover:shadow-[0_16px_35px_-12px_rgba(191,247,71,0.55)]
          active:translate-y-0 active:scale-[0.98]
          ${focusRing}
          ${className}
        `}
      >
        {rippleLayer}
        {children}
      </Tag>
    )
  }

  // default: premium glassmorphic pill with gradient border, shine + ripple
  return (
    <span
      className={`
        btn-gradient-border group/btn relative mr-12.5 inline-block rounded-full p-[1.5px] transition-transform duration-500
        ease-out hover:scale-[1.03] border border-gray-50/20 active:scale-[0.97]
        ${className}
      `}
    >
      <Tag
        {...linkProps}
        onClick={handleClick}
        className={`
          relative z-10 block overflow-hidden rounded-full bg-white/10 py-[12px] pr-[58px] pl-[22px] text-[15px] font-bold text-primary
          capitalize backdrop-blur-[20px] transition-all duration-500 ease-in-out sm:py-[14px] sm:pr-[65px] sm:pl-[25px] sm:text-base
          ${focusRing}
        `}
      >
        <span className="relative z-10">
          {children}
        </span>

        {/* shine sweep, replays each hover */}
        <span
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -translate-x-full bg-gradient-to-r from transparent via-white/40 to-transparent 
          opacity-0 group-hover/btn:animate-shine group-hover/btn:opacity-100"
        />

        {rippleLayer}
      </Tag>

      {/* circular accent arrow */}
      <span className="pointer-events-none absolute top-0 right-0 z-20 flex h-[44px] w-[44px] translate-x-[44px] items-center justify-center
      rounded-full bg-accent shadow-[0_0_0_0_rgba(191,247,71,0)] transition-all duration-400 ease-in-out sm:h-[50px] sm:w-[50px] sm:translate-x-[50px]
      group-hover/btn:translate-x-[44px] sm:group-hover/btn:translate-x-[50px] group-hover/btn:rotate-45 group-hover/btn:bg-primary 
      group-hover/btn:shadow-[0_0_25px_-2px_rgba(191,247,71,0.7)]
      "
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5 text-dark sm:h-6 sm:w-6"
        >
          <path
            d="M5 12h14M13 5l7 7-7 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </span>
  )
}

export default Button