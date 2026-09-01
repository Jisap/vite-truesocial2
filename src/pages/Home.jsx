import Hero from '../components/sections/home/Hero'
import HowItWorks from '../components/sections/home/HowItWorks'
import OurBlog from '../components/sections/home/OurBlog'
import OurBrands from '../components/sections/home/OurBrands'
import OurFeature from '../components/sections/home/OurFeature'
import OurPricing from '../components/sections/home/OurPricing'
import OurServices from '../components/sections/home/OurServices'
import AboutUs from '../components/sections/shared/AboutUs'
import KeyFacts from '../components/sections/shared/KeyFacts'
import OurFaqs from '../components/sections/shared/OurFaqs'
import OurTestimonial from '../components/sections/shared/OurTestimonial'
import ScrollingTicker from '../components/sections/shared/ScrollingTicker'
import WhyChooseUs from '../components/sections/shared/WhyChooseUs'

const Home = () => {
  return (
    <>
      <Hero />
      <ScrollingTicker />
      <AboutUs />
      <OurServices />
      <OurBrands />
      <WhyChooseUs />
      <OurFeature />
      <KeyFacts />
      <OurPricing />
      <HowItWorks />
      <OurTestimonial />
      <OurFaqs />
      <OurBlog />
    </>
  )
}

export default Home