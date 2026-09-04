import { Link } from "react-router-dom"
import Reveal from "./Reveal"




const ProjectCard = ({ project, delay }) => {
  return (
    <>
      <Reveal
        delay={delay}
        className="card-premium group relative overflow-hidden rounded-[20px]"
      >
        <Link
          to={`/projects/${project.slug}`}
          className="img-shine block aspect-[4/5]"
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
          />
        </Link>

        <Link
          to={`/projects/${project.slug}`}
          className="absolute top-5 left-5 rounded-full bg-primary/90 px-4 py-2 text-xs font-bold text-dark capitalize backdrop-blur-sm"
        >
          {project.tag}
        </Link>

        <Link
          to={`/projects/${project.slug}`}
          aria-label={project.title}
          className="absolute top-5 right-5 flex h-11 w-11 -rotate-45 items-center justify-center rounded-full bg-accent opacity-0
          shadow-[0_0_0_20px_-4px_rgba(191,247,71,0.7)] transition-all duration-400 ease-out group-hover:rotate-0 group-hover:opacity-100"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-dark">
            <path
              d="M7 17 17 7M9 7h8v8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </Reveal>
    </>
  )
}

export default ProjectCard