import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"


gsap.registerPlugin(ScrollTrigger)

const RevealImage = ({
  src,
  alt = "",
  className = ""
}) => {

  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;

    if (!container || !image) return;

    const ctx = gsap.context(() => {                                            // Se crea el contexto de gsap
      const tl = gsap.timeline({                                                // Se crea la timeline
        scrollTrigger: { trigger: container, start: "top 85%" },                 // Se define el trigger del scroll para que se ejecute cuando el elemento este al 85% de la pantalla
      });
      tl.set(container, { autoAlpha: 1 });                                      // Se establece la opacidad del contenedor a 1 
      tl.from(container, { duration: 1, xPercent: -100, ease: "power2.out" })   // Se anima el contenedor desde la izquierda
      tl.from(                                                                  // Se anima la imagen desde la derecha 
        image,
        { duration: 1, xPercent: 100, ease: "power2.out" },
        "<" // Hace que la animación de la imagen se ejecute al mismo tiempo que la animación del contenedor
      )
    }, container);

    return () => ctx.revert();

  }, [])

  return (
    <div
      ref={containerRef}
      className={`invisible relative inline-flex overflow-hidden ${className}`}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="h-full w-full origin-left object-cover"
      />
    </div>
  )
}

export default RevealImage