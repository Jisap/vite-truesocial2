
import AboutUs from "../components/sections/shared/AboutUs";
import ScrollingTicker from "../components/sections/shared/ScrollingTicker";
import PageHeader from "../components/ui/PageHeader";

const About = () => {
  return (
    <>
      <PageHeader
        title="about"
        accent="us"
        current="about us"
      />

      <ScrollingTicker />

      <AboutUs />
    </>
  )
}

export default About