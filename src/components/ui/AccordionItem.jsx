import { useState } from "react"




const AccordionItem = ({ question, answer, defaultOpen = false }) => {

  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b boder-divider py-5">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 text-left text-lg font-bold text-primary"
      >
        {question}
        <span className={`
          flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-divider transition-transform duration-300
          ${open ? "rotate-45 border-accent bg-accent text-dark" : ""}`}
        >
          <i className="fa-solid fa-plus text-sm" />
        </span>
      </button>

      {/* 
          0fr = "ocupa 0 fracciones del espacio" → colapsa a cero
          1fr = "ocupa 1 fracción del espacio disponible" → se expande al tamaño necesario 
      */}
      <div className={`
        grid overflow-hidden transition-all duration-300 
        ${open
          ? "grid-rows-[1fr] pt-4 opacity-100"
          : "grid-rows-[0fr] opacity-0"}
      `}
      >
        <p className="mb-0 overflow-hidden text-sm">
          {answer}
        </p>
      </div>
    </div>
  )
}

export default AccordionItem