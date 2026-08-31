import { useState } from "react"
import SectionTitle from "../../ui/SectionTitle"
import Reveal from "../../ui/Reveal"
import { Link } from "react-router-dom"
import { howItWorks } from "../../../data/howItWorks.js"


const HowItWorks = () => {

  const defaultActive = howItWorks.findIndex((s) => s.active); // retorna el index que tenga active en true
  const [active, setActive] = useState(
    defaultActive === -1 ? 0 : defaultActive                   // Si por defecto no hay ningun true, setActive sera 0, si lo hay sera el index de ese true
  )

  return (
    <>
      <section className="py-20 lg:py-[100px]">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle
                eyebrown='How it work'
                title='Step-by-Step guide to social'
                accent='success'
                description='Our step-by-step guide to social success outlines a clear process to elevate your brand. From strategy creation
                and content development to campaing execution and performance tracking'
              />

              <Link className="group relative mt-6 hidden h-[140px] w-[140px] items-center justify-center rounded-full border border-divider text-center
              text-sm font-bold text-primary capitalize transition-color duration-300 hover:border-accent sm:flex">
                Start your journey
                <span className="absolute ring-4 bottom-4 flex h-8 w-8 items-center justify-center rounded-full bg-accent transition-transform
                duration-300 group-hover:rotate-45"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 text-dark sm:h-6 sm:w-6"
                  >
                    <path
                      d="M5 12h14M13 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>

            <div className="flex flex-col gap-4">
              {howItWorks.map((step, i) => (
                <Reveal
                  key={step.no}
                  delay={i * 0.15}
                  as="div"
                  className={`
                    relative cursor-pointer overflow-hidden rounded-[20px] group border transition-colors duration-300
                    ${active === i ? "border-accent bg-accent/10" : "border-divider"}  
                  `}
                >
                  {/*
                    EFECTO "WIPE" DE LA IMAGEN AL HACER HOVER
                    ------------------------------------------
                    Es puro CSS (Tailwind), no depende de React ni del estado `active`.

                    1. La tarjeta padre tiene la clase `group` + `relative` (necesario para
                      que el `absolute` de esta imagen se posicione DENTRO de la tarjeta
                      y no respecto a un ancestro más arriba en el árbol).
                    2. La imagen arranca con `w-0` (invisible, ancho 0).
                    3. Al hacer hover sobre `.group`, Tailwind activa `group-hover:w-full`
                      y la imagen "crece" de 0 a 100% de ancho.
                    4. `transition-all duration-300` anima ese cambio de ancho -> efecto
                      de despliegue de izquierda a derecha.
                    5. `overflow-hidden` en la tarjeta recorta la imagen mientras crece.

                    Si el hover deja de animarse o la imagen se desborda de la tarjeta,
                    revisar que la tarjeta conserve `relative` + `overflow-hidden`.
                  */}
                  <img
                    src={step.image}
                    alt={step.title}
                    className="h-full w-0 group-hover:w-full transition-all duration-300 -z-1 opacity-20 rounded-full object-cover absolute"
                  />

                  <div
                    onMouseEnter={() => setActive(i)}
                    className="flex items-center justify-between gap-6 p-6">
                    <div className="flex items-center gap-5">
                      <div>
                        <h3 className="mb-1 text-lg font-bold text-primary capitalize">{step.title}</h3>
                        <p className="mb-0 text-sm">{step.excerpt}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HowItWorks