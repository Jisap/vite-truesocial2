import { Link } from "react-router-dom"
import Button from "../../ui/Button"
import Reveal from "../../ui/Reveal"
import RevealImage from "../../ui/RevealImage"
import SectionTitle from "../../ui/SectionTitle"

const reviewImage = [
  "/images/satisfy-client-img-1.jpg",
  "/images/satisfy-client-img-2.jng",
  "/images/satisfy-client-img-3.jng",
  "/images/satisfy-client-img-4.jng",
  "/images/satisfy-client-img-5.jng",
  "/images/satisfy-client-img-6.jng",
]

const WhatWeDo = () => {
  return (
    <>
      <section className="py-20 lg:py-[100px]">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle
                eyebrown="what We do"
                title="Brands through strategic"
                accent="social media marketing"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default WhatWeDo