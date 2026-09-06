
import PageHeader from '../components/ui/PageHeader'
import ScrollingTicker from '../components/sections/shared/ScrollingTicker'
import TestimonialGrid from '../components/sections/testimonial/TestimonialGrid'

const Testimonials = () => {
  return (
    <>
      <PageHeader title="Our" accent="Testimonials" current="Our Testimonials" />
      <ScrollingTicker />
      <TestimonialGrid />
    </>
  )
}

export default Testimonials