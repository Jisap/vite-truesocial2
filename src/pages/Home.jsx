import Hero from '../components/sections/home/Hero'
import OurServices from '../components/sections/home/OurServices'
import AboutUs from '../components/sections/shared/AboutUs'
import ScrollingTicker from '../components/sections/shared/ScrollingTicker'

const Home = () => {
  return (
    <>
      <Hero />
      <ScrollingTicker />
      <AboutUs />
      <OurServices />
    </>
  )
}

export default Home