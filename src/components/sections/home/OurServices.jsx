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
            title="Our Social Media"
            eyebrown="Services"
          />
        </div>
      </div>
    </section>
  )
}

export default OurServices