import Hero from '../components/sections/home/Hero'
import AboutUs from '../components/sections/shared/AboutUs'
import ScrollingTicker from '../components/sections/shared/ScrollingTicker'

const Home = () => {
  return (
    <>
      <Hero />
      <ScrollingTicker />
      <AboutUs />
    </>
  )
}

export default Home