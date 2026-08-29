import { useReveal } from "../../hooks/useReveal"
import AnimatedText from "./AnimatedText"





const SectionTitle = ({
  eyebrown,
  title,
  accent,
  description,
  titleTag = "h2",
  align = "left",
  className = "",
  descriptionClassName = ""
}) => {

  const { ref, revealed } = useReveal({});

  return (
    <div className={`mb-10 ${align === "center" ? "text-center" : ""} ${className}`}>
      {eyebrown ? (
        <h3
          ref={ref}
          className={`
            reveal-up 
            ${revealed ? "is-revealed" : ""} 
            relative mb-5 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.1em] text-primary uppercase
        `}
        >
          <img
            src="/images/icon-sub-heading.svg"
            alt="Icono de título"
            className="h-4 w-4"
          />

          {eyebrown}
        </h3>
      ) : null}

      <AnimatedText
        as={titleTag}
        variant="chars"
        text={title}
        accent={accent}
        className={
          titleTag === "h1"
            ? "text-[38px] leading-[1.2em] font-light text-primary sm:text-[48px] lg:text-[65px]"
            : "text-[32px] leading-[1.2em] font-light text-primary sm:text-[28px] lg:text-[50px]"
        }
      />

      {description ? (
        <p className={`mt-5 mb-0 ${descriptionClassName}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}

export default SectionTitle