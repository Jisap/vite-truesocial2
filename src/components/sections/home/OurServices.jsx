import Button from "../../ui/Button"
import Reveal from "../../ui/Reveal"
import RevealImage from "../../ui/RevealImage"
import SectionTitle from "../../ui/SectionTitle"
import { services } from "../../../data/services"




const OurServices = () => {
  return (
    <section className="py-20 lg:py-[100px]">
      <div className="container-custom">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6 border-b border-primary/20 pb-10">
          <SectionTitle
            eyebrown="Services"
            title="Our social media"
            accent="services"
            className="mb-10 max-w-[605px]"
          />

          <Reveal delay={0.25}>
            <Button href="/services">
              see all services
            </Button>
          </Reveal>
        </div>

        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <RevealImage
              src="/images/services-image.jpg"
              alt="Our services"
              className="img-shine h-full w-full rounded-[20px]"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
            {services.slice(0, 4).map((service, i) => (
              <Reveal
                key={service.slug}
                delay={i * 0.2}
                className="card-premium group rounded-[20px] border border-divider p-8 transition-colors duration-300 hover:border-accent/60"
              >
                <span className="mb-6 inlineflex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 transition-all
                duration-500 ease-out group-hover:rotate-12 group-hover:bg-accent/20"
                >
                  <img
                    src={service.icon}
                    alt=""
                    className="h-7 w-7 mb-3"
                  />
                </span>

                <h3 className="mb-3 text-lg font-bold text-primary capitalize">
                  {service.title}
                </h3>

                <p className="mb-4 text-sm">
                  {service.excerpt}
                </p>

                <Button
                  href={`/SERVICES/${service.slug}`}
                  variant="readmore"
                >
                  read more
                </Button>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal
          delay={0.8}
          className="mt-14 border-t border-primary/20 pt-10 text-center"
        >
          <p className="mb-0 text-xl">
            <span className="mr-2 rounded-full bg-accent px-4 py-1 text-sm font-bold text-dark uppercase">
              Free
            </span>{" "}
            Let&apos;s make something great work together.{" "}
            <a href="/contact" className="font-bold text-accent underline-offset-4 hover:underline">
              Get Free Quote
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default OurServices