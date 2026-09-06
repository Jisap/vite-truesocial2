
import PageHeader from '../components/ui/PageHeader'
import PricingGrid from '../components/sections/pricing/PricingGrid'
import ScrollingTicker from '../components/sections/shared/ScrollingTicker'
import OurTestimonial from '../components/sections/shared/OurTestimonial'
import OurFaqs from '../components/sections/shared/OurFaqs'


const Pricing = () => {
  return (
    <>
      <PageHeader title="Pricing" accent="Plan" current="Pricing Plan" />
      <ScrollingTicker />
      <PricingGrid />
      <OurTestimonial />
      <OurFaqs />
    </>
  )
}

export default Pricing