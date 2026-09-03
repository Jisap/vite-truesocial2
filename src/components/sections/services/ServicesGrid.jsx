import Reveal from "../../ui/Reveal"
import Button from "../../ui/Button"
import { services } from "@/data/services"


const ServicesGrid = () => {
  return (
    <>
      <section className="py-20 lg:py-[100px]">
        <div className="container-custom grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.slug}
              delay={(i % 3) * 0.2}
              className="card-premium group rounded-[20px] border border-divider p-8 transition-all duration-500 hover:border-accent/60"
            >
              <span className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 transition-all duration-500 ease-out
              group-hover:rotate-12 gorup-hover:bg-accent/20"
              >
                <img
                  src={service.icon}
                  alt=""
                  className="h-7 w-7"
                />
              </span>

              <h3 className="mb-3 text-lg font-bold text-primary capitalize">{service.title}</h3>
              <p className="mb-4 text-sm">{service.excerpt}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}

export default ServicesGrid