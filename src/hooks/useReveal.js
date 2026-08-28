import { useEffect, useRef, useState } from "react"

/**
 * Hook de Intersection Observer que retorna un ref y un estado booleano que
 * cambia a true cuando el elemento entra en el viewport.
 */

export const useReveal = ({ delay = 0, threshold = 0.15 }) => {
  // Recibe como parámetros un delay y un threshold, siendo este último
  // el porcentaje de visibilidad del elemento para que se considere que ha entrado en el viewport
  // Por defecto, el delay es 0 y el threshold es 0.15 (15%)
  // El delay es un tiempo en segundos que se espera antes de que el elemento sea considerado visible
  // El threshold es un número entre 0 y 1 que indica el porcentaje de visibilidad del elemento para que se considere que ha entrado en el viewport

  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;                                                   // Se crea una referencia al elemento
    if (!node) return;                                                          // Si no hay elemento, se sale del hook

    const observer = new IntersectionObserver(                                  // Se crea un observer que observa el elemento
      ([entry]) => {                                                            // Cuando el elemento entra en el viewport
        if (entry.isIntersecting) {                                             // Si el elemento es visible
          const timer = setTimeout(() => setRevealed(true), delay * 1000);      // Se espera el delay y se cambia el estado a true
          observer.disconnect();                                                // Se desconecta el observer para que no se ejecute más de una vez
          return () => clearTimeout(timer);                                     // Se limpia el timer
        }
      },
      { threshold, rootMargin: "0px 0px -50px 0px" }                             // Se configuran los parámetros del observer
    );

    observer.observe(node);                                                      // Se inicia la observación del elemento
    return () => observer.disconnect();                                          // Se limpia el observer al desmontar el componente
  }, [delay, threshold])                                                         // Se ejecuta el hook cuando cambia el delay o el threshold

  return { ref, revealed }                                                       // Se retorna el ref y el estado revealed
}

