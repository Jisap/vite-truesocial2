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
          </div>
        </div>
      </section>
    </>
  )
}

export default WhyChooseUs