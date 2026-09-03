import ServicesGrid from '../components/sections/services/ServicesGrid'
import OurTestimonial from '../components/sections/shared/OurTestimonial'
import ScrollingTicker from '../components/sections/shared/ScrollingTicker'
import WhyChooseUs from '../components/sections/shared/WhyChooseUs'
import PageHeader from '../components/ui/PageHeader'


const Services = () => {
  return (
    <>
      <PageHeader
        title="our"
        accent="services"
        current="our services"
      />

      <ScrollingTicker />

      <ServicesGrid />

      <OurTestimonial />

      <WhyChooseUs />
    </>
  )
}

export default Services