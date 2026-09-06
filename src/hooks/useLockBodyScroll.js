import { useEffect } from "react"

/**
 * Hook para bloquear el scroll del body cuando está activo (por ejemplo, al abrir un modal).
 *
 * Mientras `locked` sea `true`, aplica `overflow: hidden` al elemento `<body>`,
 * impidiendo que la página haga scroll independientemente de la cantidad de contenido.
 * Al desmontar el componente o cuando `locked` cambia a `false`, se restaura el valor
 * de `overflow` que tenía el `<body>` antes de bloquear el scroll.
 *
 * @param {boolean} locked - Indica si el scroll debe estar bloqueado.
 *   - `true`: bloquea el scroll del body.
 *   - `false`: no hace nada (el scroll queda como estaba).
 *
 * @example
 * function Modal({ isOpen }) {
 *   useLockBodyScroll(isOpen);
 *   return isOpen ? <div className="modal">Contenido</div> : null;
 * }
 */
const useLockBodyScroll = (locked) => {
  useEffect(() => {
    // Si locked es false, el efecto no hace nada. No bloquea el scroll.
    if (!locked) return;

    // Si locked es true, primero guarda el valor actual de overflow que tenía el <body>
    const original = document.body.style.overflow;

    // Luego le pone overflow: hidden al <body>, lo que impide que la página
    // haga scroll, sin importar cuánto contenido tenga.
    document.body.style.overflow = "hidden";

    // Función de limpieza: se ejecuta al desmontar el componente o antes de
    // volver a ejecutar el efecto (si `locked` cambia).
    return () => {
      // Restaura el valor original de overflow.
      document.body.style.overflow = original;
    }
  }, [locked]) // El efecto se vuelve a ejecutar cada vez que cambia `locked`.
}

export { useLockBodyScroll }
export default useLockBodyScroll