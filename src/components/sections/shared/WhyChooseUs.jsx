import Button from "../../ui/Button"
import Reveal from "../../ui/Reveal"
import SectionTitle from "../../ui/SectionTitle"
import { whyChooseLeft, whyChooseRight } from "../../../data/whyChooseUs.js"


const ChoiceList = ({ items }) => {
  return (
    <div className="flex flex-col gap-10">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.25}>
          <h3 className="mb-3 text-lg font-bold text-primary capitalize">
            {item.title}
          </h3>

          <p className="mb-0 text-sm">
            {item.excerpt}
          </p>
        </Reveal>
      ))}
    </div>
  )
}

const WhyChooseUs = () => {
  return (
    <>
      <section className="py-20 lg:py-[100px]">
        <div className="container-custom">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6 border-b border-primary/20 pb-10">
            <SectionTitle
              eyebrown="Why choose us"
              title="Creative"
              accent="social strategies"
              className="mb-0 max-w-[605px]"
            />

            <Reveal delay={0.25}>
              <Button href="/contact">
                contac us
              </Button>
            </Reveal>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.2fr_1fr]">
            <ChoiceList items={whyChooseLeft} />

            <div className="relative order-first mx-auto aspect-square w-full max-w-[380px] lg:order-none">
              <img
                src="/images/why-choose-circle.png"
                alt="WhyChooseImage"
                className="animate-spin-slow pointer-events-none absolute inset-0 z-0 h-full w-full drop-shadow-[0_0_30px_rgba(191,247,71,0.15)]"
              />

              <div className="absolute top-1/2 left-1/2 z-10 w-[61%] -translate-x-1/2 -translate-y-1/2">
                <img
                  src="/images/why-choose-img.png"
                  alt="why choose us"
                  className="w-full rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhyChooseUs