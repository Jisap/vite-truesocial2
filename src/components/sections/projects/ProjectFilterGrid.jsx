import { useState } from "react"
import ProjectCard from "../../ui/ProjectCard"
import { projects, projectFilters } from "@/data/projects"




const ProjectFilterGrid = () => {

  const [activeFilter, setActiveFilter] = useState("*");
  const visibleProjects =
    activeFilter === "*"
      ? projects
      : projects.filter((p) => p.categories.includes(activeFilter))

  return (
    <>
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

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} delay={i * 0.15} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ProjectFilterGrid