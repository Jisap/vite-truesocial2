import { useState } from "react"
import SectionTitle from "../../ui/SectionTitle"
import Reveal from "../../ui/Reveal"
import { Link } from "react-router-dom"
import { howItWorks } from "../../../data/howItWorks.js"


const HowItWorks = () => {

  const defaultActive = howItWorks.findIndex((s) => s.active); // retorna el index que tenga active en true
  const [active, setActive] = useState(
    defaultActive === -1 ? 0 : defaultActive                   // Si por defecto no hay ningun true, setActive sera 0, si lo hay sera el index de ese true
  )

  return (
    <>
      <section className="py-20 lg:py-[100px]">
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionTitle
                eyebrown='How it work'
                title='Step-by-Step guide to social'
                accent='success'
                description='Our step-by-step guide to social success outlines a clear process to elevate your brand. From strategy creation
                and content development to campaing execution and performance tracking'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HowItWorks