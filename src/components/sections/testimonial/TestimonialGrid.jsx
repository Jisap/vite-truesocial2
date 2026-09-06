import Reveal from "../../ui/Reveal"
import { reviews } from "@/data/reviews"

const TestimonialGrid = () => {
  return (
    <>
      <section className="py-20 lg:py-[100px]">
        <div className="container-custom grid gap-8 sm:grid-cols-2">
          {reviews.map((review, i) => (
            <Reveal
              key={review.name}
              delay={(i % 2) * 0.25}
              className="grid gap-6 rounded-[24px] border border-divider p-8 sm:grid-cols-[auto_1fr]"
            >
              <img
                src={review.avatar}
                alt={review.name}
                className="h-16 w-16 rounded-full object-cover"
              />

              <div>
                <ul className="mb-4 flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <li key={s}>
                      <i className="fa-solid fa-star" />
                    </li>
                  ))}
                </ul>

                <p className="mb-6 text-sm">
                  {review.quote}
                </p>

                <div className="flex items-center justify-between gap-4 border-t border-divider pt-5">
                  <div>
                    <h3 className="text-base font-bold text-primary capitalize">
                      {review.name}
                    </h3>

                    <p className="mb-0 text-sm capitalize">
                      {review.role}
                    </p>
                  </div>

                  <img
                    src="/images/icon-testimonial-logo.svg"
                    alt=""
                    className="h-6 w-auto opacity-60"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}

export default TestimonialGrid