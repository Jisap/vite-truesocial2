import { useEffect, useRef, useState } from "react"

/**
 * hook personalizado que anima un número desde 0 hasta end, pero solo cuando el elemento entra en el viewport.
 */


const useCountUp = (end, { duration = 2000, decimals = 0 }) => {

  const ref = useRef(null);                                              // se lo asignamos al <span> para poder observarlo
  const [value, setValue] = useState(0);                                 // el número que se va mostrando

  // started es clave: al ser un ref (no un state), 
  // cambiarlo no provoca un re-render, y su valor persiste entre renders. 
  // Se usa como guardia para que, aunque el IntersectionObserver siga disparando 
  // eventos al hacer scroll arriba y abajo, la animación no se reinicie cada vez.

  const started = useRef(false);                                         // "candado" para que la animación solo se dispare una vez

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let cancelled = false;
    let rafId;

    // Esto vigila el <span> y ejecuta el callback cuando cambia su visibilidad respecto al viewport.
    const observer = new IntersectionObserver(
      ([entry]) => {                                                                    // El array [entry] es porque el observer puede vigilar varios nodos y devuelve un array de entradas; aquí solo hay uno, así que se desestructura directamente el primero.
        if (entry.isIntersecting && !started.current) {                                 // nos aseguramos de que el elemento esté en el viewport y que la animación no se haya disparado ya.
          started.current = true;                                                       // una vez que arrancamos, fijamos started en true y no volvemos a entrar.
          const start = performance.now();                                              // Definimos el momento en que empieza la animación
          const factor = 10 ** decimals;                                                // y la prop para manejar decimales

          const tick = (now) => {                                                       // Función que se ejecuta en cada frame
            if (cancelled) return;                                                      // si se cancela la animación, salimos
            const progress = Math.min(Math.max((now - start) / duration, 0), 1);        // Calcula cuánto tiempo ha pasado y lo normaliza entre 0 y 1
            const eased = 1 - (1 - progress) * (1 - progress);                          // Le da una curva suave al avance (easeOutCubic)
            setValue(Math.round(eased * end * factor) / factor);                        // Actualiza el valor mostrando el número animado. Se redondea a los decimales pedidos multiplicando y dividiendo por la potencia de 10

            if (progress < 1) {                                                         // Si la animación no ha terminado, pedimos el siguiente frame
              rafId = requestAnimationFrame(tick);
            }
          };

          rafId = requestAnimationFrame(tick);                                          // arranca el bucle de animación
        }
      },
      { threshold: 0.4 }                                                                // dispara cuando al menos el 40% del elemento sea visible
    )

    observer.observe(node);                                                             // empezamos a vigilar al <span>

    return () => {
      cancelled = true;                                                                 // al desmontar, cancelamos la animación y paramos el observer
      rafId && cancelAnimationFrame(rafId);
      observer.disconnect();
    }
  }, [end, duration, decimals]);


  return { ref, value };
}

export default useCountUp