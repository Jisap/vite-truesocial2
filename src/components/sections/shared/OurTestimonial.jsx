import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import Button from "../../ui/Button"
import SectionTitle from "../../ui/SectionTitle"
import Reveal from "../../ui/Reveal"
import Counter from "../../ui/Counter"
import { testimonials } from "../../../data/testimonials.js"


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

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            speed={1000}
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".testimonial-pagination",
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mt-12 lg:mt-16"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="flex h-full flex-col rounded-[24px] border border-divider p-8">
                  <p className="mb-6 flex-1 text-base italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="mb-6 flex items-center gap-4">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="h-14 w-14 rounded-full object-cover"
                    />

                    <div>
                      <h3 className="text-base font-bold text-primary capitalize">
                        {t.name}
                      </h3>

                      <p className="mb-0 text-sm">
                        {t.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-divider pt-5">
                    <div>
                      <h2 className="text-3xl font-bold text-accent">
                        <Counter end={t.stat.end} suffix={t.stat.suffix} />
                      </h2>

                      <p className="mb-0 text-sm">
                        {t.stat.label}
                      </p>
                    </div>

                    <img
                      src="/images/testimonial-quote.svg"
                      alt="quote"
                      className="h-8 w-8 opacity-40"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="testimonial-pagination !relative !bottom-0 mt-10 flex items-center justify-center gap-2" />
        </div>
      </section>
    </>
  )
}

export default OurTestimonial