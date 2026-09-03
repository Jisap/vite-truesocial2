import Counter from "../../ui/Counter"
import Reveal from "../../ui/Reveal"
import RevealImage from "../../ui/RevealImage"
import SectionTitle from "../../ui/SectionTitle"
// import SatisfiedClientsBadge from "../../../data/solution"


const OurSolution = () => {
  return (
    <>
      <section className="py20 lg:py-[100px]">
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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurSolution