import Reveal from "../../ui/Reveal"
import SidebarCta from "../../ui/SidebarCta"
import { projectMetaDefaults, projectShareLinks } from "@/data/projectDetail"



const ProjectSidebar = ({ project }) => {

  const metaItems = [
    { label: "project name", value: project.title },
    { label: "category", value: project.tag },
    { label: "clients", value: projectMetaDefaults.client },
    { label: "date", value: projectMetaDefaults.date },
    { label: "duration", value: projectMetaDefaults.duration },
  ]

  return (
    <>
      <aside className="flex flex-col gap-8">
        <Reveal className="rounded-[20px] border border-divider p-8">
          <div className="flex flex-col gap-5">
            {metaItems.map((item) => (
              <div key={item.label} className="border-b border-divider pb-5 last-border-0 last-pb-0">
                <h3 className="mb-1 text-sm font-bold text-primary capitalize">{item.label}</h3>

                <p className="mb-0 text-sm capitalize">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="">
            <span className="text-sm font-bold text-primary">Share: </span>
            <ul className="flex gap-2">
              {projectShareLinks.map((s) => (
                <li key={s.icon} className="mt-2">
                  <a
                    href={s.href}
                    aria-label={s.icon}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-divider text-primary transition-colors duration-300
                    hover:border-accent hover:text-accent"
                  >
                    <i className={s.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <SidebarCta delay={0.25} />
      </aside>
    </>
  )
}

export default ProjectSidebar