// import { useState } from "react"
// import ProjectCard from "../../ui/ProjectCard"
// import { projects, projectFilters } from "@/data/projects"




// const ProjectFilterGrid = () => {

//   const [activeFilter, setActiveFilter] = useState("*");
//   const visibleProjects =
//     activeFilter === "*"
//       ? projects
//       : projects.filter((p) => p.categories.includes(activeFilter))

//   return (
//     <>
//       <section className="py-20 lg:py-[100px]">
//         <div className="container-custom">
//           <ul className="mb-12 flex flex-wrap justify-center gap-3">
//             {projectFilters.map((filter) => (
//               <li key={filter.key}>
//                 <button
//                   type="button"
//                   onClick={() => setActiveFilter(filter.key)}
//                   className={`
//                     rounded-full border px-6 py-2 text-sm font-bold capitalize transition-colors duration-300
//                     ${activeFilter === filter.key
//                       ? "border-accent bg-accent text-dark"
//                       : "border-divider hover:border-accent hover:text-accent"
//                     }  
//                   `}
//                 >
//                   {filter.label}
//                 </button>
//               </li>
//             ))}
//           </ul>

//           <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
//             {visibleProjects.map((project, i) => (
//               <ProjectCard key={project.id} project={project} delay={(i % 3) * 0.1} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default ProjectFilterGrid

import { useState, useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ProjectCard from "../../ui/ProjectCard"
import { projects, projectFilters } from "@/data/projects"

// Registramos el plugin ScrollTrigger de GSAP
gsap.registerPlugin(ScrollTrigger)

const ProjectFilterGrid = () => {
  const [activeFilter, setActiveFilter] = useState("*")
  const gridRef = useRef(null)

  const visibleProjects =
    activeFilter === "*"
      ? projects
      : projects.filter((p) => p.categories.includes(activeFilter))

  useLayoutEffect(() => { // se ejecuta cada vez que cambia el filtro
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card-item",
        {
          opacity: 0,
          y: 60,
          scale: 0.94,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: {
            each: 0.1, // 100ms entre tarjetas
            grid: "auto",
            from: "start",
          },
          // Solo se activa cuando el grid entra en pantalla al hacer scroll
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 85%", // Dispara cuando la parte superior del grid llega al 85% de la pantalla
            toggleActions: "play none none none",
            once: true, // Se reproduce una vez en el scroll
          },
          clearProps: "all",
        }
      )
    }, gridRef)

    return () => ctx.revert()
  }, [activeFilter])

  return (
    <section className="py-20 lg:py-[100px]">
      <div className="container-custom">
        <ul className="mb-12 flex flex-wrap justify-center gap-3">
          {projectFilters.map((filter) => (
            <li key={filter.key}>
              <button
                type="button"
                onClick={() => setActiveFilter(filter.key)}
                className={`
                  rounded-full border px-6 py-2 text-sm font-bold capitalize transition-colors duration-300
                  ${activeFilter === filter.key
                    ? "border-accent bg-accent text-dark"
                    : "border-divider hover:border-accent hover:text-accent"
                  }  
                `}
              >
                {filter.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Contenedor del Grid */}
        <div ref={gridRef} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <div key={project.id} className="project-card-item">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectFilterGrid
