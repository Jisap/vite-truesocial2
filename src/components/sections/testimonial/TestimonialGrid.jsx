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
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}

export default TestimonialGrid