import Counter from "../../ui/Counter"
import Reveal from "../../ui/Reveal"
import RevealImage from "../../ui/RevealImage"
import SectionTitle from "../../ui/SectionTitle"
import { solutionStats } from "@/data/solution"
import SatisfiedClientsBadge from "../../../components/ui/SatisfiedClientsBadge"



const OurSolution = () => {
  return (
    <>
      <section className="py-20 lg:py-[100px]">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle
                eyebrown="Our solution"
                title="Innovation solutions for social"
                accent="success"
                description="Discover cutting-edge strategies and tailored solutions designed to amplify brand's presence,
                engage your audience, and achieve measurable results."
              />

              <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-5">
                {solutionStats.map((star, i) => (
                  <Reveal
                    key={star.label}
                    delay={i * 0.1}
                    className="flex items-center gap-3.5 rounded-[16px] border border-divider bg-secondary/30 p-3.5 sm:p-4 transition-colors duration-300 hover:border-accent/40"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 p-2">
                      <img src={star.icon} alt={star.label} className="h-full w-full object-contain" />
                    </div>

                    <div className="flex flex-col min-w-0">
                      <h3 className="text-lg font-bold text-primary sm:text-xl">
                        <Counter
                          end={star.end}
                          suffix={star.suffix}
                        />
                      </h3>

                      <p className="mb-0 text-xs text-body/70 leading-snug">
                        {star.label}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div className="relative">
              <RevealImage
                src="/images/our-soultion-image.jpg"
                alt=""
                className="image-shine aspect-4/5 w-full rounded-[20px]"
              />

              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
                <SatisfiedClientsBadge className="rounded-[20px]" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurSolution