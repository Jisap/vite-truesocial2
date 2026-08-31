import Hero from '../components/sections/home/Hero'
import OurBrands from '../components/sections/home/OurBrands'
import OurFeature from '../components/sections/home/OurFeature'
import OurServices from '../components/sections/home/OurServices'
import AboutUs from '../components/sections/shared/AboutUs'
import KeyFacts from '../components/sections/shared/KeyFacts'
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
    </>
  )
}

export default Home