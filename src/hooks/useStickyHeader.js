import { useEffect, useState } from "react"





export const useStickyHeader = () => {

  const [state, setState] = useState(false);

  useEffect(() => {

    const onScroll = () => {
      const fromTop = window.scrollY;                     // Posición actual del scroll
      if (fromTop > 600) setState("sticky");              // Si el scroll es mayor a 600px, el header será sticky
      else if (fromTop > 150) setState("hidden");         // Si el scroll es mayor a 150px, el header será hidden
      else setState("top");                               // Si el scroll es menor a 150px, el header será top
    }

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);



  return state; // top, hidden, sticky
}

