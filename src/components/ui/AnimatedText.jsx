import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"
import { splitWords, splitChars } from "@/lib/splitText"


gsap.registerPlugin(ScrollTrigger);


// Renderiza el texto separado en palabras o letras según la variante
const Words = ({ text, variant }) => {
  const words = splitWords(text || ""); // Separa el texto en palabras
  return words.map((word, wi) => (      // Itera sobre cada palabra
    <span
      key={wi}
      className="inline-block overflow-hidden align-top"
    >
      {variant === "chars" ? (          // Si la variante es "chars", separa cada palabra en letras
        splitChars(word).map((char, ci) => (
          <span
            key={ci}
            data-anime-unit
            className="inline-block"
          >
            {char}
          </span>
        ))
      ) : (                           // Si no es "chars", muestra la palabra completa
        <span
          data-anime-unit
          className="inline-block"
        >
          {word}
        </span>
      )}
      {wi < words.length - 1 ? "\u00A0" : ""} {/* Agrega un espacio no rompible entre palabras */}
    </span>
  ))
}



const AnimatedText = ({
  //as?: React.ElementType
  as: Tag = "h2",           // Etiqueta HTML (o componente) en la que se renderiza el texto. Permite usar el mismo componente como <h1>, <h2>, <p>, etc. según el contexto semántico donde se use.
  variant = "words",        // Variante de animación: "words" anima palabra por palabra, "chars" anima letra por letra.
  text = "",                // Texto principal a animar.
  accent = "",              // Texto adicional opcional que se muestra con la clase "text-accent" (para resaltar una parte de la frase).
  className = ""            // Clases CSS para el elemento raíz.
}) => {

  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;                                          // Se crea una referencia al elemento
    if (!el) return;                                                  // Si no hay elemento, se sale del hook

    const targets = el.querySelectorAll("[data-anime-unit]");        // Se selecciona todos los elementos con el atributo data-anime-unit
    const ctx = gsap.context(() => {                                 // Se crea un contexto de GSAP
      gsap.from(targets, {
        x: variant === "chars" ? 10 : 20,                            // Se define la dirección de la animación
        autoAlpha: 0,                                                // Se define la opacidad inicial
        duration: 0.8,                                               // Se define la duración de la animación
        ease: "power2.out",                                          // Se define la función de easing
        stagger: variant === "chars" ? 0.02 : 0.05,                  // Se define el stagger
        scrollTrigger: { trigger: el, start: "top 85%" }             // Se define el trigger
        // ScrollTrigger: Configuración del disparador del ScrollTrigger.
        // - trigger: Elemento HTML que iniciará la animación.
        // - start: Posición en el viewport que activará la animación (ej: "top 85%" significa que cuando la parte superior del trigger
        //  esté al 85% de la altura del viewport, se iniciará la animación).
      });
    }, el);

    return () => ctx.revert();
  }, [variant, text, accent])

  return (
    <Tag
      ref={ref}
      className={className}
    >
      {/* Se renderiza el texto separado en palabras o letras según la variante */}
      <Words text={text} variant={variant} />
      {/* Si hay texto de acento, se renderiza con la clase text-accent */}
      {accent ? (
        <>
          {" "}
          <span className="text-accent">
            <Words text={accent} variant={variant} />
          </span>
        </>
      ) : null}
    </Tag>
  )
}

export default AnimatedText