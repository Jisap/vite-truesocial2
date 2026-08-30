import { serviceCategories } from "../../../data/serviceDetail"
import Reveal from "../../../components/ui/Reveal"
import SidebarCta from "../../../components/ui/SidebarCta"



const ServiceSidebar = () => {
  return (
    <aside className="flex flex-col gap-8">
      <Reveal className="rounded-[20px] border border-divider p-8">
        <h3 className="mb-6 text-lg font-bold text-primary capitalize">
          services category
        </h3>

        <ul className="m-0 flex list-none flex-col gap-4 p-0">
          {serviceCategories.map((cat) => (
            <li key={cat} className="border-b border-divider pb-4 capitalize last:border-0 last:pb-0">
              <a href="#" className="text-body transition-colors duration-300 hover:text-accent">
                {cat}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      <SidebarCta />
    </aside>
  )
}

export default ServiceSidebar