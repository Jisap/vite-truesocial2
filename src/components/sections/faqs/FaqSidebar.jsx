import Reveal from "../../../components/ui/Reveal"
import SidebarCta from "../../../components/ui/SidebarCta"
import { faqCategories } from "@/data/faqCategories"



const FaqSidebar = () => {
  return (
    <>
      <aside className="flex flex-col gap-8 lg:sticky lg:top-32">
        <Reveal className="rounded-[20px] border border-divider p-8">
          <ul className="m-0 flex list-none flex-col gap-4 p-0">
            {faqCategories.map((cat) => (
              <li
                key={cat.id}
                className="border-b border-divider pb-4 capitalize last:border-0 last:pb-0"
              >
                <a href={`#${cat.id}`} className="text-body transition-colors duration-300 hover:text-accent">
                  {cat.navLabel}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <SidebarCta delay={0.25} />
      </aside>
    </>
  )
}

export default FaqSidebar