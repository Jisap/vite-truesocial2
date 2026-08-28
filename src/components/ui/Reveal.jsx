import useReveal from "../../hooks/useReveal"

const VARIANT_CLASS = {
  up: "reveal-up",
  left: "reveal-left",
  right: "reveal-right",
  zoom: "reveal-zoom",
}




const Reveal = ({ children, variant = "up", delay = 0, as: Tag = "div", className = "" }) => {

  const { ref, revealed } = useReveal({ delay });

  return (
    <Tag
      ref={ref}
      // se define una clase base para cada variante y una clase para cuando el elemento es revelado
      className={`
        ${VARIANT_CLASS[variant]}
        ${revealed ? "is-revealed" : ""} 
        ${className}  
      `}
    >
      {children}
    </Tag>
  )
}

export default Reveal