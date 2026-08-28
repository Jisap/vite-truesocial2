import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"
// import { splitWords, splitChars } from "@/lib/splitText"


gsap.registerPlugin(ScrollTrigger);

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


const AnimatedText = () => {
  return (
    <div>AnimatedText</div>
  )
}

export default AnimatedText