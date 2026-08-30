import Reveal from "./Reveal"
import { siteConfig } from "../../data/siteConfig"



const SidebarCta = ({ delay = 0.15 }) => {
  return (
    <Reveal
      delay={delay}
      className="rounded-[20px] bg-accent p-8 text-center"
    >
      <h3 className="mb-2 text-lg font-bold text-dark">
        You have a different questions?
      </h3>

      <p className="mb-5 text-sm text-dark/80">
        Our team will answer all your questions. We ensure a quick response.
      </p>

      <a
        href={`tel:${siteConfig.phone}`}
        className="inline-flex items-center gap-2 text-lg font-bold text-dark hover:underline"
      >
        <img
          src="/images/icon-sidebar-cta-phone.svg"
          alt="Phone Icon"
          className="h-5 w-5"
        />
        {siteConfig.phone}
      </a>
    </Reveal>
  )
}

export default SidebarCta