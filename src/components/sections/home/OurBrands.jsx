import { useState } from "react"
import SectionTitle from "../../ui/SectionTitle"
import Button from "../../ui/Button"
import Reveal from "../../ui/Reveal"
import { brandItems } from "../../../data/brands.js"




const OurBrands = () => {

  const defaultActive = brandItems.findIndex((b) => b.active); // Solo un item tiene el valor true de active
  const [active, setActive] = useState(                        // Si no hay ningun item activo, el active será 0 sino el defaultActive
    defaultActive === -1 ? 0 : defaultActive
  )

  return (
    <>
      <section className="py-20 lg:py-[100px]">
        <div className="container-custom">
          <div className="overflow-hidden rounded-[30px] border border-divider p-8 sm:p-14">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
              <SectionTitle
                eyebrown="What we do"
                title="Elevate your"
                accent="brand"
                className="mb-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurBrands