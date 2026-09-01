import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import Button from "../../ui/Button"
import SectionTitle from "../../ui/SectionTitle"
import Reveal from "../../ui/Reveal"
import Counter from "../../ui/Counter"



const OurTestimonial = () => {
  return (
    <>
      <section className="py-20 lg:py-[100px]">
        <div className="container-custom">
          <div className="mt-14 flex flex-wrap items-end justify-between gap-6 border-b border-primary/20 pb-10">
            <SectionTitle
              eyebrown="testimonials"
              title="What"
              accent="clients are saying"
              className="mb-0 max-w-[605px]"
            />

            <Reveal delay={0.2}>
              <Button href="/team">
                contact us
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurTestimonial