import Button from "../../ui/Button"
import Reveal from "../../ui/Reveal"
import RevealImage from "../../ui/RevealImage"
import SatisfiedClientsBadge from "../../ui/SatisfiedClientsBadge"
import SectionTitle from "../../ui/SectionTitle"




const OurFeature = () => {
  return (
    <>
      <section className="py-20 lg:py-[100px]">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle
                eyebrow="What We do"
                title="Powerful"
                accent="features for social growth"
                description="Our pwerful features are designed to drive social growth by expanding reach,
                boosting brand awareness. From targeted content strategies to we provide the tools you need
                to succeed in the dynamic social media landscape."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurFeature