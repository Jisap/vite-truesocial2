import { useEffect, useRef, useState } from "react"


/**
 *  En lugar de usar el cursor normal del navegador, creamos dos círculos que siguen el mouse con diferentes velocidades.
 */

const CustomCursor = () => {
  const dotRef = useRef(null);                   // Punto pequeño que sigue al mouse.
  const outlineRef = useRef(null);               // Contorno que sigue al mouse con un pequeño delay.
  const [enabled, setEnabled] = useState(false); // Estado para habilitar/deshabilitar el cursor.

  useEffect(() => {
    const supportsHover = window.matchMedia("(hover:hover) and (pointer: fine)").matches; // Detecta si el dispositivo tiene soporte para mouse.
    setEnabled(supportsHover);                                                            // Si el dispositivo tiene soporte para mouse, habilita el cursor.

    if (!supportsHover) return;

    // Ocultar cursor nativo
    document.body.style.cursor = 'none';

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    // Cuando se mueve el mouse se actualiza la posición del punto.
    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        // Centrar el punto en el cursor
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
    }

    let raf;
    // El contorno NO va directo, sino que "persigue" al punto
    const loop = () => {
      outlineX += (mouseX - outlineX) * 0.15;  // Aquí se crea el retardo,
      outlineY += (mouseY - outlineY) * 0.15;

      if (outlineRef.current) {
        // Centrar el contorno
        outlineRef.current.style.transform = `translate(${outlineX}px, ${outlineY}px) translate(-50%, -50%)`;
      }

      raf = requestAnimationFrame(loop);            // requestAnimationFrame dibuja la animación lo más suave posible.
    };

    window.addEventListener("mousemove", onMove);   // Agrega el event listener para el mouse.
    raf = requestAnimationFrame(loop);              // Inicia el loop de animación.

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.body.style.cursor = ''; // Restaurar cursor nativo
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Punto central pequeño */}
      <div
        ref={dotRef}
        className="cursor-dot h-2 w-2 bg-accent"
      />

      {/* Contorno que sigue con delay */}
      <div
        ref={outlineRef}
        className="cursor-outline h-8 w-8 border border-accent/70"
      />
    </>
  )
}

export default CustomCursor