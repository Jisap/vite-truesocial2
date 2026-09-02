import Reveal from "../../ui/Reveal"
import RevealImage from "../../ui/RevealImage"
import SectionTitle from "../../ui/SectionTitle"
import { approachItems } from "@/data/approach"




const OurApproach = () => {
  return (
    <>
      <section className="py-20 lg:py-[100px]">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle
                eyebrown="our approach"
                title="Strategic"
                accent="approach to social success"
                description="Our strategic approach combines innovatieve planning, data-driven insights, creative execution
                to help your brand thrive on social media. We focus on building meaningful connections, boosting engagement
                and driving measurable results."
              />

              <div className="grid gap-6 sm:grid-cols-2">
                {approachItems.map((item, i) => (
                  <Reveal key={item.title} delay={0.4 + i * 0.2} className="rounded-[20px] border border-divider p-6">
                    <img src={item.icon} alt="" className="mb-4 h-10 w-10" />

                    <h3 className="mb-2 text-lg font-bold text-primary capitalize">
                      {item.title}
                    </h3>

                    <p className="mb-0 text-sm">
                      {item.excerpt}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurApproach